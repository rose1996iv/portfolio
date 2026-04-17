"use client";

import { useEffect, useRef } from "react";

interface MatrixChar {
  x: number;
  y: number;
  char: string;
  opacity: number;
  speed: number;
}

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Matrix characters
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    const charArray = chars.split("");

    // Create matrix columns
    const columns = Math.ceil(canvas.width / 20);
    const matrix: MatrixChar[] = [];

    for (let i = 0; i < columns; i++) {
      matrix.push({
        x: i * 20,
        y: Math.random() * canvas.height,
        char: charArray[Math.floor(Math.random() * charArray.length)],
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw matrix rain
      matrix.forEach((drop) => {
        // Random character
        drop.char = charArray[Math.floor(Math.random() * charArray.length)];

        // Draw character with gradient
        const gradient = ctx.createLinearGradient(0, drop.y - 50, 0, drop.y + 50);
        gradient.addColorStop(0, `rgba(34, 197, 94, 0)`);
        gradient.addColorStop(0.5, `rgba(34, 197, 94, ${drop.opacity})`);
        gradient.addColorStop(1, `rgba(34, 197, 94, 0)`);

        ctx.fillStyle = gradient;
        ctx.font = "bold 16px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(drop.char, drop.x + 10, drop.y);

        // Add glow effect occasionally
        if (Math.random() > 0.9) {
          ctx.fillStyle = `rgba(6, 182, 212, ${drop.opacity * 0.7})`;
          ctx.fillText(drop.char, drop.x + 10, drop.y);
        }

        // Update position
        drop.y += drop.speed;

        // Reset if off screen
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.opacity = Math.random() * 0.5 + 0.5;
          drop.speed = Math.random() * 2 + 1;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-15 pointer-events-none z-0"
    />
  );
}
