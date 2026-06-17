import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[#A78BFA]/15 bg-[#050314]/70 px-5 py-8 text-[#C7C7D9] backdrop-blur sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {portfolio.person.name}. All rights reserved.
        </p>
        <a
          className="font-semibold text-[#C4B5FD] transition hover:text-white"
          href={`mailto:${portfolio.contact.email}`}
        >
          {portfolio.contact.email}
        </a>
      </div>
    </footer>
  );
}
