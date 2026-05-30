import { SectionReveal } from "@/components/SectionReveal";
import Link from "next/link";

const sponsors = [
  {
    name: "Red Bull",
    tagline: "Gives You Wings",
    tier: "title",
    description: "Title sponsor powering the energy of every match night.",
    color: "oklch(52% 0.22 25)",
  },
  {
    name: "Puma",
    tagline: "Forever Faster",
    tier: "partner",
    description: "Official kit and apparel partner for all Arena Clash tournaments.",
    color: "oklch(92% 0.005 30)",
  },
  {
    name: "Jio",
    tagline: "Digital Life",
    tier: "partner",
    description: "Broadcasting every match live on JioCinema and JioTV.",
    color: "oklch(48% 0.14 250)",
  },
  {
    name: "Boat",
    tagline: "Do What Floats Your Boat",
    tier: "official",
    description: "Official audio partner powering the arena sound system.",
    color: "oklch(76% 0.16 85)",
  },
  {
    name: "Ceat",
    tagline: "Tyres That Speak",
    tier: "official",
    description: "Official tyre partner driving the Arena Clash tour across 16 cities.",
    color: "oklch(65% 0.005 30)",
  },
  {
    name: "Dream11",
    tagline: "Play Karo, Jeeto",
    tier: "official",
    description: "Official fantasy partner. Predict match outcomes and win prizes.",
    color: "oklch(92% 0.005 30)",
  },
];

export default function SponsorsPage() {
  return (
    <div>
      <PageHeader />
      <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
        <div className="container-arena">
          {(["title", "partner", "official"] as const).map((tier) => {
            const filtered = sponsors.filter((s) => s.tier === tier);
            return (
              <div key={tier} className="mb-16 last:mb-0">
                <SectionReveal>
                  <h2 className="display-medium mb-2 capitalize" style={{ color: "oklch(92% 0.005 30)" }}>
                    {tier === "title" ? "Title Sponsor" : tier === "partner" ? "Partners" : "Official Sponsors"}
                  </h2>
                  <p
                    className="body mb-10"
                    style={{
                      color: "oklch(65% 0.005 30)",
                      borderBottom: "1px solid oklch(18% 0.005 30)",
                      paddingBottom: 24,
                    }}
                  >
                    {tier === "title"
                      ? "The brands that make Arena Clash possible."
                      : tier === "partner"
                      ? "Our strategic partners in building the ecosystem."
                      : "Official sponsors powering the experience."}
                  </p>
                </SectionReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((s, i) => (
                    <SectionReveal key={s.name} delay={0.05 * i}>
                      <div
                        className="p-6 md:p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
                        style={{
                          background: "oklch(13% 0.005 30)",
                          borderRadius: 12,
                          border: "1px solid oklch(20% 0.005 30)",
                        }}
                      >
                        <div
                          className="w-full h-16 rounded-lg mb-5 flex items-center justify-center font-black text-2xl uppercase tracking-widest"
                          style={{
                            background: `${s.color}10`,
                            border: `1px solid ${s.color}20`,
                            color: s.color,
                          }}
                        >
                          {s.name}
                        </div>
                        <h3 className="headline mb-1" style={{ color: "oklch(92% 0.005 30)" }}>
                          {s.name}
                        </h3>
                        <p className="body mb-3" style={{ color: "oklch(50% 0.005 30)", fontSize: "0.85rem", fontStyle: "italic" }}>
                          {s.tagline}
                        </p>
                        <p className="body" style={{ color: "oklch(65% 0.005 30)", fontSize: "0.9rem", flex: 1 }}>
                          {s.description}
                        </p>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection />
    </div>
  );
}

function PageHeader() {
  return (
    <section className="section-padding" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Partners</p>
          <h1 className="display-large mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
            Our <span className="blue-glow">Sponsors</span>
          </h1>
          <p className="body-large" style={{ color: "oklch(65% 0.005 30)", maxWidth: 600 }}>
            The brands that believe in the future of tennis-ball cricket.
          </p>
        </SectionReveal>
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
            <p className="label mb-3" style={{ color: "oklch(76% 0.16 85)" }}>
              Partnership
            </p>
            <h2 className="display-medium mb-6" style={{ color: "oklch(92% 0.005 30)" }}>
              Become a <span className="red-glow">Sponsor</span>
            </h2>
            <p className="body-large mb-10" style={{ color: "oklch(65% 0.005 30)", margin: "0 auto", maxWidth: 600 }}>
              Reach 16-35 year old passionate cricket fans across 16 cities. Multiple partnership tiers available.
            </p>
            <Link href="/about" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
