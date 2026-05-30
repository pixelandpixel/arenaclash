import { SectionReveal } from "@/components/SectionReveal";

const players = [
  {
    name: "Rajesh Kumar",
    team: "Mumbai Strikers",
    role: "Opening Batsman",
    runs: 847,
    matches: 14,
    sr: 168.4,
    avg: 60.5,
    image: "RJ",
    color: "oklch(52% 0.22 25)",
  },
  {
    name: "Imran Shaikh",
    team: "Delhi Titans",
    role: "Fast Bowler",
    runs: 42,
    matches: 12,
    wickets: 42,
    economy: 6.2,
    image: "IS",
    color: "oklch(48% 0.14 250)",
  },
  {
    name: "Vikram Singh",
    team: "Mumbai Strikers",
    role: "All-Rounder",
    runs: 612,
    matches: 14,
    sr: 189.4,
    wickets: 18,
    image: "VS",
    color: "oklch(52% 0.22 25)",
  },
  {
    name: "Priya Sharma",
    team: "Chennai Smashers",
    role: "Wicket-Keeper",
    runs: 534,
    matches: 11,
    sr: 145.2,
    stumpings: 8,
    image: "PS",
    color: "oklch(48% 0.14 250)",
  },
  {
    name: "Arun Patel",
    team: "Pune Panthers",
    role: "Spin Bowler",
    runs: 89,
    matches: 10,
    wickets: 28,
    economy: 5.8,
    image: "AP",
    color: "oklch(52% 0.22 25)",
  },
  {
    name: "Sandeep Yadav",
    team: "Kolkata Kings",
    role: "Opening Batsman",
    runs: 723,
    matches: 13,
    sr: 156.7,
    avg: 55.6,
    image: "SY",
    color: "oklch(48% 0.14 250)",
  },
];

export default function PlayersPage() {
  return (
    <div>
      <PageHeader />
      <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
        <div className="container-arena">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((p, i) => (
              <SectionReveal key={p.name} delay={0.05 * i}>
                <div
                  className="p-6 md:p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: "oklch(13% 0.005 30)",
                    borderRadius: 12,
                    border: "1px solid oklch(20% 0.005 30)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg shrink-0"
                      style={{
                        background: p.color,
                        color: "oklch(92% 0.005 30)",
                      }}
                    >
                      {p.image}
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
                    {"runs" in p && (
                      <div className="text-center">
                        <div className="stat-value" style={{ color: p.color }}>{p.runs}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Runs</div>
                      </div>
                    )}
                    {"wickets" in p && (
                      <div className="text-center">
                        <div className="stat-value" style={{ color: p.color }}>{p.wickets}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Wkts</div>
                      </div>
                    )}
                    {"sr" in p && (
                      <div className="text-center">
                        <div className="stat-value" style={{ color: p.color }}>{p.sr}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>SR</div>
                      </div>
                    )}
                    {"economy" in p && (
                      <div className="text-center">
                        <div className="stat-value" style={{ color: p.color }}>{p.economy}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Econ</div>
                      </div>
                    )}
                    {"avg" in p && (
                      <div className="text-center">
                        <div className="stat-value" style={{ color: p.color }}>{p.avg}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Avg</div>
                      </div>
                    )}
                    {"matches" in p && (
                      <div className="text-center">
                        <div className="stat-value" style={{ color: "oklch(65% 0.005 30)" }}>{p.matches}</div>
                        <div className="stat-label" style={{ color: "oklch(50% 0.005 30)" }}>Matches</div>
                      </div>
                    )}
                  </div>
                </div>
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
