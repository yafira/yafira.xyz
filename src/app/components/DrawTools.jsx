"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Pencil,
  Undo2,
  Trash2,
  X,
  Highlighter,
  Sparkles,
  Download,
} from "lucide-react";

// non-destructive draw layer: a transparent canvas fixed above the
// whole page. pointer-events stays "none" until draw mode is on, so
// the underlying page (links, scroll, layout) is never affected —
// this only ever adds pixels to its own canvas, never touches the DOM.
//
// three tools: highlighter (thin, translucent), crayon (thick,
// opaque, slightly jittered for texture), stamp (tap to place a
// glyph, matching the site's flower/circuit motifs).
//
// touch scrolling: one finger draws, two fingers scroll — checked at
// touchstart so a normal two-finger scroll gesture still works even
// while draw mode is on.

const COLORS = [
  { name: "wisteria", value: "#8b7ab8" },
  { name: "blush", value: "#e6a8c4" },
  { name: "matcha", value: "#7fb88a" },
  { name: "butter", value: "#d9b84a" },
];

// U+FE0E (text variation selector) after the bolt forces it to render
// as a plain monochrome glyph like the rest of the set, instead of
// defaulting to a colorful emoji presentation the way lone "⚡" does
// on most platforms — no actual emoji font involved, same as the
// other stamps.
const STAMPS = ["✿", "☺", "★", "⚡\uFE0E", "♡", "✂", "⚙", "☁"];

const TOOLS = {
  highlighter: { width: 4, alpha: 0.5, jitter: 0 },
  crayon: { width: 10, alpha: 0.85, jitter: 1.4 },
};

const STORAGE_PREFIX = "draw-layer:";

