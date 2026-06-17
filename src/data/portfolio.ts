import type { Action, Badge, Experience, NavigationItem, Project, SkillGroup } from "./types";

const resumeDownloadUrl = "/Esraa_Amaireh_CV.pdf";

const navigation: NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const heroActions: Action[] = [
  { label: "View Resume", href: "/resume" },
  { label: "Download CV", href: resumeDownloadUrl, download: true, variant: "secondary" },
  { label: "Contact Me", href: "/#contact", variant: "ghost" },
];

const heroBadges: Badge[] = [
  { label: "PHP / Laravel", tone: "teal" },
  { label: "React", tone: "purple" },
  { label: "Next.js", tone: "navy" },
  { label: "Kotlin", tone: "coral" },
  { label: "Spring Boot", tone: "teal" },
  { label: "Databases", tone: "cream" },
];

const experience: Experience[] = [
  {
    company: "Nerdberry",
    location: "Amman, Jordan",
    position: "Full Stack Developer (PHP / Laravel)",
    period: "Apr 2026 - Present",
    highlights: [
      "Develop and maintain CMS-driven web applications using PHP and Laravel.",
      "Build and consume RESTful APIs and integrate frontend applications with backend services.",
      "Design and implement database structures, relationships, migrations, seeders, and Eloquent models.",
      "Develop dynamic content management features and admin dashboards.",
      "Work with Laravel routing, middleware, authentication, validation, and service architecture.",
      "Collaborate with frontend teams using Next.js and React for full-stack feature delivery.",
      "Implement SEO-friendly, scalable, and maintainable solutions for client websites.",
    ],
  },
  {
    company: "MZN Multi Zillion Nodes",
    location: "Amman, Jordan",
    position: "Full Stack Developer",
    period: "Apr 2024 - Apr 2026",
    highlights: [
      "Led the development of full-stack web and mobile applications across frontend, backend, and mobile layers.",
      "Built responsive and scalable frontend applications using React.js, Next.js, and Tailwind CSS.",
      "Developed backend services using Kotlin, Spring Boot, and Vert.x.",
      "Implemented RESTful APIs, event-driven architecture, and asynchronous processing.",
      "Integrated Mastercard, eFawateercom, Umniah, Whoop API, Fitbit API, and WhatsApp Business API.",
      "Designed and optimized databases using PostgreSQL, MySQL, SQL Server, ClickHouse, Redis, and ArcadeDB.",
      "Developed mobile applications using Flutter and native Android Kotlin.",
      "Participated in architecture decisions, code reviews, mentoring, deployment, and maintenance.",
    ],
  },
  {
    company: "Luminus Technical University College",
    location: "Amman, Jordan",
    position: "QA Intern",
    period: "May 2023 - Nov 2023",
    highlights: [
      "Performed manual and automated testing for web and mobile applications.",
      "Designed and executed test cases and reported bugs.",
      "Worked with Selenium WebDriver.",
      "Collaborated with development teams to ensure software quality.",
    ],
  },
];

