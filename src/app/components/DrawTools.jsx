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
  Frame,
  Paintbrush,
} from "lucide-react";

const COLORS = [
  { name: "wisteria", value: "#8b7ab8" },
  { name: "blush", value: "#e6a8c4" },
  { name: "matcha", value: "#7fb88a" },
  { name: "sky", value: "#6ea8c9" },
  { name: "ink", value: "#1a1a1a" },
];

const STAMPS = ["✿", "⚡\uFE0E", "♡", "★", "⚙"];

const TOOLS = {
  highlighter: { width: 4, alpha: 0.5, jitter: 0 },
  crayon: { width: 10, alpha: 0.85, jitter: 1.4 },
  marker: { width: 18, alpha: 0.9, jitter: 0.4 },
};

const PAGE_STORAGE_PREFIX = "draw-layer:";
const PAD_STORAGE_KEY = "draw-layer:pad";

export default function DrawTools() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [active, setActive] = useState(false);
  const [mode, setMode] = useState("page");
  const [tool, setTool] = useState("highlighter");
  const [color, setColor] = useState(COLORS[0].value);
  const [stamp, setStamp] = useState(STAMPS[0]);

  const pageCanvasRef = useRef(null);
  const pageCtxRef = useRef(null);
  const pageStrokesRef = useRef([]);

  const padCanvasRef = useRef(null);
  const padCtxRef = useRef(null);
  const padStrokesRef = useRef([]);

  const currentStrokeRef = useRef(null);
  const isDrawingRef = useRef(false);

  const [hasPageStrokes, setHasPageStrokes] = useState(false);
  const [hasPadStrokes, setHasPadStrokes] = useState(false);

  const pageStorageKey =
    typeof window !== "undefined"
      ? PAGE_STORAGE_PREFIX + window.location.pathname
      : null;

  const target = () =>
    mode === "pad"
      ? {
          canvasRef: padCanvasRef,
          ctxRef: padCtxRef,
          strokesRef: padStrokesRef,
          storageKey: PAD_STORAGE_KEY,
          setHas: setHasPadStrokes,
        }
      : {
          canvasRef: pageCanvasRef,
          ctxRef: pageCtxRef,
          strokesRef: pageStrokesRef,
          storageKey: pageStorageKey,
          setHas: setHasPageStrokes,
        };

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
    for (let i = 1; i < s.points.length; i++)
      ctx.lineTo(s.points[i].x, s.points[i].y);
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  const redraw = (t) => {
    const ctx = t.ctxRef.current;
    const canvas = t.canvasRef.current;
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const mark of t.strokesRef.current) {
      if (mark.type === "stamp") drawStamp(ctx, mark);
      else drawStroke(ctx, mark);
    }
  };

  const persist = (t) => {
    if (!t.storageKey) return;
    try {
      localStorage.setItem(t.storageKey, JSON.stringify(t.strokesRef.current));
    } catch (e) {}
    t.setHas(t.strokesRef.current.length > 0);
  };

  const loadSaved = (t) => {
    if (!t.storageKey) return;
    try {
      const saved = localStorage.getItem(t.storageKey);
      if (saved) {
        t.strokesRef.current = JSON.parse(saved);
        t.setHas(t.strokesRef.current.length > 0);
      }
    } catch (e) {}
  };

  // page canvas resize — FIXED: resets to 0 before remeasuring, and
  // measures window.innerWidth instead of document.documentElement's
  // scrollWidth. The old version fed the canvas's own current size
  // back into the next measurement, so on resize it could only grow,
  // never shrink — inflating the page's total width past the visible
  // viewport. Since overflow-x:hidden is set globally, that showed up
  // as every line of text getting silently clipped at the right edge
  // instead of a scrollbar appearing — exactly the compressed-window
  // bug reported.
  const resizePageCanvas = useCallback(() => {
    const canvas = pageCanvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;

    canvas.style.width = "0px";
    canvas.style.height = "0px";

    // clientWidth, not innerWidth — innerWidth includes the vertical
    // scrollbar's track width, so it was still a few px wider than
    // the actual visible content area. clientWidth excludes it,
    // matching exactly what overflow-x:hidden is meant to protect.
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.scrollHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    pageCtxRef.current = ctx;
    redraw({
      canvasRef: pageCanvasRef,
      ctxRef: pageCtxRef,
      strokesRef: pageStrokesRef,
    });
  }, []);

  useEffect(() => {
    loadSaved({
      storageKey: pageStorageKey,
      strokesRef: pageStrokesRef,
      setHas: setHasPageStrokes,
    });
    resizePageCanvas();
    window.addEventListener("resize", resizePageCanvas);
    return () => window.removeEventListener("resize", resizePageCanvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizePageCanvas]);

  const resizePadCanvas = useCallback(() => {
    const canvas = padCanvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    padCtxRef.current = ctx;
    redraw({
      canvasRef: padCanvasRef,
      ctxRef: padCtxRef,
      strokesRef: padStrokesRef,
    });
  }, []);

  useEffect(() => {
    if (mode !== "pad") return;
    loadSaved({
      storageKey: PAD_STORAGE_KEY,
      strokesRef: padStrokesRef,
      setHas: setHasPadStrokes,
    });
    resizePadCanvas();
    window.addEventListener("resize", resizePadCanvas);
    return () => window.removeEventListener("resize", resizePadCanvas);
  }, [mode, resizePadCanvas]);

  useEffect(() => {
    if (mode !== "pad") return;
    const onKey = (e) => e.key === "Escape" && setMode("page");
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode]);

  const getPoint = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    if (mode === "page") {
      return {
        x: clientX - rect.left + window.scrollX,
        y: clientY - rect.top + window.scrollY,
      };
    }
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const jitterPoint = (p, amount) => {
    if (!amount) return p;
    return {
      x: p.x + (Math.random() - 0.5) * amount * 4,
      y: p.y + (Math.random() - 0.5) * amount * 4,
    };
  };

  const placeStamp = (t, point) => {
    const mark = {
      type: "stamp",
      x: point.x,
      y: point.y,
      glyph: stamp,
      color,
      size: 26,
      rotation: (Math.random() - 0.5) * 0.6,
    };
    t.strokesRef.current.push(mark);
    redraw(t);
    persist(t);
  };

  const handleStart = (e) => {
    if (!active) return;
    if (e.touches && e.touches.length > 1) {
      isDrawingRef.current = false;
      return;
    }
    const t = target();
    const point = getPoint(e, t.canvasRef.current);
    if (tool === "stamp") {
      placeStamp(t, point);
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
    if (e.touches && e.touches.length > 1) return;
    if (!isDrawingRef.current || tool === "stamp") return;
    e.preventDefault();
    const t = target();
    const cfg = TOOLS[tool];
    const point = jitterPoint(getPoint(e, t.canvasRef.current), cfg.jitter);
    currentStrokeRef.current.points.push(point);

    const ctx = t.ctxRef.current;
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
    const t = target();
    if (
      currentStrokeRef.current &&
      currentStrokeRef.current.points.length > 1
    ) {
      t.strokesRef.current.push(currentStrokeRef.current);
      persist(t);
    }
    currentStrokeRef.current = null;
  };

  const handleUndo = () => {
    const t = target();
    t.strokesRef.current.pop();
    redraw(t);
    persist(t);
  };

  const handleClear = () => {
    const t = target();
    t.strokesRef.current = [];
    redraw(t);
    persist(t);
  };

  const handleDownload = () => {
    const t = target();
    const canvas = t.canvasRef.current;
    const flat = document.createElement("canvas");
    flat.width = canvas.width;
    flat.height = canvas.height;
    const fctx = flat.getContext("2d");
    fctx.fillStyle = "#fffdf6";
    fctx.fillRect(0, 0, flat.width, flat.height);
    fctx.drawImage(canvas, 0, 0);
    const link = document.createElement("a");
    link.download =
      mode === "pad" ? "cutepix-doodle.png" : "yafira-site-doodle.png";
    link.href = flat.toDataURL("image/png");
    link.click();
  };

  const hasStrokes = mode === "pad" ? hasPadStrokes : hasPageStrokes;

  if (isMobile) return null;

  return (
    <>
      <canvas
        ref={pageCanvasRef}
        className={`draw-layer-canvas ${active && mode === "page" ? "is-active" : ""}`}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        aria-hidden="true"
      />

      <div className="draw-toolbar" role="toolbar" aria-label="drawing tools">
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
                className={`draw-toolpick-btn ${tool === "marker" ? "active" : ""}`}
                onClick={() => setTool("marker")}
                aria-label="marker"
                aria-pressed={tool === "marker"}
              >
                <Paintbrush size={15} />
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

            <button
              type="button"
              className={`draw-toolpick-btn draw-pad-btn ${mode === "pad" ? "active" : ""}`}
              onClick={() => setMode((m) => (m === "pad" ? "page" : "pad"))}
              aria-label={
                mode === "pad" ? "draw on the page" : "open a bounded pad"
              }
              aria-pressed={mode === "pad"}
              title={mode === "pad" ? "draw on the page" : "open pad"}
            >
              <Frame size={15} />
            </button>

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
                  aria-label={c.name}
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
              aria-label="save as image"
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
          aria-label={active ? "exit draw mode" : "draw"}
          aria-pressed={active}
        >
          {active ? <X size={18} /> : <Pencil size={18} />}
        </button>
      </div>

      {mode === "pad" && active && (
        <div className="cutepix-pad-backdrop" onClick={() => setMode("page")}>
          <div
            className="cutepix-pad-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <canvas
              ref={padCanvasRef}
              className="cutepix-pad-canvas"
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
            />
          </div>
        </div>
      )}
    </>
  );
}
