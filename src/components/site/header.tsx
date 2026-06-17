import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const logoPath = "/logo/esraa-logo-light-purple.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/65 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
          <img
            src={logoPath}
            alt="Esraa Amaireh"
            className="h-9 w-auto transition duration-200 hover:scale-[1.03] sm:h-10"
          />
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {portfolio.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-purple-700">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/resume"
          className="rounded-full bg-[#1E1B4B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#A855F7]"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
