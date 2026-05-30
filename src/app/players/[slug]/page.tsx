import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FormChart } from "@/components/FormChart";
import { ParallaxHero } from "@/components/ParallaxHero";
import { PlayerCard } from "@/components/PlayerCard";
import { getPlayerBySlug, players } from "@/data/players";

export function generateStaticParams() {
  return players.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PlayerProfilePage({ params }: Props) {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);
  if (!player) notFound();

  const isRed = player.teamSide === "red";
  const accentColor = isRed ? "oklch(52% 0.22 25)" : "oklch(48% 0.14 250)";
  const darkColor = isRed ? "oklch(38% 0.18 25)" : "oklch(33% 0.12 250)";
  const glowClass = isRed ? "red-glow" : "blue-glow";

  return (
    <div>
      <ParallaxHero player={player} accentColor={accentColor} darkColor={darkColor} glowClass={glowClass} />
      <StatsWall player={player} accentColor={accentColor} darkColor={darkColor} />
      <PlayerCardSection player={player} accentColor={accentColor} darkColor={darkColor} />
      <FormSection player={player} accentColor={accentColor} />
      <CareerDeepSection player={player} accentColor={accentColor} />
      <BackNav />
    </div>
  );
}

function StatsWall({
  player,
  accentColor,
  darkColor,
}: {
  player: import("@/data/players").Player;
  accentColor: string;
  darkColor: string;
}) {
  const heroStats = [
    { label: "Total Runs", value: player.runs, suffix: "" },
    { label: "Matches Played", value: player.matches, suffix: "" },
    {
      label: player.wickets > 0 ? "Wickets Taken" : "Strike Rate",
      value: player.wickets > 0 ? player.wickets : player.sr,
      suffix: player.wickets > 0 ? "" : "",
    },
  ];

  return (
    <section className="section-padding" style={{ background: `linear-gradient(to bottom, oklch(8% 0.005 30), ${darkColor}22 50%, oklch(8% 0.005 30))` }}>
      <div className="container-arena">
        <SectionReveal>
          <p className="label mb-2 text-center" style={{ color: "oklch(65% 0.005 30)" }}>
            Career Numbers
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-4">
          {heroStats.map((s, i) => (
            <SectionReveal key={s.label} delay={0.1 * i}>
              <div
                className="relative text-center py-8 md:py-12 px-4 overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, ${accentColor}11, transparent)`,
                  borderTop: `3px solid ${accentColor}`,
                }}
              >
                <div
                  className="absolute -top-8 -right-8 font-black pointer-events-none"
                  style={{
                    fontSize: "clamp(6rem, 15vw, 12rem)",
                    color: `${accentColor}08`,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  className="stat-value mb-2"
                  style={{
                    color: accentColor,
                    fontSize: "clamp(3.5rem, 8vw, 6rem)",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter value={s.value} delay={0.1 * i} />
                  {s.suffix}
                </div>
                <div className="stat-label" style={{ color: "oklch(55% 0.005 30)", fontSize: "0.8rem" }}>
                  {s.label}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayerCardSection({
  player,
  accentColor,
  darkColor,
}: {
  player: import("@/data/players").Player;
  accentColor: string;
  darkColor: string;
}) {
  return (
    <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
      <div className="container-arena">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <SectionReveal>
              <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>
                Player Card
              </p>
              <h2 className="display-medium mb-6" style={{ color: "oklch(92% 0.005 30)" }}>
                The <span className={player.teamSide === "red" ? "red-glow" : "blue-glow"}>Profile</span>
              </h2>
              <p className="body-large mb-8" style={{ color: "oklch(58% 0.005 30)" }}>
                {player.bio.split(".").slice(0, 2).join(".")}.
              </p>
              <div className="flex gap-8">
                <div>
                  <span className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>City</span>
                  <p className="headline mt-1" style={{ color: "oklch(92% 0.005 30)" }}>{player.city}</p>
                </div>
                <div>
                  <span className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Since</span>
                  <p className="headline mt-1" style={{ color: "oklch(92% 0.005 30)" }}>{player.joinedYear}</p>
                </div>
                <div>
                  <span className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Age</span>
                  <p className="headline mt-1" style={{ color: "oklch(92% 0.005 30)" }}>{player.age}</p>
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="md:order-1">
            <SectionReveal delay={0.15}>
              <PlayerCard player={player} accentColor={accentColor} darkColor={darkColor} />
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormSection({
  player,
  accentColor,
}: {
  player: import("@/data/players").Player;
  accentColor: string;
}) {
  return (
    <section className="section-padding" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Form Guide</p>
          <h2 className="display-medium mb-10" style={{ color: "oklch(92% 0.005 30)" }}>
            Recent <span className="yellow-glow">Battles</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-5 gap-8 mb-10">
          <div className="md:col-span-2">
            <SectionReveal>
              <p className="label mb-4" style={{ color: "oklch(65% 0.005 30)" }}>Performance Trend</p>
              <FormChart matches={player.recentMatches} accentColor={accentColor} />
            </SectionReveal>
          </div>
          <div className="md:col-span-3">
            <div className="space-y-3">
              {player.recentMatches.map((m, i) => (
                <SectionReveal key={i} delay={0.06 * i}>
                  <div
                    className="grid grid-cols-12 gap-4 items-center py-4 px-6"
                    style={{
                      background: "oklch(13% 0.005 30)",
                      borderLeft: `4px solid ${m.result === "win" ? "oklch(52% 0.22 25)" : "oklch(42% 0.005 30)"}`,
                    }}
                  >
                    <div className="col-span-3 lg:col-span-2">
                      <span className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>
                        {m.date}
                      </span>
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                      <span className="body" style={{ color: "oklch(92% 0.005 30)", fontWeight: 600, fontSize: "0.95rem" }}>
                        vs {m.opponent}
                      </span>
                    </div>
                    <div className="col-span-3 lg:col-span-4 text-center lg:text-left">
                      <span style={{ color: accentColor, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
                        {m.score}
                      </span>
                      {m.opponentScore && (
                        <span className="stat-label ml-3" style={{ color: "oklch(50% 0.005 30)" }}>
                          - {m.opponentScore}
                        </span>
                      )}
                    </div>
                    <div className="col-span-2 lg:col-span-3 text-right">
                      <span
                        className="stat-label"
                        style={{
                          color: m.result === "win" ? "oklch(68% 0.16 25)" : m.result === "loss" ? "oklch(50% 0.005 30)" : "oklch(76% 0.16 85)",
                        }}
                      >
                        {m.result === "win" ? "W" : m.result === "loss" ? "L" : "NR"}
                      </span>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerDeepSection({
  player,
  accentColor,
}: {
  player: import("@/data/players").Player;
  accentColor: string;
}) {
  const battingStats = [
    { label: "Matches", value: player.matches },
    { label: "Innings", value: player.matches },
    { label: "Runs", value: player.runs },
    { label: "Average", value: player.avg || "-" },
    { label: "Strike Rate", value: player.sr || "-" },
    { label: "High Score", value: player.highScore },
    { label: "50s", value: player.fifties },
    { label: "100s", value: player.hundreds },
  ];

  const bowlingStats = [
    { label: "Matches", value: player.matches },
    { label: "Wickets", value: player.wickets || "-" },
    { label: "Economy", value: player.economy || "-" },
    { label: "Best", value: player.bestBowling },
  ];

  return (
    <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Deep Dive</p>
          <h2 className="display-medium mb-10" style={{ color: "oklch(92% 0.005 30)" }}>
            Full <span className={player.teamSide === "red" ? "red-glow" : "blue-glow"}>Statistics</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionReveal>
            <div
              className="p-6 md:p-8"
              style={{
                background: "oklch(13% 0.005 30)",
                border: "1px solid oklch(20% 0.005 30)",
              }}
            >
              <h3 className="headline mb-6" style={{ color: "oklch(52% 0.22 25)" }}>
                Batting
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {battingStats.map((s) => (
                  <div key={s.label} className="flex justify-between items-center">
                    <span className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>
                      {s.label}
                    </span>
                    <span style={{ color: "oklch(92% 0.005 30)", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {player.wickets > 0 && (
            <SectionReveal delay={0.1}>
              <div
                className="p-6 md:p-8"
                style={{
                  background: "oklch(13% 0.005 30)",
                  border: "1px solid oklch(20% 0.005 30)",
                }}
              >
                <h3 className="headline mb-6" style={{ color: "oklch(48% 0.14 250)" }}>
                  Bowling
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {bowlingStats.map((s) => (
                    <div key={s.label} className="flex justify-between items-center">
                      <span className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>
                        {s.label}
                      </span>
                      <span style={{ color: "oklch(92% 0.005 30)", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}
        </div>
      </div>
    </section>
  );
}

function BackNav() {
  return (
    <section className="section-padding pt-0" style={{ background: "oklch(10% 0.005 30)" }}>
      <div className="container-arena">
        <Link
          href="/players"
          className="inline-flex items-center gap-2 label no-underline transition-opacity duration-200 hover:opacity-70"
          style={{ color: "oklch(65% 0.005 30)" }}
        >
          &larr; Back to Players
        </Link>
      </div>
    </section>
  );
}
