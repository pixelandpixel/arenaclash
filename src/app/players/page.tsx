import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { PlayerPhoto } from "@/components/PlayerPhoto";
import { players } from "@/data/players";

export default function PlayersPage() {
  return (
    <div>
      <PageHeader />
      <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
        <div className="container-arena">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((p, i) => (
              <SectionReveal key={p.slug} delay={0.05 * i}>
                <Link
                  href={`/players/${p.slug}`}
                  className="block no-underline transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: "oklch(13% 0.005 30)",
                    borderRadius: 12,
                    border: "1px solid oklch(20% 0.005 30)",
                  }}
                >
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative shrink-0">
                        <PlayerPhoto
                          src={p.photo}
                          initials={p.initials}
                          color={p.color}
                          darkColor={p.teamSide === "red" ? "oklch(38% 0.18 25)" : "oklch(33% 0.12 250)"}
                          teamSide={p.teamSide}
                          size={60}
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-[0.55rem] font-black"
                          style={{
                            background: p.tier === "gold" ? "linear-gradient(135deg, #FFD700, #B8860B)" : "linear-gradient(135deg, #E8E8E8, #A0A0A0)",
                            color: p.tier === "gold" ? "#5C4000" : "#333",
                            boxShadow: "0 0 6px rgba(0,0,0,0.4)",
                          }}
                        >
                          {p.rank}
                        </div>
                      </div>
                      <div>
                        <h3 className="headline mb-0.5" style={{ color: "oklch(92% 0.005 30)", fontSize: "1.2rem" }}>
                          {p.name}
                        </h3>
                        <span className="body" style={{ color: "oklch(50% 0.005 30)", fontSize: "0.8rem" }}>
                          {p.role}
                        </span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className="stat-label" style={{ color: "oklch(65% 0.005 30)" }}>{p.team}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t" style={{ borderColor: "oklch(18% 0.005 30)" }}>
                      <div className="text-center">
                        <div className="stat-value" style={{ color: p.color }}>{p.runs}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Runs</div>
                      </div>
                      {p.wickets > 0 && (
                        <div className="text-center">
                          <div className="stat-value" style={{ color: p.color }}>{p.wickets}</div>
                          <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Wkts</div>
                        </div>
                      )}
                      <div className="text-center">
                        <div className="stat-value" style={{ color: p.color }}>{p.sr}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>SR</div>
                      </div>
                      {p.economy > 0 && (
                        <div className="text-center">
                          <div className="stat-value" style={{ color: p.color }}>{p.economy}</div>
                          <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Econ</div>
                        </div>
                      )}
                      {p.avg > 0 && (
                        <div className="text-center">
                          <div className="stat-value" style={{ color: p.color }}>{p.avg}</div>
                          <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Avg</div>
                        </div>
                      )}
                      <div className="text-center">
                        <div className="stat-value" style={{ color: "oklch(65% 0.005 30)" }}>{p.matches}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Matches</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PageHeader() {
  return (
    <section className="section-padding" style={{ background: "oklch(8% 0.005 30)" }}>
      <div className="container-arena">
        <SectionReveal>
          <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Athletes</p>
          <h1 className="display-large mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
            Player <span className="red-glow">Rankings</span>
          </h1>
          <p className="body-large" style={{ color: "oklch(65% 0.005 30)", maxWidth: 600 }}>
            The top performers across Arena Clash tournaments. Stats speak. Rankings don't lie.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
