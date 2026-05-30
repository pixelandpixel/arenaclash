'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function AnimatedCounter({ value, suffix = '', decimals = 0, className = '', style, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayed, setDisplayed] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const startDelay = setTimeout(() => {
      const duration = 1200;
      const startTime = performance.now();
      let raf: number;

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayed(Math.round(value * eased * Math.pow(10, decimals)) / Math.pow(10, decimals));

        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        }
      }

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, delay * 1000);

    return () => clearTimeout(startDelay);
  }, [isVisible, value, decimals, delay]);

  return (
    <span ref={ref} className={className} style={style}>
      {displayed.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}
