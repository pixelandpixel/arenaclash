'use client';

import { useEffect, useRef } from 'react';
import { RankingShield } from './RankingShield';
import { MilestoneBadges, getPlayerMilestones } from './MilestoneBadges';
import type { Player } from '@/data/players';

interface ParallaxHeroProps {
  player: Player;
  accentColor: string;
  darkColor: string;
  glowClass: string;
}

export function ParallaxHero({ player, accentColor, darkColor, glowClass }: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    function onScroll() {
      if (!section || !bg) return;
      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top / rect.height;
      const translateY = scrollProgress * 30;
      bg.style.transform = `translateY(${translateY}px) scale(1.05)`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const primaryStat = player.wickets > player.runs
    ? { label: 'WICKETS', value: player.wickets }
    : { label: 'RUNS', value: player.runs };

  const secondaryStats = [
    { label: 'MAT', value: player.matches },
    { label: player.wickets > 0 ? 'WKT' : 'SR', value: player.wickets > 0 ? player.wickets : player.sr },
    { label: 'AVG', value: player.avg || '-' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '100vh', minHeight: 700 }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${player.photo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          willChange: 'transform',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${darkColor}dd 0%, ${darkColor}99 30%, transparent 50%, ${darkColor}33 80%, ${darkColor}aa 100%), linear-gradient(to top, ${darkColor}ee 0%, ${darkColor}66 40%, transparent 70%)`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 80%, ${accentColor}22 0%, transparent 70%)`,
        }}
      />

      <div className="relative h-full container-arena flex flex-col justify-end pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <p className="label mb-2" style={{ color: 'oklch(65% 0.005 30)', letterSpacing: '0.15em' }}>
              {player.team}
            </p>

            <h1
              className={`display-hero mb-2 ${glowClass}`}
              style={{
                color: 'oklch(92% 0.005 30)',
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                lineHeight: 0.85,
              }}
            >
              {player.name.split(' ')[0]}
              <br />
              <span style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
                {player.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="body-large mb-6" style={{ color: 'oklch(58% 0.005 30)' }}>
              {player.role} &middot; {player.age} yrs &middot; {player.city}
            </p>

            <MilestoneBadges milestones={getPlayerMilestones(player)} />
          </div>

          <div className="lg:col-span-4 flex flex-col items-end gap-4">
            <RankingShield rank={player.rank} tier={player.tier} size={100} />

            <div
              className="w-full p-5 backdrop-blur-sm"
              style={{
                background: `${accentColor}1a`,
                border: `1px solid ${accentColor}33`,
              }}
            >
              <span className="scoreboard" style={{ color: accentColor, fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                {primaryStat.value}
              </span>
              <span className="stat-label block mt-1" style={{ color: 'oklch(60% 0.005 30)' }}>
                {primaryStat.label}
              </span>
            </div>

            <div className="w-full grid grid-cols-3 gap-2">
              {secondaryStats.map((s) => (
                <div
                  key={s.label}
                  className="text-center py-3"
                  style={{ background: 'oklch(8% 0.005 30 / 0.6)' }}
                >
                  <div style={{ color: 'oklch(92% 0.005 30)', fontWeight: 800, fontSize: '1.3rem', fontVariantNumeric: 'tabular-nums' }}>
                    {s.value}
                  </div>
                  <div className="stat-label" style={{ color: 'oklch(50% 0.005 30)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
