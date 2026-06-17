import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "download">;

const styles = {
  primary:
    "bg-[#050314] text-white ring-1 ring-[#8B5CF6]/60 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 hover:bg-[#0B0620] hover:shadow-[0_0_40px_rgba(139,92,246,0.48)]",
  secondary:
    "bg-transparent text-[#C4B5FD] ring-1 ring-[#A78BFA]/45 backdrop-blur hover:-translate-y-0.5 hover:bg-[#8B5CF6]/10 hover:text-white hover:ring-[#C4B5FD]",
  ghost:
    "bg-white/[0.06] text-[#C7C7D9] ring-1 ring-[#A78BFA]/25 backdrop-blur hover:-translate-y-0.5 hover:text-white hover:ring-[#A78BFA]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
}: ButtonLinkProps) {
  const className = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050314] ${styles[variant]}`;

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
