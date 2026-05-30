import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "oklch(18% 0.005 30)",
        background: "oklch(10% 0.005 30)",
      }}
    >
      <div className="container-arena" style={{ padding: "48px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/ArenaClash_logo_big.png"
                alt="Arena Clash"
                width={120}
                height={36}
                className="h-7 w-auto"
              />
            </div>
            <p className="body" style={{ color: "oklch(50% 0.005 30)" }}>
              The future of tennis-ball cricket. Where players become athletes.
            </p>
          </div>

          <div>
            <h4 className="label mb-3" style={{ color: "oklch(65% 0.005 30)" }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Tournaments", "Players", "Sponsors", "About"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="body no-underline transition-colors duration-200 hover:text-white"
                  style={{
                    color: "oklch(50% 0.005 30)",
                    fontSize: "0.9rem",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="label mb-3"
              style={{ color: "oklch(65% 0.005 30)" }}
            >
              Follow
            </h4>
            <div className="flex flex-col gap-2">
              {["Instagram", "YouTube", "Twitter", "Facebook"].map((item) => (
                <span
                  key={item}
                  className="body"
                  style={{
                    color: "oklch(50% 0.005 30)",
                    fontSize: "0.9rem",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderColor: "oklch(18% 0.005 30)",
            color: "oklch(40% 0.005 30)",
            fontSize: "0.8rem",
          }}
        >
          <span>&copy; 2026 Arena Clash. All rights reserved.</span>
          <span>Street to Stadium.</span>
        </div>
      </div>
    </footer>
  );
}
