import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://esraa-amaireh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Esraa Amaireh | Full Stack Developer",
    template: "%s | Esraa Amaireh",
  },
  description:
    "Full Stack Developer building scalable web applications, CMS platforms, REST APIs, database architectures, and reliable backend systems.",
  keywords: [
    "Esraa Amaireh",
    "Full Stack Developer",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "Kotlin Developer",
    "Spring Boot Developer",
  ],
  authors: [{ name: "Esraa Amaireh" }],
  creator: "Esraa Amaireh",
  icons: {
    icon: "/logo/esraa-logo-light-purple.svg",
    shortcut: "/logo/esraa-logo-light-purple.svg",
    apple: "/logo/esraa-logo-light-purple.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Esraa Amaireh | Full Stack Developer",
    description:
      "Professional portfolio and CV for Esraa Amaireh, Full Stack Developer.",
    siteName: "Esraa Amaireh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esraa Amaireh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel, React, Next.js, Kotlin, Spring Boot, Node.js, database design, and API integrations.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden scroll-smooth">
      <body className="min-h-full overflow-x-hidden text-white antialiased">
        {children}
      </body>
    </html>
  );
}
