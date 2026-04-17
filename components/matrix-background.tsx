"use client";

import { useEffect, useRef } from "react";

interface MatrixChar {
  x: number;
  y: number;
  char: string;
  opacity: number;
  speed: number;
}

const MATRIX_CHARS = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|=+-_*#@$%";
const COLUMN_WIDTH = 20;

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const charArray = MATRIX_CHARS.split("");
    let animationFrameId = 0;
    let matrix: MatrixChar[] = [];

    const initializeMatrix = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const columns = Math.ceil(canvas.width / COLUMN_WIDTH);
      matrix = Array.from({ length: columns }, (_, index) => ({
        x: index * COLUMN_WIDTH,
        y: Math.random() * canvas.height,
        char: charArray[Math.floor(Math.random() * charArray.length)],
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 2 + 1,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      matrix.forEach((drop) => {
        drop.char = charArray[Math.floor(Math.random() * charArray.length)];

        const gradient = ctx.createLinearGradient(0, drop.y - 50, 0, drop.y + 50);
        gradient.addColorStop(0, "rgba(34, 197, 94, 0)");
        gradient.addColorStop(0.5, `rgba(34, 197, 94, ${drop.opacity})`);
        gradient.addColorStop(1, "rgba(34, 197, 94, 0)");

        ctx.fillStyle = gradient;
        ctx.font = "bold 16px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(drop.char, drop.x + 10, drop.y);

        if (Math.random() > 0.9) {
          ctx.fillStyle = `rgba(6, 182, 212, ${drop.opacity * 0.7})`;
          ctx.fillText(drop.char, drop.x + 10, drop.y);
        }

        drop.y += drop.speed;

        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.opacity = Math.random() * 0.5 + 0.5;
          drop.speed = Math.random() * 2 + 1;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    initializeMatrix();
    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener("resize", initializeMatrix);

    return () => {
      window.removeEventListener("resize", initializeMatrix);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full opacity-15 pointer-events-none z-0"
    />
  );
}
