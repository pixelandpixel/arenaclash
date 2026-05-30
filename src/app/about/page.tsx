import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

export default function AboutPage() {
  return (
    <div>
      <PageHeader />
      <MissionSection />
      <ValuesSection />
      <StorySection />
      <CTASection />
    </div>
  );
}

function PageHeader() {
  return (
    <section className="section-padding" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>About</p>
          <h1 className="display-large mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
            Street to <span className="red-glow">Stadium</span>
          </h1>
          <p className="body-large" style={{ color: "oklch(65% 0.005 30)", maxWidth: 700 }}>
            Arena Clash transforms local tennis-ball cricket players into recognized athletes
            through a broadcast-quality ecosystem that takes the raw energy of the street and puts it under floodlights.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
      <div className="container-arena">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <SectionReveal>
            <div>
              <p className="label mb-3" style={{ color: "oklch(52% 0.22 25)" }}>Our Mission</p>
              <h2 className="display-medium mb-6" style={{ color: "oklch(92% 0.005 30)" }}>
                Every Player Deserves a Stage
              </h2>
              <p className="body mb-4" style={{ color: "oklch(65% 0.005 30)" }}>
                Tennis-ball cricket is played by millions across India. On every gully, every
                maidan, every empty street after dark. But the players stay invisible. No scouts.
                No platforms. No recognition.
              </p>
              <p className="body mb-4" style={{ color: "oklch(65% 0.005 30)" }}>
                Arena Clash changes that. We build the bridge between the street and the stadium.
                Broadcast-quality tournaments, real-time stats, player rankings, and a path from
                local grounds to professional opportunities.
              </p>
              <p className="body" style={{ color: "oklch(65% 0.005 30)" }}>
                The next generation of cricket stars plays tennis ball. We make sure the world sees them.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div
              className="p-8 md:p-10"
              style={{
                background: "oklch(13% 0.005 30)",
                borderRadius: 12,
                border: "1px solid oklch(20% 0.005 30)",
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "16+", label: "Cities" },
                  { value: "1,200+", label: "Players" },
                  { value: "48", label: "Tournaments" },
                  { value: "2.3M", label: "Views" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="scoreboard" style={{ color: "oklch(52% 0.22 25)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                      {s.value}
                    </div>
                    <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      title: "Merit Over Reputation",
      description: "Your stats speak louder than your connections. Every player is ranked by performance, not popularity.",
      color: "oklch(52% 0.22 25)",
    },
    {
      title: "Rivalry Drives Excellence",
      description: "Red vs Blue is not marketing. It is the engine that pushes every player to be better than their opponent.",
      color: "oklch(48% 0.14 250)",
    },
    {
      title: "Broadcast Quality for Everyone",
      description: "The same production values you see in professional sports. Live scores, player cams, expert commentary.",
      color: "oklch(76% 0.16 85)",
    },
    {
      title: "One Match at a Time",
      description: "Every ball matters. Every run counts. We focus on the immediate moment of competition, not the hype around it.",
      color: "oklch(52% 0.22 25)",
    },
  ];

  return (
    <section className="section-padding" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Principles</p>
          <h2 className="display-medium mb-12" style={{ color: "oklch(92% 0.005 30)" }}>
            What We <span className="blue-glow">Stand For</span>
          </h2>
        </SectionReveal>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={0.08 * i}>
              <div
                className="p-6 md:p-8"
                style={{
                  background: `${v.color}08`,
                  borderRadius: 12,
                  border: `1px solid ${v.color}25`,
                }}
              >
                <h3 className="headline mb-3" style={{ color: v.color }}>
                  {v.title}
                </h3>
                <p className="body" style={{ color: "oklch(65% 0.005 30)" }}>
                  {v.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
      <div className="container-arena">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <SectionReveal>
            <div
              className="p-8 md:p-12 rounded-2xl text-center md:text-left"
              style={{
                background:
                  "linear-gradient(135deg, oklch(38% 0.18 25 / 0.3), oklch(8% 0.005 30) 50%, oklch(33% 0.12 250 / 0.3))",
                border: "1px solid oklch(22% 0.005 30)",
              }}
            >
              <p className="label mb-3" style={{ color: "oklch(76% 0.16 85)" }}>The Story</p>
              <h2 className="display-medium mb-6" style={{ color: "oklch(92% 0.005 30)" }}>
                Born on the Streets.<br />
                Built for the <span className="red-glow">Floodlights</span>.
              </h2>
              <p className="body-large" style={{ color: "oklch(65% 0.005 30)", maxWidth: 600 }}>
                Arena Clash was founded by players who grew up on tennis-ball cricket. We know the
                feeling of hitting a six on a narrow street. We know the frustration of having no one
                watching. So we built the arena. The floodlights are on. The cameras are rolling.
                The scouts are watching. Step up.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/stadium-launch-2.jpeg"
                alt="Arena Clash stadium floodlights at night"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(8% 0.005 30 / 0.4), transparent 50%)",
                }}
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding text-center" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <div
            className="p-8 md:p-16 rounded-2xl border"
            style={{
              borderColor: "oklch(22% 0.005 30)",
              background: "oklch(12% 0.005 30)",
            }}
          >
            <h2 className="display-medium mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
              Ready to <span className="red-glow">Compete</span>?
            </h2>
            <p className="body-large mb-8" style={{ color: "oklch(65% 0.005 30)", margin: "0 auto", maxWidth: 500 }}>
              Find a tournament in your city. Register your team. Start your journey from street to stadium.
            </p>
            <Link href="/tournaments" className="btn-primary">
              Find a Tournament
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
