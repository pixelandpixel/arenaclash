import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";

const tournamentData = [
  {
    title: "Arena Clash Mumbai Open",
    date: "June 15-20, 2026",
    venue: "Oval Maidan, Mumbai",
    teams: 16,
    prize: "₹5,00,000",
    format: "T10",
    status: "upcoming",
    spots: 4,
  },
  {
    title: "Floodlit Derby: Delhi vs Mumbai",
    date: "May 28, 2026",
    venue: "Ramleela Ground, Delhi",
    teams: 2,
    prize: "₹1,00,000",
    format: "T20",
    status: "live",
    spots: 0,
  },
  {
    title: "Arena Clash Chennai Premier",
    date: "July 3-8, 2026",
    venue: "IIT Chennai Grounds",
    teams: 12,
    prize: "₹3,00,000",
    format: "T10",
    status: "registering",
    spots: 7,
  },
  {
    title: "Kolkata Night Series",
    date: "Aug 12-16, 2026",
    venue: "Deshapriya Park, Kolkata",
    teams: 8,
    prize: "₹2,00,000",
    format: "T20",
    status: "upcoming",
    spots: 0,
  },
  {
    title: "Arena Clash Pune Showdown",
    date: "Sept 5-10, 2026",
    venue: "PCMC Ground, Pune",
    teams: 10,
    prize: "₹4,00,000",
    format: "T10",
    status: "registering",
    spots: 3,
  },
  {
    title: "Champions League Final",
    date: "Oct 20, 2026",
    venue: "DY Patil Stadium, Navi Mumbai",
    teams: 2,
    prize: "₹10,00,000",
    format: "T20",
    status: "upcoming",
    spots: 0,
  },
];

export default function TournamentsPage() {
  return (
    <div>
      <PageHeader />
      <section className="section-padding">
        <div className="container-arena">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tournamentData.map((t, i) => (
              <SectionReveal key={t.title} delay={0.05 * i}>
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
                        ? "Live"
                        : t.status === "registering"
                        ? "Open"
                        : "Coming Soon"}
                    </span>
                    {t.status === "live" && (
                      <span className="block w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "oklch(52% 0.22 25)" }}></span>
                    )}
                  </div>
                  <h3 className="headline mb-3" style={{ color: "oklch(92% 0.005 30)" }}>
                    {t.title}
                  </h3>
                  <div className="flex flex-col gap-1.5 mb-4 flex-1">
                    <span className="body" style={{ color: "oklch(50% 0.005 30)", fontSize: "0.85rem" }}>
                      {t.date}
                    </span>
                    <span className="body" style={{ color: "oklch(50% 0.005 30)", fontSize: "0.85rem" }}>
                      {t.venue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t mb-4" style={{ borderColor: "oklch(18% 0.005 30)" }}>
                    <div className="flex gap-4">
                      <span className="stat-label" style={{ color: "oklch(65% 0.005 30)" }}>
                        {t.format}
                      </span>
                      <span className="stat-label" style={{ color: "oklch(65% 0.005 30)" }}>
                        {t.teams} teams
                      </span>
                    </div>
                    <span className="font-bold" style={{ color: "oklch(76% 0.16 85)", fontSize: "0.9rem" }}>
                      {t.prize}
                    </span>
                  </div>
                  {t.status === "registering" && t.spots > 0 && (
                    <Link href="/tournaments" className="btn-primary w-full justify-center text-center" style={{ fontSize: "0.8rem", padding: "12px 24px" }}>
                      Register ({t.spots} spots left)
                    </Link>
                  )}
                  {t.status === "upcoming" && (
                    <span className="btn-secondary w-full text-center" style={{ fontSize: "0.8rem", padding: "12px 24px", cursor: "default", opacity: 0.6 }}>
                      Coming Soon
                    </span>
                  )}
                  {t.status === "live" && (
                    <Link href="/tournaments" className="btn-primary w-full justify-center text-center" style={{ fontSize: "0.8rem", padding: "12px 24px", background: "oklch(52% 0.22 25)" }}>
                      Watch Live
                    </Link>
                  )}
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
          <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Competitions</p>
          <h1 className="display-large mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
            Open <span className="blue-glow">Tournaments</span>
          </h1>
          <p className="body-large" style={{ color: "oklch(65% 0.005 30)", maxWidth: 600 }}>
            Find tournaments near you. Register your team, compete under floodlights, and get on the board.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
