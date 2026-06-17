import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "download">;

const styles = {
  primary:
    "bg-[#1E1B4B] text-white shadow-lg shadow-purple-900/20 hover:-translate-y-0.5 hover:bg-[#A855F7] hover:shadow-xl",
  secondary:
    "bg-white/85 text-slate-950 ring-1 ring-white/80 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:bg-rose-50 hover:ring-rose-200",
  ghost:
    "bg-[#F3E8FF]/90 text-[#1E1B4B] ring-1 ring-[#E9D5FF] hover:-translate-y-0.5 hover:bg-purple-50 hover:text-purple-900 hover:ring-purple-200",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
}: ButtonLinkProps) {
  const className = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] focus-visible:ring-offset-2 ${styles[variant]}`;

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className} download={download}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} download={download}>
      {children}
    </Link>
  );
}
