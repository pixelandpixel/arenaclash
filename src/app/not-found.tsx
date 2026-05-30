import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center px-6" style={{ background: "oklch(8% 0.005 30)" }}>
      <span className="scoreboard mb-4" style={{ color: "oklch(52% 0.22 25)", fontSize: "clamp(4rem, 12vw, 8rem)" }}>404</span>
      <h1 className="display-medium mb-4" style={{ color: "oklch(92% 0.005 30)" }}>
        Match Not Found
      </h1>
      <p className="body-large mb-8" style={{ color: "oklch(65% 0.005 30)", maxWidth: 500 }}>
        This page is out. Hit a six and head back to the crease.
      </p>
      <Link href="/" className="btn-primary">
        Back to Arena
      </Link>
    </div>
  );
}
