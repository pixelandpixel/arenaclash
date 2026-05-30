"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function FloatingBall() {
  const [scrollY, setScrollY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const frameRef = useRef<number>(0);
  const velocityRef = useRef(0);
  const smoothRef = useRef(0);
  const lastPos = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    setViewport({ w: window.innerWidth, h: window.innerHeight });
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);

    const tick = () => {
      const now = performance.now();
      const dy = Math.abs(window.scrollY - lastPos.current);
      const dt = now - lastTime.current;
      if (dt > 16) {
        velocityRef.current = dy / dt;
        lastPos.current = window.scrollY;
        lastTime.current = now;
      }
      smoothRef.current += (velocityRef.current * 8 - smoothRef.current) * 0.12;
      if (Math.abs(smoothRef.current) < 0.02) smoothRef.current = 0;
      setBlur(smoothRef.current);
      setScrollY(window.scrollY);
      frameRef.current = requestAnimationFrame(tick);
    };
    lastPos.current = window.scrollY;
    lastTime.current = performance.now();
    frameRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", () => {}, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const docH = typeof document !== "undefined" ? document.documentElement.scrollHeight - viewport.h : 1;
  const progress = Math.min(scrollY / Math.max(docH, 1), 1);

  const driftX = Math.sin(progress * Math.PI * 3) * 120;
  const driftY = progress * -80;
  const scale = 0.7 + progress * 0.6;

  const startX = viewport.w * 0.82;
  const startY = viewport.h * 0.25;

  return (
    <div
      className="pointer-events-none fixed"
      style={{
        zIndex: 5,
        left: startX + driftX,
        top: startY + driftY,
        transform: `translate(-50%, -50%) scale(${scale})`,
        filter: `blur(${blur}px)`,
        willChange: "transform, filter",
      }}
    >
      <div
        className="animate-ball-spin"
        style={{
          width: "clamp(160px, 30vw, 400px)",
          height: "clamp(160px, 30vw, 400px)",
        }}
      >
        <Image
          src="/images/Cricket ball.png"
          alt=""
          fill
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
    </div>
  );
}
