// src/data/projects.ts
// Imported by: FeaturedProjects section, /projects index page, /projects/[slug] pages

export interface ProjectCaseStudy {
  problem: string;
  process: string;
  outcome: string;
  lesson: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  // "live" = shipped and working
  // "in-progress" = actively being built
  // "archived" = no longer maintained but worth showing
  status: "live" | "in-progress" | "archived";
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "global-news",
    title: "Global News",
    summary:
      "A server-rendered news aggregator pulling live stories from global sources via the Mediastack API. Built to explore static site generation and server-side data fetching patterns in Next.js.",
    highlights: [
      "Implemented static site generation with getStaticProps for fast, pre-rendered output",
      "Integrated Mediastack News API to surface live stories from sources worldwide",
      "Built with TypeScript and CSS Modules following a component-driven architecture",
      "Deployed to Vercel with automatic builds on push",
    ],
    tech: ["Next.js", "TypeScript", "React", "CSS Modules", "Mediastack API", "Vercel"],
    liveUrl: "https://global-news-5mw4fswfj-mflanagan7.vercel.app/",
    repoUrl: "https://github.com/MFlanagan7/global-news",
    status: "live",
    caseStudy: {
      problem:
        "Wanted to explore how Next.js handles server-side data fetching and static generation compared to client-side React patterns -- and build something functional rather than another tutorial project.",
      process:
        "Built a news aggregator using the Mediastack API, deliberately focusing on the data fetching layer. Implemented getStaticProps for build-time data fetching, explored the tradeoffs between static generation and server-side rendering, and structured components to keep data fetching concerns separate from presentation.",
      outcome:
        "A working news aggregator with fast static output, deployed to Vercel. More importantly, a clear mental model of when to use each Next.js data fetching strategy based on how frequently the data changes.",
      lesson:
        "Static generation is the right default for data that doesn't need to be real-time. Understanding the update frequency of your data should drive your fetching strategy -- not habit or convention.",
    },
  },
];