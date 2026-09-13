"use client";

import { useEffect, useRef } from "react";
import contours from "@/data/toros-contours.json";

type Point = [number, number];

type Contour = {
  length: number;
  points: Point[];
};

type LedContourProps = {
  src?: string;
  duration?: number;
  className?: string;
};

const data = contours as {
  width: number;
  height: number;
  paths: Contour[];
};

export default function LedContour({
  src = "/toros-misti.png",
  duration = 18000,
  className = "",
}: LedContourProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = src;

    let raf = 0;
    let start = 0;
    let resizeObserver: ResizeObserver | null = null;

    // Pre-calculate the length of every contour.
    const paths = data.paths.map((path) => {
      const points = path.points;
      const cumulative = [0];
      let total = 0;

      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        const b = points[(i + 1) % points.length];
        total += Math.hypot(b[0] - a[0], b[1] - a[1]);
        cumulative.push(total);
      }

      return { ...path, cumulative, total };
    });

    const totalLength = paths.reduce((sum, p) => sum + p.total, 0);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      if (!start) start = time;

      const elapsed = (time - start) % duration;
      const progress = elapsed / duration;
      const distance = progress * totalLength;

      const rect = canvas.getBoundingClientRect();
      const scale = Math.min(
        rect.width / data.width,
        rect.height / data.height
      );

      const offsetX = (rect.width - data.width * scale) / 2;
      const offsetY = (rect.height - data.height * scale) / 2;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Original illustration stays untouched underneath.
      ctx.drawImage(
        image,
        offsetX,
        offsetY,
        data.width * scale,
        data.height * scale
      );

      // Find the active contour.
      let remaining = distance;
      let active = paths[paths.length - 1];

      for (const path of paths) {
        if (remaining <= path.total) {
          active = path;
          break;
        }
        remaining -= path.total;
      }

      const localDistance = remaining;
      const points = active.points;
      const cumulative = active.cumulative;
      const total = active.total;

      // Find current point on the contour.
      let segment = 0;
      while (
        segment < points.length - 1 &&
        cumulative[segment + 1] < localDistance
      ) {
        segment++;
      }

      const segmentStart = cumulative[segment];
      const segmentEnd = cumulative[segment + 1];
      const t =
        segmentEnd === segmentStart
          ? 0
          : (localDistance - segmentStart) / (segmentEnd - segmentStart);

      const a = points[segment];
      const b = points[(segment + 1) % points.length];

      const head: Point = [
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
      ];

      // Draw a short luminous trail behind the LED head.
      const trailLength = Math.min(260, total * 0.18);
      const trailStart = Math.max(0, localDistance - trailLength);

      const trail: Point[] = [];
      const samples = 28;

      for (let i = 0; i <= samples; i++) {
        const d =
          trailStart + ((localDistance - trailStart) * i) / samples;

        let s = 0;
        while (s < points.length - 1 && cumulative[s + 1] < d) {
          s++;
        }

        const sa = points[s];
        const sb = points[(s + 1) % points.length];
        const sd0 = cumulative[s];
        const sd1 = cumulative[s + 1];
        const st = sd1 === sd0 ? 0 : (d - sd0) / (sd1 - sd0);

        trail.push([
          sa[0] + (sb[0] - sa[0]) * st,
          sa[1] + (sb[1] - sa[1]) * st,
        ]);
      }

      const toScreen = (p: Point): Point => [
        offsetX + p[0] * scale,
        offsetY + p[1] * scale,
      ];

      // Soft wide glow.
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = "#FFD54A";
      ctx.shadowBlur = 26;
      ctx.strokeStyle = "rgba(255, 196, 40, 0.32)";
      ctx.lineWidth = Math.max(3, 7 * scale);

      ctx.beginPath();
      trail.forEach((p, i) => {
        const [x, y] = toScreen(p);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Stronger inner glow.
      ctx.shadowBlur = 12;
      ctx.strokeStyle = "rgba(255, 218, 90, 0.95)";
      ctx.lineWidth = Math.max(1.5, 3.2 * scale);

      ctx.beginPath();
      trail.forEach((p, i) => {
        const [x, y] = toScreen(p);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Hot LED head.
      const [hx, hy] = toScreen(head);

      ctx.shadowColor = "#FFE68A";
      ctx.shadowBlur = 30;
      ctx.fillStyle = "#FFF7CF";
      ctx.beginPath();
      ctx.arc(hx, hy, Math.max(2, 4 * scale), 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 8;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(hx, hy, Math.max(1, 1.6 * scale), 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    image.onload = () => {
      resize();
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas);
      raf = requestAnimationFrame(draw);
    };

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver?.disconnect();
    };
  }, [src, duration]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
