"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const logoPath = "/logo/esraa-logo.png";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#A78BFA]/15 bg-[#050314]/70 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
          <Image
            src={logoPath}
            alt="Esraa Amaireh"
            width={190}
            height={200}
            className="h-20 w-full transition duration-200 hover:scale-[1.03] sm:h-10"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-[#C7C7D9] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8B5CF6] shadow-[0_0_14px_rgba(139,92,246,0.9)] transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#A78BFA]/25 bg-white/[0.06] text-[#C4B5FD] transition hover:border-[#A78BFA] hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-[#A78BFA]/15 bg-[#050314]/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#C7C7D9] transition hover:bg-white/[0.06] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
