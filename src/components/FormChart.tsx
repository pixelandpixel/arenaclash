'use client';

import { useEffect, useRef, useState } from 'react';
import type { RecentMatch } from '@/data/players';

interface FormChartProps {
  matches: RecentMatch[];
  accentColor: string;
}

function extractRuns(score: string): number {
  const match = score.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function extractWickets(score: string): number | null {
  const match = score.match(/\b(\d+)\/\d+/);
  if (match && score.includes('/')) {
    return parseInt(match[1], 10);
  }
  return null;
}

export function FormChart({ matches, accentColor }: FormChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !animated) {
      const timer = setTimeout(() => setAnimated(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animated]);

  const values = matches.map((m) => extractRuns(m.score));
  const maxVal = Math.max(...values, 1);
  const barWidth = 100 / values.length;

  return (
    <div ref={containerRef}>
      <div className="flex items-end gap-2" style={{ height: 140 }}>
        {matches.map((m, i) => {
          const val = values[i];
          const heightPct = (val / maxVal) * 100;
          const isWin = m.result === 'win';
          const barColor = isWin ? 'oklch(52% 0.22 25)' : 'oklch(35% 0.005 30)';
          const delay = i * 0.1;

          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-end"
              style={{ height: '100%' }}
            >
              <span
                className="stat-label"
                style={{
                  color: 'oklch(65% 0.005 30)',
                  marginBottom: 4,
                  opacity: animated ? 1 : 0,
                  transition: `opacity 0.4s ease ${delay + 0.4}s`,
                }}
              >
                {val}
              </span>
              <div
                style={{
                  width: '60%',
                  height: animated ? `${heightPct}%` : '0%',
                  background: `linear-gradient(to top, ${barColor}, ${isWin ? 'oklch(68% 0.16 25)' : 'oklch(42% 0.005 30)'})`,
                  borderRadius: '2px 2px 0 0',
                  transition: `height 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
                  position: 'relative',
                  minHeight: animated && heightPct > 0 ? '4px' : '0%',
                }}
              >
                {isWin && animated && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -3,
                      left: '50%',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'oklch(76% 0.16 85)',
                      transform: 'translateX(-50%)',
                      opacity: animated ? 1 : 0,
                      transition: `opacity 0.3s ease ${delay + 0.6}s`,
                    }}
                  />
                )}
              </div>
              <span
                className="stat-label"
                style={{
                  color: 'oklch(42% 0.005 30)',
                  marginTop: 6,
                  fontSize: '0.6rem',
                  opacity: animated ? 1 : 0,
                  transition: `opacity 0.4s ease ${delay + 0.4}s`,
                }}
              >
                {m.date.split(' ')[0]}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div style={{ width: 12, height: 12, background: 'oklch(52% 0.22 25)', borderRadius: 2 }} />
          <span className="stat-label" style={{ color: 'oklch(50% 0.005 30)' }}>Win</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: 12, height: 12, background: 'oklch(35% 0.005 30)', borderRadius: 2 }} />
          <span className="stat-label" style={{ color: 'oklch(50% 0.005 30)' }}>Loss</span>
        </div>
      </div>
    </div>
  );
}