export default function DrawTools() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const strokesRef = useRef([]); // {type:'stroke', points, color, width, alpha, jitter} | {type:'stamp', x, y, glyph, rotation}
  const currentStrokeRef = useRef(null);
  const isDrawingRef = useRef(false);
  const activeTouchesRef = useRef(0);

  const [active, setActive] = useState(false);
  const [tool, setTool] = useState("highlighter"); // 'highlighter' | 'crayon' | 'stamp'
  const [color, setColor] = useState(COLORS[0].value);
  const [stamp, setStamp] = useState(STAMPS[0]);
  const [hasStrokes, setHasStrokes] = useState(false);

  const storageKey =
    typeof window !== "undefined"
      ? STORAGE_PREFIX + window.location.pathname
      : null;

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = document.documentElement.scrollWidth;
    const height = document.documentElement.scrollHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;
    redraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawStamp = (ctx, mark) => {
    ctx.save();
    ctx.translate(mark.x, mark.y);
    ctx.rotate(mark.rotation);
    ctx.font = `${mark.size}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = mark.color;
    ctx.globalAlpha = 0.9;
    ctx.fillText(mark.glyph, 0, 0);
    ctx.restore();
  };

  const drawStroke = (ctx, s) => {
    if (s.points.length < 2) return;
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.width;
    ctx.globalAlpha = s.alpha;
    ctx.beginPath();
    ctx.moveTo(s.points[0].x, s.points[0].y);
    for (let i = 1; i < s.points.length; i++) {
      ctx.lineTo(s.points[i].x, s.points[i].y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  const redraw = useCallback(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const mark of strokesRef.current) {
      if (mark.type === "stamp") drawStamp(ctx, mark);
      else drawStroke(ctx, mark);
    }
  }, []);

  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        strokesRef.current = JSON.parse(saved);
        setHasStrokes(strokesRef.current.length > 0);
      }
    } catch (e) {
      // corrupted or unavailable storage — start empty rather than break the page
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas, storageKey]);

  const persist = useCallback(() => {
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(strokesRef.current));
    } catch (e) {
      // storage full/blocked — drawing still works this session, just won't persist
    }
    setHasStrokes(strokesRef.current.length > 0);
  }, [storageKey]);

  const getPoint = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left + window.scrollX,
      y: clientY - rect.top + window.scrollY,
    };
  };

  const jitterPoint = (p, amount) => {
    if (!amount) return p;
    return {
      x: p.x + (Math.random() - 0.5) * amount * 4,
      y: p.y + (Math.random() - 0.5) * amount * 4,
    };
  };

  const placeStamp = (point) => {
    const mark = {
      type: "stamp",
      x: point.x,
      y: point.y,
      glyph: stamp,
      color,
      size: 26,
      rotation: (Math.random() - 0.5) * 0.6, // slight hand-stamped tilt
    };
    strokesRef.current.push(mark);
    redraw();
    persist();
  };

  const handleStart = (e) => {
    if (!active) return;
    // two-finger touch: let it scroll natively, don't start a stroke
    if (e.touches && e.touches.length > 1) {
      activeTouchesRef.current = e.touches.length;
      isDrawingRef.current = false;
      return;
    }
    activeTouchesRef.current = e.touches ? e.touches.length : 1;

    const point = getPoint(e);
    if (tool === "stamp") {
      placeStamp(point);
      return;
    }
    isDrawingRef.current = true;
    const cfg = TOOLS[tool];
    currentStrokeRef.current = {
      type: "stroke",
      points: [point],
      color,
      width: cfg.width,
      alpha: cfg.alpha,
      jitter: cfg.jitter,
    };
  };

  const handleMove = (e) => {
    if (!active) return;
    if (e.touches && e.touches.length > 1) return; // two fingers: let native scroll happen
    if (!isDrawingRef.current || tool === "stamp") return;
    e.preventDefault();
    const cfg = TOOLS[tool];
    const point = jitterPoint(getPoint(e), cfg.jitter);
    currentStrokeRef.current.points.push(point);

    const ctx = ctxRef.current;
    const pts = currentStrokeRef.current.points;
    if (pts.length < 2) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = cfg.width;
    ctx.globalAlpha = cfg.alpha;
    ctx.beginPath();
    ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
    ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  const handleEnd = () => {
    if (!active || !isDrawingRef.current) return;
    isDrawingRef.current = false;
    if (
      currentStrokeRef.current &&
      currentStrokeRef.current.points.length > 1
    ) {
      strokesRef.current.push(currentStrokeRef.current);
      persist();
    }
    currentStrokeRef.current = null;
  };

  const handleUndo = () => {
    strokesRef.current.pop();
    redraw();
    persist();
  };

  const handleClear = () => {
    strokesRef.current = [];
    redraw();
    persist();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    // flatten onto a pastel backdrop — the doodle canvas itself is
    // transparent, so a raw export alone would just be marks floating
    // on nothing. This saves the doodle as its own little artifact,
    // not a screenshot of the actual page behind it.
    const flat = document.createElement("canvas");
    flat.width = canvas.width;
    flat.height = canvas.height;
    const fctx = flat.getContext("2d");
    fctx.fillStyle = "#fffdf6";
    fctx.fillRect(0, 0, flat.width, flat.height);
    fctx.drawImage(canvas, 0, 0);
    const link = document.createElement("a");
    link.download = "yafira-site-doodle.png";
    link.href = flat.toDataURL("image/png");
    link.click();
  };

  // canvas only claims touch when a single finger is drawing — CSS
  // touch-action switches based on tool/finger state below via class.
  return (
    <>
      <canvas
        ref={canvasRef}
        className={`draw-layer-canvas ${active ? "is-active" : ""}`}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        aria-hidden="true"
      />

      <div
        className="draw-toolbar"
        role="toolbar"
        aria-label="page annotation tools"
      >
        {active && (
          <>
            <div
              className="draw-tool-group"
              role="radiogroup"
              aria-label="tool"
            >
              <button
                type="button"
                className={`draw-toolpick-btn ${tool === "highlighter" ? "active" : ""}`}
                onClick={() => setTool("highlighter")}
                aria-label="highlighter"
                aria-pressed={tool === "highlighter"}
              >
                <Highlighter size={15} />
              </button>
              <button
                type="button"
                className={`draw-toolpick-btn ${tool === "crayon" ? "active" : ""}`}
                onClick={() => setTool("crayon")}
                aria-label="crayon"
                aria-pressed={tool === "crayon"}
              >
                <Pencil size={15} />
              </button>
              <button
                type="button"
                className={`draw-toolpick-btn ${tool === "stamp" ? "active" : ""}`}
                onClick={() => setTool("stamp")}
                aria-label="stamp"
                aria-pressed={tool === "stamp"}
              >
                <Sparkles size={15} />
              </button>
            </div>

            {tool === "stamp" ? (
              <div className="draw-stamp-row">
                {STAMPS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`draw-stamp-btn ${stamp === s ? "active" : ""}`}
                    onClick={() => setStamp(s)}
                    aria-label={`stamp ${s}`}
                    aria-pressed={stamp === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : (
              COLORS.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  className={`draw-color-btn ${color === c.value ? "active" : ""}`}
                  style={{ "--swatch": c.value }}
                  onClick={() => setColor(c.value)}
                  aria-label={`${c.name}`}
                  aria-pressed={color === c.value}
                />
              ))
            )}

            <button
              type="button"
              className="draw-tool-btn"
              onClick={handleUndo}
              aria-label="undo last mark"
              disabled={!hasStrokes}
            >
              <Undo2 size={16} />
            </button>
            <button
              type="button"
              className="draw-tool-btn"
              onClick={handleClear}
              aria-label="clear all marks"
              disabled={!hasStrokes}
            >
              <Trash2 size={16} />
            </button>
            <button
              type="button"
              className="draw-tool-btn"
              onClick={handleDownload}
              aria-label="save doodle as image"
              disabled={!hasStrokes}
            >
              <Download size={16} />
            </button>
          </>
        )}
        <button
          type="button"
          className={`draw-toggle-btn ${active ? "active" : ""}`}
          onClick={() => setActive((v) => !v)}
          aria-label={active ? "exit draw mode" : "highlight the page"}
          aria-pressed={active}
        >
          {active ? <X size={18} /> : <Pencil size={18} />}
        </button>
      </div>
    </>
  );
}
