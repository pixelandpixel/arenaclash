export function MatchSpotlight() {
  return (
    <section className="section-padding" style={{ background: "oklch(10% 0.005 30)" }}>
      <div className="container-arena">
        <div className="flex flex-col md:flex-row gap-6 mb-8 md:mb-12 items-end justify-between">
          <div>
            <p className="label mb-2" style={{ color: "oklch(76% 0.16 85)" }}>Live Now</p>
            <h2 className="display-medium" style={{ color: "oklch(92% 0.005 30)" }}>
              Match <span style={{ color: "oklch(52% 0.22 25)" }}>Spotlight</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "oklch(52% 0.22 25)" }}></span>
            <span className="label" style={{ color: "oklch(52% 0.22 25)" }}>Live</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0" style={{ borderRadius: 12, overflow: "hidden" }}>
          <div style={{ background: "oklch(42% 0.20 25)", padding: "48px 32px" }}>
            <div className="flex items-center justify-between mb-6">
              <span className="label" style={{ color: "oklch(92% 0.005 30 / 0.7)" }}>Team A</span>
              <div
                className="text-center"
                style={{
                  background: "oklch(8% 0.005 30 / 0.3)",
                  borderRadius: 8,
                  padding: "4px 12px",
                }}
              >
                <span className="label" style={{ color: "oklch(76% 0.16 85)" }}>Batting</span>
              </div>
            </div>
            <h3 className="display-large mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
              Mumbai<span style={{ color: "oklch(92% 0.005 30 / 0.6)" }}> </span>
              <span className="yellow-glow">Strikers</span>
            </h3>
            <div className="scoreboard" style={{ color: "oklch(92% 0.005 30)" }}>
              184<span style={{ color: "oklch(92% 0.005 30 / 0.5)" }}>/</span>4
            </div>
            <p className="body" style={{ color: "oklch(92% 0.005 30 / 0.6)", marginTop: 8 }}>
              Overs: 17.2 &middot; RR: 10.6 &middot; Last 5: 4 6 1 2 4
            </p>
          </div>

          <div style={{ background: "oklch(38% 0.13 250)", padding: "48px 32px" }}>
            <div className="flex items-center justify-between mb-6">
              <span className="label" style={{ color: "oklch(92% 0.005 30 / 0.7)" }}>Team B</span>
            </div>
            <h3 className="display-large mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
              Delhi<span style={{ color: "oklch(92% 0.005 30 / 0.6)" }}> </span>
              <span className="blue-glow">Titans</span>
            </h3>
            <div className="scoreboard" style={{ color: "oklch(92% 0.005 30)" }}>
              167<span style={{ color: "oklch(92% 0.005 30 / 0.5)" }}>/</span>6
            </div>
            <p className="body" style={{ color: "oklch(92% 0.005 30 / 0.6)", marginTop: 8 }}>
              Overs: 20.0 &middot; RR: 8.4 &middot; Target: 185
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 p-4"
          style={{
            background: "oklch(13% 0.005 30)",
            borderRadius: 12,
            border: "1px solid oklch(22% 0.005 30)",
          }}
        >
          <div className="flex items-center gap-4">
            <span className="stat-value" style={{ color: "oklch(52% 0.22 25)" }}>17</span>
            <span className="stat-label" style={{ color: "oklch(65% 0.005 30)" }}>Runs Needed<br />from 16 balls</span>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: 300,
              height: 4,
              background: "oklch(22% 0.005 30)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "78%",
                height: "100%",
                background: "oklch(52% 0.22 25)",
                borderRadius: 2,
              }}
            ></div>
          </div>
          <span className="stat-value" style={{ color: "oklch(76% 0.16 85)" }}>78%</span>
        </div>
      </div>
    </section>
  );
}
