import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { portfolio } from "@/data/portfolio";

const logoPath = "/logo/esraa-logo-light-purple.svg";

const socialIcon = {
  GitHub: "GH",
  LinkedIn: "IN",
  Email: "@",
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#050314] px-5 pt-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(139,92,246,0.34),transparent_32rem),radial-gradient(circle_at_82%_18%,rgba(167,139,250,0.2),transparent_30rem),linear-gradient(135deg,#050314_0%,#0B0620_48%,#160B35_100%)]" />
      <div className="absolute left-[8%] top-32 h-2 w-2 rounded-sm bg-[#A78BFA]/70 shadow-[0_0_22px_rgba(167,139,250,0.9)]" />
      <div className="absolute right-[18%] top-44 h-3 w-3 rounded-sm border border-[#A78BFA]/50 bg-white/5 shadow-[0_0_28px_rgba(139,92,246,0.7)]" />
      <div className="absolute bottom-28 left-[18%] h-2.5 w-2.5 rounded-full bg-[#8B5CF6]/80 shadow-[0_0_24px_rgba(139,92,246,0.85)]" />
      <div className="absolute bottom-44 right-[9%] h-12 w-12 rounded-[1rem] border border-[#A78BFA]/20 bg-white/[0.03] backdrop-blur" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal>
          <div className="max-w-[760px]">
            <p className="inline-flex rounded-full border border-[#A78BFA]/25 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#C4B5FD] shadow-lg shadow-purple-950/30 backdrop-blur">
              Full Stack Developer
            </p>
            <h1 className="mt-7 text-[clamp(2.4rem,12vw,3.6rem)] font-semibold leading-[0.98] tracking-tight text-white sm:text-[clamp(2.6rem,6vw,4.5rem)] lg:text-[clamp(3rem,7vw,5.8rem)]">
              <span className="block bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent">
                Hello, I&apos;m
              </span>
              <span className="mt-2 block text-white">Esraa Amaireh</span>
            </h1>
            <p className="mt-7 max-w-[760px] text-base font-semibold leading-7 text-[#EDE9FE] sm:text-[1.18rem] sm:leading-8 lg:text-[1.35rem] lg:leading-9">
              Full Stack Developer specializing in PHP / Laravel, React, Next.js,
              backend systems, CMS platforms, and API integrations.
            </p>
            <p className="mt-5 max-w-[680px] text-base leading-8 text-[#C7C7D9] sm:text-lg">
              I build clean, scalable, and maintainable digital experiences across
              frontend, backend, databases, and third-party integrations.
            </p>
            <p className="typing-tagline mt-6 max-w-[680px] overflow-hidden whitespace-nowrap border-r border-[#A78BFA] text-sm font-medium text-[#A78BFA] sm:text-base">
              Driven by clean code, scalable architecture, and continuous learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {portfolio.person.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border border-[#A78BFA]/25 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-[#C7C7D9] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#A78BFA]/60 hover:text-white hover:shadow-lg hover:shadow-purple-900/20"
                >
                  {specialty}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/resume"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#050314] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.45)] ring-1 ring-[#8B5CF6]/60 transition duration-200 hover:-translate-y-0.5 hover:bg-[#0B0620]"
              >
                View Resume
              </Link>
              <a
                href={portfolio.resume.downloadUrl}
                download
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#A78BFA]/45 bg-transparent px-6 py-3 text-sm font-semibold text-[#C4B5FD] transition duration-200 hover:-translate-y-0.5 hover:border-[#C4B5FD] hover:bg-[#8B5CF6]/10 hover:text-white"
              >
                Download CV
              </a>
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#A78BFA]/25 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-[#C7C7D9] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#A78BFA] hover:text-white"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
              {portfolio.socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#A78BFA]/25 bg-white/[0.06] text-sm font-bold text-[#C4B5FD] transition duration-200 hover:-translate-y-0.5 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/20 hover:text-white hover:shadow-lg hover:shadow-purple-900/30"
                >
                  {socialIcon[item.label as keyof typeof socialIcon]}
                </a>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.14}>
          <div className="relative mx-auto hidden w-full max-w-xl lg:block">
            <div className="absolute inset-6 rounded-full bg-[#8B5CF6]/30 blur-3xl" />
            <div className="relative rotate-[-2deg] rounded-[2rem] border border-[#A78BFA]/25 bg-white/[0.07] p-5 shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-[#A78BFA]/20 pb-4">
                <span className="h-3 w-3 rounded-full bg-[#8B5CF6]" />
                <span className="h-3 w-3 rounded-full bg-[#A78BFA]" />
                <span className="h-3 w-3 rounded-full bg-[#C4B5FD]" />
                <span className="ml-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C7C7D9]">
                  portfolio.tsx
                </span>
              </div>
              <div className="space-y-3 py-6 font-mono text-sm leading-7 text-[#C7C7D9]">
                <p>
                  <span className="text-[#A78BFA]">const</span>{" "}
                  <span className="text-white">developer</span>{" "}
                  <span className="text-[#C4B5FD]">=</span> {"{"}
                </p>
                <p className="pl-5">
                  role: <span className="text-[#C4B5FD]">&quot;Full Stack Developer&quot;</span>,
                </p>
                <p className="pl-5">
                  focus: <span className="text-[#C4B5FD]">&quot;Laravel, React, Next.js&quot;</span>,
                </p>
                <p className="pl-5">
                  mindset: <span className="text-[#C4B5FD]">&quot;clean, scalable, reliable&quot;</span>
                </p>
                <p>{"}"}</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#A78BFA]/20 bg-[#050314]/60 p-6">
                <Image
                  src={logoPath}
                  alt="Esraa Amaireh"
                  width={720}
                  height={240}
                  className="mx-auto h-auto w-full max-w-sm drop-shadow-[0_0_28px_rgba(167,139,250,0.45)]"
                  priority
                />
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
