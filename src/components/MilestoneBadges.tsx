import { SectionReveal } from './SectionReveal';

interface Milestone {
  icon: string;
  label: string;
  value: string | number;
  color: string;
}

interface MilestoneBadgesProps {
  milestones: Milestone[];
}

export function MilestoneBadges({ milestones }: MilestoneBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {milestones.map((m, i) => (
        <SectionReveal key={m.label} delay={0.08 * i}>
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{
              background: `${m.color}14`,
              border: `1px solid ${m.color}33`,
            }}
          >
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{m.icon}</span>
            <div>
              <div style={{ color: m.color, fontWeight: 800, fontSize: '1.1rem', fontVariantNumeric: 'tabular-nums' }}>
                {m.value}
              </div>
              <div className="stat-label" style={{ color: 'oklch(55% 0.005 30)', fontSize: '0.6rem' }}>
                {m.label}
              </div>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}

export function getPlayerMilestones(player: {
  runs: number;
  wickets: number;
  highScore: number;
  fifties: number;
  hundreds: number;
  bestBowling: string;
  sr: number;
  economy: number;
}): Milestone[] {
  const m: Milestone[] = [];

  if (player.hundreds > 0) {
    m.push({
      icon: '🏏',
      label: 'Centuries',
      value: player.hundreds,
      color: 'oklch(76% 0.16 85)',
    });
  }

  if (player.fifties > 0) {
    m.push({
      icon: '⭐',
      label: 'Fifties',
      value: player.fifties,
      color: 'oklch(68% 0.16 25)',
    });
  }

  if (player.highScore > 80) {
    m.push({
      icon: '🔥',
      label: 'Highest Score',
      value: player.highScore,
      color: 'oklch(52% 0.22 25)',
    });
  }

  if (player.bestBowling && player.bestBowling !== '-') {
    m.push({
      icon: '🎯',
      label: 'Best Bowling',
      value: player.bestBowling,
      color: 'oklch(48% 0.14 250)',
    });
  }

  if (player.wickets >= 25) {
    m.push({
      icon: '💪',
      label: 'Wickets',
      value: player.wickets,
      color: 'oklch(48% 0.14 250)',
    });
  }

  if (player.sr >= 160) {
    m.push({
      icon: '⚡',
      label: 'Strike Rate',
      value: player.sr,
      color: 'oklch(76% 0.16 85)',
    });
  }

  if (player.economy > 0 && player.economy <= 6.5) {
    m.push({
      icon: '🔒',
      label: 'Economy',
      value: player.economy,
      color: 'oklch(48% 0.14 250)',
    });
  }

  return m;
}
