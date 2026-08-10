"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Download, Trash2 } from "lucide-react";

// a tiny KidPix-inspired canvas — chunky tools, bright pastel palette,
// stamps drawn from the site's own motifs (flower, circuit, felt
// heart, star) instead of clip art. standalone page, own local save
// (download as PNG), no backend — small and cute on purpose.

const COLORS = [
  "#8b7ab8", // wisteria
  "#e6a8c4", // blush
  "#7fb88a", // matcha
  "#d9b84a", // butter
  "#6ea8c9", // sky
  "#1a1a1a", // ink
];

const BRUSHES = {
  pencil: { width: 3, jitter: 0 },
  crayon: { width: 12, jitter: 1.6 },
  big: { width: 26, jitter: 0 },
};

// U+FE0E forces the bolt to render as a plain monochrome glyph
// instead of defaulting to a colorful emoji, matching the rest of
// the set — see DrawTools.jsx for the same fix.
const STAMPS = ["✿", "⚡\uFE0E", "♡", "★", "☁", "⚙"];

export default function KidCanvasPage() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);

  const [tool, setTool] = useState("crayon"); // 'pencil' | 'crayon' | 'big' | 'stamp' | 'eraser'
  const [color, setColor] = useState(COLORS[0]);
  const [stamp, setStamp] = useState(STAMPS[0]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    const prev = ctxRef.current ? canvas.toDataURL() : null;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;
    if (prev) {
      const img = new window.Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
      img.src = prev;
    }
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  const getPoint = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const placeStamp = (p) => {
    const ctx = ctxRef.current;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((Math.random() - 0.5) * 0.5);
    ctx.font = "40px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = color;
    ctx.fillText(stamp, 0, 0);
    ctx.restore();
  };

  const handleStart = (e) => {
    const p = getPoint(e);
    if (tool === "stamp") {
      placeStamp(p);
      return;
    }
    isDrawingRef.current = true;
    lastPointRef.current = p;
  };

  const handleMove = (e) => {
    if (!isDrawingRef.current || tool === "stamp") return;
    e.preventDefault();
    const ctx = ctxRef.current;
    const p = getPoint(e);
    const last = lastPointRef.current;

    if (tool === "eraser") {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 34;
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      ctx.restore();
    } else {
      const cfg = BRUSHES[tool] || BRUSHES.pencil;
      const jitter = cfg.jitter
        ? {
            x: p.x + (Math.random() - 0.5) * cfg.jitter * 3,
            y: p.y + (Math.random() - 0.5) * cfg.jitter * 3,
          }
        : p;
      ctx.strokeStyle = color;
      ctx.lineWidth = cfg.width;
      ctx.globalAlpha = 0.92;
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(jitter.x, jitter.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    lastPointRef.current = p;
  };

  const handleEnd = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    // flatten onto a white background — the canvas itself is transparent,
    // a raw PNG export would otherwise save with a see-through backdrop.
    const flat = document.createElement("canvas");
    flat.width = canvas.width;
    flat.height = canvas.height;
    const fctx = flat.getContext("2d");
    fctx.fillStyle = "#fffdf6";
    fctx.fillRect(0, 0, flat.width, flat.height);
    fctx.drawImage(canvas, 0, 0);
    const link = document.createElement("a");
    link.download = "yafira-doodle.png";
    link.href = flat.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="kid-canvas-page">
      <h1 className="kid-canvas-title">✿ doodle pad ✿</h1>

      <div className="kid-canvas-frame">
        <canvas
          ref={canvasRef}
          className={`kid-canvas ${tool === "eraser" ? "cursor-eraser" : "cursor-draw"}`}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      </div>

      <div className="kid-toolbar">
        <div className="kid-tool-row">
          {["pencil", "crayon", "big", "stamp", "eraser"].map((t) => (
            <button
              key={t}
              type="button"
              className={`kid-tool-btn ${tool === t ? "active" : ""}`}
              onClick={() => setTool(t)}
            >
              {t === "pencil" && "✎"}
              {t === "crayon" && "🖍"}
              {t === "big" && "●"}
              {t === "stamp" && "✦"}
              {t === "eraser" && "▭"}
            </button>
          ))}
        </div>

        {tool === "stamp" ? (
          <div className="kid-stamp-row">
            {STAMPS.map((s) => (
              <button
                key={s}
                type="button"
                className={`kid-stamp-btn ${stamp === s ? "active" : ""}`}
                onClick={() => setStamp(s)}
              >
                {s}
              </button>
            ))}
          </div>
        ) : (
          <div className="kid-color-row">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className={`kid-color-btn ${color === c ? "active" : ""}`}
                style={{ "--swatch": c }}
                onClick={() => setColor(c)}
                aria-label={c}
              />
            ))}
          </div>
        )}

        <div className="kid-action-row">
          <button
            type="button"
            className="kid-action-btn"
            onClick={handleClear}
          >
            <Trash2 size={16} /> clear
          </button>
          <button
            type="button"
            className="kid-action-btn primary"
            onClick={handleDownload}
          >
            <Download size={16} /> save
          </button>
        </div>
      </div>
    </div>
  );
}
