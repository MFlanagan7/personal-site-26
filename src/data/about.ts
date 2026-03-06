// src/data/about.ts
// Imported by: /about page, /resume page

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  honors: string[];
  relevant: string[];
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  status: "active" | "expired" | "in-progress";
}

export interface SkillGroup {
  primary: string[];
  secondary: string[];
  developing: string[];
}

export const about = {
  name: "Michael Flanagan",
  title: "Frontend Developer & Marketing Technologist",
  tagline:
    "I build and optimize web experiences that drive real business outcomes. Currently at the intersection of frontend development and marketing technology.",

  // Bio paragraphs -- used on the About page
  // Keep these honest and in first person.
  bio: [
    "I'm a frontend developer working at the intersection of code and marketing technology. Currently at WEOKIE Federal Credit Union, where I sole-implemented a full website redesign for a $1.5B financial institution -- building 20+ custom HubSpot modules and migrating 150+ pages from a fragmented legacy platform.",
    "My background spans frontend development, HubSpot CMS development, marketing operations, and analytics. I'm HubSpot CMS for Developers II certified and bring both the technical precision to build things right and enough business context to understand why they need to exist.",
    "I studied Computer Science at the University of Central Oklahoma and Oklahoma City Community College -- while working full-time and raising a family, which taught me as much about prioritization and resilience as any coursework did.",
    "Outside of work I'm into gaming, D&D, and design. I'm currently building this portfolio with a custom Next.js design system, reading The Pragmatic Programmer, and working toward my HubSpot Integrations certification.",
  ],

  location: "Oklahoma City, OK",
  availability: "Open to new opportunities",

  // Update these with your real URLs before launch
  links: {
    github: "https://github.com/MFlanagan7",
    linkedin: "https://www.linkedin.com/in/michael-flanagan/",
    email: "hello@michaelflanagan.dev", // update with real email
    resume: "/resume",
  },

  skills: {
    primary: [
      "JavaScript",
      "HTML & CSS",
      "HubSpot CMS",
      "HubL",
      "React",
      "TypeScript",
    ],
    secondary: [
      "Next.js",
      "Tailwind CSS",
      "Google Analytics",
      "SEO",
      "REST APIs",
      "HubDB",
      "Git",
      "WordPress",
      "UTM Tracking",
      "Email Marketing",
    ],
    developing: [
      "Svelte",
      "Astro",
      "MySQL",
      "PHP",
      "Automated Testing",
      "State Management",
    ],
  } as SkillGroup,

  education: [
    {
      degree: "Bachelor of Science, Computer Science (completing)",
      school: "University of Central Oklahoma",
      period: "2020 – 2023",
      gpa: "3.61",
      honors: ["Dean's Honors List", "Honors Program"],
      relevant: [
        "Software Engineering I",
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Server Programming",
        "Object Oriented Software Development",
        "Computer Organization II",
        "Statistics for Sciences",
      ],
      note: "Completed while working full-time and raising a family.",
    },
    {
      degree: "Associate of Science, Computer Science",
      school: "Oklahoma City Community College",
      period: "2017 – 2020",
      gpa: "3.33",
      honors: ["Honors Program"],
      relevant: [
        "Web Site Development",
        "Visual Programming",
        "C#",
        "C++",
        "Java",
        "VB",
      ],
    },
  ] as Education[],

  certifications: [
    {
      name: "HubSpot CMS for Developers II",
      issuer: "HubSpot Academy",
      issued: "Sep 2024",
      expires: "Oct 2025",
      status: "active",
    },
    {
      name: "HubSpot CMS for Developers",
      issuer: "HubSpot Academy",
      issued: "Mar 2024",
      expires: "Apr 2025",
      status: "active",
    },
    {
      name: "Contextual Marketing",
      issuer: "HubSpot Academy",
      issued: "Oct 2024",
      expires: "Nov 2025",
      status: "active",
    },
    {
      name: "Integrating With HubSpot I: Foundations",
      issuer: "HubSpot Academy",
      issued: "",   // update when earned
      expires: "",  // update when earned
      status: "in-progress",
    },
    {
      name: "Google Analytics Individual Qualification",
      issuer: "Google Skillshop",
      issued: "Aug 2023",
      expires: "Aug 2024",
      // Expired -- worth renewing given your analytics work
      status: "expired",
    },
    {
      name: "Programming Foundations: Software Testing/QA",
      issuer: "LinkedIn Learning",
      issued: "Jul 2023",
      status: "active",
    },
    {
      name: "React: Creating and Hosting a Full-Stack Site",
      issuer: "LinkedIn Learning",
      issued: "Jun 2023",
      status: "active",
    },
    {
      name: "Flutter Mobile Applications Development",
      issuer: "LX Studio",
      issued: "Aug 2022",
      status: "active",
    },
  ] as Certification[],
};