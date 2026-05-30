'use client';

import { useEffect, useRef } from 'react';
import { RankingShield } from './RankingShield';
import type { Player } from '@/data/players';

interface PlayerCardProps {
  player: Player;
  accentColor: string;
  darkColor: string;
}

export function PlayerCard({ player, accentColor, darkColor }: PlayerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    function onMouseMove(e: MouseEvent) {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
    }

    function onMouseLeave() {
      if (!card) return;
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    }

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const statRows: { label: string; value: string | number; highlight?: boolean }[] = [
    { label: 'Matches', value: player.matches },
    { label: 'Runs', value: player.runs },
    { label: 'Avg', value: player.avg || '-', highlight: true },
    { label: 'SR', value: player.sr || '-', highlight: true },
    { label: 'High Score', value: player.highScore },
  ];

  if (player.wickets > 0) {
    statRows.push({ label: 'Wickets', value: player.wickets });
    statRows.push({ label: 'Econ', value: player.economy || '-', highlight: true });
    statRows.push({ label: 'Best Bowling', value: player.bestBowling });
  }

  return (
    <div className="flex justify-center">
      <div
        ref={cardRef}
        className="relative overflow-hidden transition-transform duration-200 ease-out"
        style={{
          width: '100%',
          maxWidth: 480,
          aspectRatio: '3/4',
          borderRadius: 16,
          background: `linear-gradient(145deg, oklch(14% 0.005 30), oklch(10% 0.005 30))`,
          border: `2px solid ${accentColor}44`,
          boxShadow: `0 0 40px ${accentColor}22, 0 20px 60px oklch(0% 0 0 / 0.5)`,
          cursor: 'default',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${accentColor}22 0%, transparent 40%, transparent 60%, ${darkColor}22 100%)`,
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(to right, ${accentColor}, oklch(76% 0.16 85), ${accentColor})` }}
        />

        <div className="relative h-full p-6 md:p-8 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="stat-label" style={{ color: 'oklch(60% 0.005 30)' }}>
                {player.team}
              </p>
              <h3 className="headline" style={{ color: 'oklch(92% 0.005 30)', fontSize: '1.4rem' }}>
                {player.name}
              </h3>
              <p className="stat-label mt-1" style={{ color: 'oklch(50% 0.005 30)' }}>
                {player.role}
              </p>
            </div>
            <RankingShield rank={player.rank} tier={player.tier} size={56} />
          </div>

          <div
            className="flex-1 rounded-lg overflow-hidden mb-4 relative"
            style={{
              background: 'oklch(8% 0.005 30)',
              minHeight: 0,
            }}
          >
            <img
              src={player.photo}
              alt={player.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, oklch(8% 0.005 30 / 0.8) 0%, transparent 40%)`,
              }}
            />
            <div
              className="absolute bottom-3 left-3 right-3 flex justify-between items-end"
            >
              <div>
                <span className="stat-label" style={{ color: 'oklch(65% 0.005 30)', fontSize: '0.6rem' }}>
                  #{player.rank} Rank
                </span>
                <p className="headline mb-0" style={{ color: 'oklch(92% 0.005 30)', fontSize: '1rem' }}>
                  {player.city}
                </p>
              </div>
              <div className="text-right">
                <span className="stat-label" style={{ color: 'oklch(50% 0.005 30)', fontSize: '0.6rem' }}>
                  Since
                </span>
                <p style={{ color: 'oklch(92% 0.005 30)', fontWeight: 700, fontSize: '0.85rem' }}>
                  {player.joinedYear}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {statRows.map((s) => (
              <div key={s.label} className="flex justify-between items-center">
                <span className="stat-label" style={{ color: 'oklch(45% 0.005 30)', fontSize: '0.6rem' }}>
                  {s.label}
                </span>
                <span
                  style={{
                    color: s.highlight ? accentColor : 'oklch(92% 0.005 30)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
