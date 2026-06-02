import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/players", label: "Players" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: "oklch(8% 0.005 30 / 0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderColor: "oklch(22% 0.005 30)" }}>
      <div className="container-arena flex items-center justify-between" style={{ height: 72 }}>
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="{`${process.env.NEXT_PUBLIC_BASE_PATH}/images/ArenaClash_logo_big.png`}"
            alt="Arena Clash"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest uppercase no-underline transition-colors duration-200 hover:text-white"
              style={{ color: "oklch(65% 0.005 30)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
