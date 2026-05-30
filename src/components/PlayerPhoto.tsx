'use client';

import { useState } from 'react';

interface PlayerPhotoProps {
  src: string;
  initials: string;
  color: string;
  darkColor: string;
  teamSide: 'red' | 'blue';
  className?: string;
  size?: number;
}

export function PlayerPhoto({ src, initials, color, darkColor, teamSide, className = '', size = 180 }: PlayerPhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${color}, ${darkColor})`,
        boxShadow: `0 0 40px ${color}33, 0 0 80px ${color}1a`,
      }}
    >
      {!error && (
        <img
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}

      {(!loaded || error) && (
        <div
          className="absolute inset-0 flex items-center justify-center font-black"
          style={{
            color: 'oklch(92% 0.005 30)',
            fontSize: size * 0.35,
            opacity: error || !loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          {initials}
        </div>
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${color}00 50%, ${color}40 100%)`,
          borderRadius: '50%',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: '50%',
          boxShadow: 'inset 0 0 30px oklch(0% 0 0 / 0.4)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${darkColor}80, transparent)`,
          borderRadius: '0 0 50% 50% / 0 0 100% 100%',
        }}
      />
    </div>
  );
}
