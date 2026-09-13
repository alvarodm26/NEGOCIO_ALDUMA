
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
  src = "/images/toros-misti.png",
  duration = 45000,
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

    // ============================================================
    // PRECALCULAR CONTORNOS
    // ============================================================

    const paths = data.paths.map((path) => {
      const points = path.points;

      const cumulative = [0];

      let total = 0;

      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        const b = points[(i + 1) % points.length];

        total += Math.hypot(
          b[0] - a[0],
          b[1] - a[1]
        );

        cumulative.push(total);
      }

      return {
        ...path,
        cumulative,
        total,
      };
    });

    const totalLength = paths.reduce(
      (sum, path) => sum + path.total,
      0
    );

    // ============================================================
    // RESIZE
    // ============================================================

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = Math.round(
        rect.width * dpr
      );

      canvas.height = Math.round(
        rect.height * dpr
      );

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    // ============================================================
    // ANIMACIÓN
    // ============================================================

    const draw = (time: number) => {
      if (!start) {
        start = time;
      }

      const elapsed =
        (time - start) % duration;

      const progress =
        elapsed / duration;

      const distance =
        progress * totalLength;

      const rect =
        canvas.getBoundingClientRect();

      const scale = Math.min(
        rect.width / data.width,
        rect.height / data.height
      );

      const offsetX =
        (rect.width -
          data.width * scale) /
        2;

      const offsetY =
        (rect.height -
          data.height * scale) /
        2;

      // ============================================================
      // LIMPIAR
      // ============================================================

      ctx.clearRect(
        0,
        0,
        rect.width,
        rect.height
      );

      // ============================================================
      // IMAGEN ORIGINAL
      // ============================================================

      ctx.save();

      // El dibujo queda visible pero bastante tenue.
      // Esto permite que el LED amarillo domine visualmente.
      ctx.globalAlpha = 0.28;

      ctx.drawImage(
        image,
        offsetX,
        offsetY,
        data.width * scale,
        data.height * scale
      );

      ctx.restore();

      // ============================================================
      // ENCONTRAR CONTORNO ACTIVO
      // ============================================================

      let remaining = distance;

      let active =
        paths[paths.length - 1];

      for (const path of paths) {
        if (remaining <= path.total) {
          active = path;
          break;
        }

        remaining -= path.total;
      }

      const localDistance =
        remaining;

      const points =
        active.points;

      const cumulative =
        active.cumulative;

      const total =
        active.total;

      // ============================================================
      // POSICIÓN DE LA CABEZA
      // ============================================================

      let segment = 0;

      while (
        segment < points.length - 1 &&
        cumulative[segment + 1] <
          localDistance
      ) {
        segment++;
      }

      const segmentStart =
        cumulative[segment];

      const segmentEnd =
        cumulative[segment + 1];

      const t =
        segmentEnd === segmentStart
          ? 0
          : (localDistance -
              segmentStart) /
            (segmentEnd -
              segmentStart);

      const a =
        points[segment];

      const b =
        points[
          (segment + 1) %
            points.length
        ];

      const head: Point = [
        a[0] +
          (b[0] - a[0]) * t,

        a[1] +
          (b[1] - a[1]) * t,
      ];

      // ============================================================
      // TRAIL MUCHO MÁS LARGO
      // ============================================================

      const trailLength =
        Math.min(
          850,
          total * 0.48
        );

      const trailStart =
        Math.max(
          0,
          localDistance -
            trailLength
        );

      const trail: Point[] = [];

      const samples = 70;

      for (
        let i = 0;
        i <= samples;
        i++
      ) {
        const d =
          trailStart +
          ((localDistance -
            trailStart) *
            i) /
            samples;

        let s = 0;

        while (
          s < points.length - 1 &&
          cumulative[s + 1] < d
        ) {
          s++;
        }

        const sa =
          points[s];

        const sb =
          points[
            (s + 1) %
              points.length
          ];

        const sd0 =
          cumulative[s];

        const sd1 =
          cumulative[s + 1];

        const st =
          sd1 === sd0
            ? 0
            : (d - sd0) /
              (sd1 - sd0);

        trail.push([
          sa[0] +
            (sb[0] - sa[0]) * st,

          sa[1] +
            (sb[1] - sa[1]) * st,
        ]);
      }

      // ============================================================
      // COORDENADAS DE PANTALLA
      // ============================================================

      const toScreen = (
        p: Point
      ): Point => [
        offsetX +
          p[0] * scale,

        offsetY +
          p[1] * scale,
      ];

      // ============================================================
      // LED
      // ============================================================

      ctx.save();

      ctx.globalCompositeOperation =
        "lighter";

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // ============================================================
      // 1. GLOW EXTERIOR MUY GRANDE
      // ============================================================

      ctx.shadowColor =
        "#FFB300";

      ctx.shadowBlur = 70;

      ctx.strokeStyle =
        "rgba(255, 179, 0, 0.45)";

      ctx.lineWidth = Math.max(
        12,
        22 * scale
      );

      ctx.beginPath();

      trail.forEach((p, i) => {
        const [x, y] =
          toScreen(p);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // ============================================================
      // 2. GLOW AMARILLO FUERTE
      // ============================================================

      ctx.shadowColor =
        "#FFC107";

      ctx.shadowBlur = 38;

      ctx.strokeStyle =
        "rgba(255, 193, 7, 0.95)";

      ctx.lineWidth = Math.max(
        8,
        14 * scale
      );

      ctx.beginPath();

      trail.forEach((p, i) => {
        const [x, y] =
          toScreen(p);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // ============================================================
      // 3. LÍNEA CENTRAL AMARILLA
      // ============================================================

      ctx.shadowColor =
        "#FFD740";

      ctx.shadowBlur = 18;

      ctx.strokeStyle =
        "#FFD21F";

      ctx.lineWidth = Math.max(
        5,
        8 * scale
      );

      ctx.beginPath();

      trail.forEach((p, i) => {
        const [x, y] =
          toScreen(p);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // ============================================================
      // 4. CENTRO CALIENTE DEL LED
      // ============================================================

      ctx.shadowColor =
        "#FFF176";

      ctx.shadowBlur = 15;

      ctx.strokeStyle =
        "#FFF59D";

      ctx.lineWidth = Math.max(
        2,
        3.5 * scale
      );

      ctx.beginPath();

      trail.forEach((p, i) => {
        const [x, y] =
          toScreen(p);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // ============================================================
      // 5. CABEZA DEL LED — GRANDE
      // ============================================================

      const [hx, hy] =
        toScreen(head);

      // Halo gigante
      ctx.shadowColor =
        "#FFB300";

      ctx.shadowBlur = 80;

      ctx.fillStyle =
        "rgba(255, 179, 0, 0.9)";

      ctx.beginPath();

      ctx.arc(
        hx,
        hy,
        Math.max(
          12,
          17 * scale
        ),
        0,
        Math.PI * 2
      );

      ctx.fill();

      // Núcleo amarillo
      ctx.shadowColor =
        "#FFD600";

      ctx.shadowBlur = 45;

      ctx.fillStyle =
        "#FFD600";

      ctx.beginPath();

      ctx.arc(
        hx,
        hy,
        Math.max(
          7,
          10 * scale
        ),
        0,
        Math.PI * 2
      );

      ctx.fill();

      // Centro blanco/amarillo
      ctx.shadowBlur = 20;

      ctx.fillStyle =
        "#FFF59D";

      ctx.beginPath();

      ctx.arc(
        hx,
        hy,
        Math.max(
          3,
          5 * scale
        ),
        0,
        Math.PI * 2
      );

      ctx.fill();

      // Punto central
      ctx.shadowBlur = 8;

      ctx.fillStyle =
        "#FFFFFF";

      ctx.beginPath();

      ctx.arc(
        hx,
        hy,
        Math.max(
          1.5,
          2.5 * scale
        ),
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

      // ============================================================
      // SIGUIENTE FRAME
      // ============================================================

      raf =
        requestAnimationFrame(draw);
    };

    // ============================================================
    // CARGAR IMAGEN
    // ============================================================

    image.onload = () => {
      resize();

      resizeObserver =
        new ResizeObserver(
          resize
        );

      resizeObserver.observe(
        canvas
      );

      raf =
        requestAnimationFrame(
          draw
        );
    };

    // ============================================================
    // CLEANUP
    // ============================================================

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
```

Y en tu `Footer` usa:

```tsx
<LedContour
  src="/images/toros-misti.png"
  duration={45000}
/>
