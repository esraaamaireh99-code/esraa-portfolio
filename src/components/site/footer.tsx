import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/60 px-5 py-8 backdrop-blur sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {portfolio.person.name}. All rights reserved.
        </p>
        <a
          className="font-semibold text-slate-800 transition hover:text-teal-700"
          href={`mailto:${portfolio.contact.email}`}
        >
          {portfolio.contact.email}
        </a>
      </div>
    </footer>
  );
}