const skills: SkillGroup[] = [
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"] },
  { category: "Backend", items: ["PHP", "Laravel", "Kotlin", "Spring Boot", "Vert.x", "Node.js"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server", "ClickHouse", "Redis", "ArcadeDB"] },
  { category: "Mobile", items: ["Flutter", "Native Android Kotlin"] },
  { category: "Tools", items: ["Git", "GitHub", "REST APIs", "ERD Design", "Postman"] },
  { category: "Testing", items: ["Manual Testing", "Selenium WebDriver"] },
];

const projects: Project[] = [
  {
    slug: "cms-driven-web-platforms",
    title: "CMS-Driven Web Platforms",
    category: "Laravel / Next.js",
    summary:
      "Dynamic websites and admin dashboards with managed content, API integrations, database relationships, and SEO-friendly delivery.",
    stack: ["PHP", "Laravel", "Next.js", "React", "MySQL", "REST APIs"],
    highlights: [
      "Built editable content structures for client websites and internal admin workflows.",
      "Implemented Laravel routing, middleware, validation, migrations, seeders, and Eloquent models.",
      "Delivered frontend integration patterns for CMS-backed pages and reusable content sections.",
    ],
  },
  {
    slug: "payment-and-service-integrations",
    title: "Payment and Service Integrations",
    category: "Backend Systems",
    summary:
      "Production API integrations for payments, telecom services, health platforms, and business messaging workflows.",
    stack: ["Kotlin", "Spring Boot", "Vert.x", "PostgreSQL", "Redis", "WhatsApp Business API"],
    highlights: [
      "Integrated Mastercard, eFawateercom, Umniah, Whoop API, Fitbit API, and WhatsApp Business API.",
      "Developed RESTful services and asynchronous processing flows for reliable backend operations.",
      "Worked with database optimization and service maintenance across multiple storage engines.",
    ],
  },
  {
    slug: "cross-platform-mobile-applications",
    title: "Cross-Platform Mobile Applications",
    category: "Mobile Development",
    summary:
      "Mobile app features across Flutter and native Android Kotlin connected to scalable backend services and third-party APIs.",
    stack: ["Flutter", "Android Kotlin", "REST APIs", "Spring Boot", "Postman"],
    highlights: [
      "Developed mobile interfaces and service integrations for full-stack product features.",
      "Connected apps to REST APIs and backend systems with practical testing workflows.",
      "Collaborated across architecture, deployment, maintenance, and code review activities.",
    ],
  },
];

export const portfolio = {
  person: {
    name: "Esraa Amaireh",
    title: "Full Stack Developer",
    specialties: [
      "PHP / Laravel",
      "React",
      "Next.js",
      "Kotlin",
      "Spring Boot",
      "Node.js",
      "Database Design",
      "API Integration",
    ],
  },
  contact: {
    phone: "0782065770",
    email: "esraa.amaireh99@gmail.com",
    linkedin: "https://www.linkedin.com/in/esraa-amaireh-a2835823b",
    github: "https://github.com/esraa-amaireh",
  },
  contactItems: [
    { label: "Phone", value: "0782065770", href: "tel:0782065770" },
    { label: "Email", value: "esraa.amaireh99@gmail.com", href: "mailto:esraa.amaireh99@gmail.com" },
    { label: "LinkedIn", value: "Esraa Amaireh", href: "https://www.linkedin.com/in/esraa-amaireh-a2835823b", external: true },
  ],
  socialItems: [
    { label: "GitHub", value: "GitHub", href: "https://github.com/esraa-amaireh", external: true },
    { label: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/in/esraa-amaireh-a2835823b", external: true },
    { label: "Email", value: "Email", href: "mailto:esraa.amaireh99@gmail.com" },
  ],
  navigation,
  hero: {
    headline:
      "Full Stack Developer building scalable web applications, CMS platforms, and reliable backend systems.",
    subheadline:
      "I develop responsive frontend interfaces, robust backend services, CMS-driven websites, REST APIs, database architectures, and third-party integrations with a strong focus on clean code, performance, and maintainability.",
    actions: heroActions,
    badges: heroBadges,
  },
  about:
    "I am a detail-oriented Full Stack Developer with 2+ years of experience building end-to-end web and mobile applications. I have strong experience in React, Next.js, Tailwind CSS, Kotlin, Spring Boot, Node.js, Vert.x, database design, API integrations, and scalable backend systems. Recently, I expanded my expertise into PHP and Laravel, working on CMS-driven platforms, dynamic websites, REST APIs, and admin dashboards.",
  stats: [
    { label: "Experience", value: "2+ years" },
    { label: "Focus", value: "Full stack" },
    { label: "Location", value: "Amman" },
    { label: "Delivery", value: "Web + mobile" },
  ],
  experience,
  skills,
  projects,
  education: {
    school: "Yarmouk University",
    degree: "Bachelor of Biomedical Informatics Engineering",
    period: "Sep 2017 - Jan 2022",
  },
  certifications: ["Complete SQL Course", "Selenium WebDriver", "Postman", "Manual Testing"],
  resume: {
    downloadUrl: resumeDownloadUrl,
  },
};
