import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { MatchSpotlight } from "@/components/MatchSpotlight";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MatchSpotlight />
      <StatsBanner />
      <TournamentPreview />
      <RivalrySection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative overflow-x-clip"
      style={{
        padding: "clamp(5rem, 12vw, 8rem) 0",
        background: "oklch(8% 0.005 30)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <Image src="https://raw.githubusercontent.com/pixelandpixel/arenaclash/refs/heads/main/public/images/stadium-hero.jpeg" alt="" fill className="object-cover opacity-30" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(8% 0.005 30) 0%, oklch(8% 0.005 30 / 0.65) 25%, transparent 45%, oklch(8% 0.005 30 / 0.75) 75%, oklch(8% 0.005 30) 100%), radial-gradient(ellipse 60% 50% at 15% 50%, oklch(52% 0.22 25 / 0.25) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 85% 50%, oklch(48% 0.14 250 / 0.15) 0%, transparent 65%)" }} />
      </div>

      <div className="container-arena relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "oklch(52% 0.22 25)" }}></span>
                <span className="label tracking-[0.15em]" style={{ color: "oklch(60% 0.005 30)" }}>Tennis Ball Cricket Reborn</span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <h1 className="display-hero mb-2" style={{ color: "oklch(92% 0.005 30)" }}>
                The Future
              </h1>
              <h1 className="display-hero mb-2" style={{ color: "oklch(92% 0.005 30)" }}>
                <span className="red-glow">Is Played</span>
              </h1>
              <h1 className="display-hero mb-8" style={{ color: "oklch(92% 0.005 30)" }}>
                Under Lights
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.35}>
              <p className="body-large mb-10 max-w-xl" style={{ color: "oklch(58% 0.005 30)" }}>
                Arena Clash turns local tennis-ball cricket into a broadcast-grade spectacle.
                Red vs Blue. Floodlights. Real stakes. Your street becomes the stadium.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/tournaments" className="hero-cta-primary">
                  Find a Tournament
                </Link>
                <Link href="/about" className="hero-cta-secondary">
                  Learn More
                </Link>
              </div>
            </SectionReveal>
          </div>

          <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
            <SectionReveal delay={0.4}>
              <div className="w-full max-w-sm">
                <div className="p-5" style={{ background: "oklch(12% 0.005 30 / 0.8)", border: "1px solid oklch(22% 0.006 30)", borderLeft: "3px solid oklch(52% 0.22 25)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(52% 0.22 25)" }}></span>
                    <span className="text-xs font-bold tracking-[0.12em] uppercase" style={{ color: "oklch(52% 0.22 25)" }}>Next Match</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "oklch(92% 0.005 30)" }}>Mumbai Strikers</span>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "oklch(76% 0.16 85)" }}>VS</span>
                    <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "oklch(92% 0.005 30)" }}>Delhi Kings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "oklch(50% 0.005 30)" }}>June 15</span>
                    <span className="w-1 h-1 rounded-full" style={{ background: "oklch(35% 0.005 30)" }}></span>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "oklch(50% 0.005 30)" }}>8:00 PM</span>
                    <span className="w-1 h-1 rounded-full" style={{ background: "oklch(35% 0.005 30)" }}></span>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "oklch(50% 0.005 30)" }}>Floodlit Arena</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px mt-px">
                  {[
                    { value: "1,200+", label: "Players" },
                    { value: "48", label: "Tournaments" },
                    { value: "16", label: "Cities" },
                    { value: "2.3M", label: "Views" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 text-center" style={{ background: "oklch(12% 0.005 30 / 0.6)" }}>
                      <div className="text-base font-black tracking-tight" style={{ color: "oklch(92% 0.005 30)" }}>{s.value}</div>
                      <div className="text-[0.6rem] font-semibold uppercase tracking-widest" style={{ color: "oklch(45% 0.005 30)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  return (
    <section
      className="section-padding"
      style={{
        background: "oklch(10% 0.005 30)",
        borderTop: "1px solid oklch(18% 0.005 30)",
        borderBottom: "1px solid oklch(18% 0.005 30)",
      }}
    >
      <div className="container-arena">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              {
                label: "Most Runs",
                value: "847",
                player: "Rajesh Kumar",
                color: "oklch(52% 0.22 25)",
              },
              {
                label: "Most Wickets",
                value: "42",
                player: "Imran Shaikh",
                color: "oklch(48% 0.14 250)",
              },
              {
                label: "Best Strike Rate",
                value: "189.4",
                player: "Vikram Singh",
                color: "oklch(76% 0.16 85)",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="label mb-2 block" style={{ color: "oklch(50% 0.005 30)" }}>
                  {stat.label}
                </span>
                <span className="display-medium block" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="body" style={{ color: "oklch(65% 0.005 30)", fontSize: "0.9rem" }}>
                  {stat.player}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function TournamentPreview() {
  const tournaments = [
    {
      title: "Arena Clash Mumbai Open",
      date: "June 15-20, 2026",
      teams: 16,
      prize: "₹5,00,000",
      status: "upcoming",
    },
    {
      title: "Floodlit Derby: Delhi vs Mumbai",
      date: "May 28, 2026",
      teams: 2,
      prize: "₹1,00,000",
      status: "live",
    },
    {
      title: "Arena Clash Chennai Premier",
      date: "July 3-8, 2026",
      teams: 12,
      prize: "₹3,00,000",
      status: "registering",
    },
  ];

  return (
    <section className="section-padding" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-end justify-between">
            <div>
              <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Competition</p>
              <h2 className="display-medium" style={{ color: "oklch(92% 0.005 30)" }}>
                Featured <span style={{ color: "oklch(48% 0.14 250)" }}>Tournaments</span>
              </h2>
            </div>
            <Link href="/tournaments" className="btn-secondary" style={{ flexShrink: 0 }}>
              View All
            </Link>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-4">
          {tournaments.map((t, i) => (
            <SectionReveal key={t.title} delay={0.1 * i}>
              <div
                className="p-6 md:p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(13% 0.005 30)",
                  borderRadius: 12,
                  border: "1px solid oklch(20% 0.005 30)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="label"
                    style={{
                      color:
                        t.status === "live"
                          ? "oklch(52% 0.22 25)"
                          : t.status === "registering"
                          ? "oklch(76% 0.16 85)"
                          : "oklch(65% 0.005 30)",
                    }}
                  >
                    {t.status === "live"
                      ? "Live Now"
                      : t.status === "registering"
                      ? "Registering"
                      : "Upcoming"}
                  </span>
                  {t.status === "live" && (
                    <span
                      className="block w-2 h-2 rounded-full animate-pulse-glow"
                      style={{ background: "oklch(52% 0.22 25)" }}
                    ></span>
                  )}
                </div>
                <h3 className="headline mb-3" style={{ color: "oklch(92% 0.005 30)" }}>
                  {t.title}
                </h3>
                <p className="body mb-4" style={{ color: "oklch(50% 0.005 30)", fontSize: "0.9rem", flex: 1 }}>
                  {t.date}
                </p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "oklch(18% 0.005 30)" }}>
                  <span className="stat-label" style={{ color: "oklch(65% 0.005 30)" }}>
                    {t.teams} teams
                  </span>
                  <span className="font-bold" style={{ color: "oklch(76% 0.16 85)" }}>
                    {t.prize}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RivalrySection() {
  return (
    <section className="overflow-x-clip" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="rivalry-split flex flex-col md:grid">
        <div
          className="section-padding flex flex-col items-center justify-center text-center px-6 relative"
          style={{ background: "oklch(38% 0.18 25)" }}
        >
          <Image
            src="/images/stadium-launch-1.jpeg"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="50vw"
          />
          <div className="relative z-10">
            <SectionReveal>
              <span className="label mb-3 block" style={{ color: "oklch(92% 0.005 30 / 0.6)" }}>Choose Your Side</span>
              <h2 className="display-large red-glow mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
                Red
              </h2>
              <p className="body" style={{ color: "oklch(92% 0.005 30 / 0.7)", margin: "0 auto", maxWidth: 300 }}>
                Power. Aggression. The will to dominate.
              </p>
            </SectionReveal>
          </div>
        </div>

        <div
          className="section-padding flex flex-col items-center justify-center text-center px-6 relative"
          style={{ background: "oklch(33% 0.12 250)" }}
        >
          <Image
            src="/images/stadium-launch-2.jpeg"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="50vw"
          />
          <div className="relative z-10">
            <SectionReveal>
              <span className="label mb-3 block" style={{ color: "oklch(92% 0.005 30 / 0.6)" }}>Choose Your Side</span>
              <h2 className="display-large blue-glow mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
                Blue
              </h2>
              <p className="body" style={{ color: "oklch(92% 0.005 30 / 0.7)", margin: "0 auto", maxWidth: 300 }}>
                Precision. Strategy. The art of control.
              </p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="section-padding text-center overflow-x-clip"
      style={{ background: "oklch(8% 0.005 30)" }}
    >
      <div className="container-arena">
        <SectionReveal>
          <div
            className="relative p-8 md:p-16 rounded-2xl border overflow-hidden"
            style={{
              borderColor: "oklch(22% 0.005 30)",
              background: "oklch(12% 0.005 30)",
            }}
          >
            <Image
              src="/images/bg-opt.png"
              alt=""
              fill
              className="object-cover opacity-15"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, oklch(52% 0.22 25 / 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, oklch(48% 0.14 250 / 0.08) 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <p className="label mb-3" style={{ color: "oklch(76% 0.16 85)" }}>
                Your Journey Starts Here
              </p>
              <h2 className="display-large mb-6" style={{ color: "oklch(92% 0.005 30)" }}>
                From Street to <span className="red-glow">Stadium</span>
              </h2>
              <p
                className="body-large mb-10"
                style={{ color: "oklch(65% 0.005 30)", margin: "0 auto", maxWidth: 600 }}
              >
                Register your team, enter a tournament, and get scouted by organizers
                who are watching. The next cricket star plays tennis ball.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tournaments" className="btn-primary">
                  Register Your Team
                </Link>
                <Link href="/about" className="btn-secondary">
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
