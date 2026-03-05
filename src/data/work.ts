// src/data/work.ts
// Imported by: FeaturedWork section, /work index page, /work/[slug] case study pages

export interface CaseStudyLink {
  label: string;
  url: string;
  type: "live" | "design" | "repo" | "document" | "other";
}

export interface CaseStudy {
  problem: string;
  process: string;
  outcome: string;
  lesson: string;
  links?: CaseStudyLink[];
}

export interface WorkExperience {
  slug: string;
  title: string;
  company: string;
  companyType: string;
  companySize: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  caseStudy: CaseStudy | null;
}

export const workExperience: WorkExperience[] = [
  {
    slug: "weokie",
    title: "Frontend Developer",
    company: "WEOKIE Federal Credit Union",
    companyType: "Financial Services",
    companySize: "$1.5B assets · 230+ employees",
    period: "Oct 2023 – Present",
    location: "Oklahoma City, OK · Hybrid",
    summary:
      "Frontend developer and marketing technologist embedded in the marketing team of a $1.5B regional credit union. Responsible for HubSpot CMS development, website management, marketing technology operations, and cross-platform web presence.",
    highlights: [
      "Inherited a fragmented, inconsistently implemented HubSpot instance with no organizational structure -- audited, reorganized, and standardized the platform before leading the full site redesign",
      "Sole frontend implementer of a full website redesign -- built 20+ custom HubSpot modules and 3 custom page templates, migrating content from a 250+ page legacy site into 150+ redesigned pages, working from designs produced by an external design firm",
      "Currently building a third-party mortgage rate API integration to feed live rate data into frontend display components",
      "Built CRUD tools for interacting with HubDB to support dynamic content management by the marketing team",
      "Handled all HubSpot technical tasks including platform audits, user access reviews, and ongoing administration",
      "Participated in marketing operations including campaign builds, asset tagging, UTM setup and tracking, and marketing email review and optimization",
      "Collaborated with the team on weekly and monthly analytics reviews to inform site and campaign decisions",
      "Took over management of an inherited WordPress site for a merged partner credit union",
      "Consulted with Dealer Car Search to redesign and improve the UI/UX of a credit union-owned car dealership website on their proprietary platform",
      "Created internal documentation and processes to improve team efficiency and establish consistent development standards",
    ],
    skills: [
      "HubSpot CMS",
      "HubL",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "HubDB",
      "REST APIs",
      "WordPress",
      "Google Analytics",
      "UTM Tracking",
      "Email Marketing",
      "Web Accessibility",
      "SEO",
    ],
    caseStudy: {
      problem:
        "WEOKIE's HubSpot instance had been worked on by many different people over time with no consistent organization, standards, or structure -- resulting in a fragmented platform and a website that no longer reflected the credit union's brand or met modern performance and accessibility standards. An external design firm had produced new designs and a developer was needed to wrangle the existing chaos, reorganize the platform, and sole-implement the entire redesign from the ground up.",
      process:
        "Before writing a line of code for the redesign, I audited the existing HubSpot instance -- organizing assets, reviewing user access, and establishing standards that would carry through the new build. Working from the design firm's specifications, I then built the new site using HTML, CSS, JavaScript, HubL, and Tailwind -- developing 20+ custom modules designed to be reusable and editable by non-technical marketing team members. Content from the legacy site was restructured and migrated across 150+ new pages, with minor freelance support for content migration, testing, and bug fixes. I handled all technical implementation solo.",
      outcome:
        "Successfully launched a fully redesigned website for a $1.5B financial institution -- built and managed by a single developer. The marketing team gained significantly more autonomy to manage content through the custom module system. The HubSpot platform went from fragmented and inconsistent to organized and standardized, establishing a foundation for ongoing development. The site now serves as the primary digital presence for the credit union's membership base.",
      lesson:
        "Taking over an inherited mess before building something new is unglamorous work but it's often the most important work. Rushing into the build without first understanding and organizing what existed would have compounded the existing problems rather than solving them. Audit before you architect.",
      links: [
        {
          label: "Live Site",
          url: "https://www.weokie.org",
          type: "live",
        },
        // Add Figma or design spec URL here when available
        // {
        //   label: "Original Design Spec",
        //   url: "",
        //   type: "design",
        // },
      ],
    },
  },
  {
    slug: "mbs-textbooks",
    title: "Software Support Analyst",
    company: "MBS Textbooks",
    companyType: "EdTech / Retail",
    companySize: "Barnes & Noble subsidiary",
    period: "Jun 2022 – Oct 2023",
    location: "Remote",
    summary:
      "Provided technical support across a nationwide network of Barnes & Noble college bookstores, while identifying and solving an internal knowledge management gap by building a custom tool under strict infrastructure constraints.",
    highlights: [
      "Supported 5,000+ end-users at 800+ locations nationwide across software, hardware, and network issues",
      "Resolved 3,700+ inbound client issues with thorough documentation across 20+ applications",
      "Built an internal knowledgebase tool to centralize team knowledge -- a fully self-contained HTML/CSS/JS application with no external dependencies, built within strict flat-file infrastructure constraints including base64-encoded assets",
      "Provided hardware support for point-of-sale systems, printing devices, and Microsoft environments",
    ],
    skills: [
      "Technical Support",
      "System Administration",
      "Network Troubleshooting",
      "HTML / CSS / JavaScript",
      "Documentation",
      "Microsoft Systems",
    ],
    caseStudy: {
      problem:
        "The support team lacked a centralized place to document common issues, solutions, and domain knowledge. Onboarding was slow and institutional knowledge lived in people's heads rather than a shared system. Standard tooling wasn't an option due to infrastructure restrictions on what could be hosted or installed.",
      process:
        "Identified the gap, proposed a solution, and built a lightweight internal knowledgebase as a single self-contained HTML file -- embedding all styles, scripts, and images as base64 directly to satisfy the flat-file infrastructure constraint. Designed it to be easy for non-technical team members to reference and for the team to contribute to over time.",
      outcome:
        "The team gained a shared reference tool that reduced repeated questions, sped up issue resolution, and helped onboard new team members more efficiently. Shipped entirely within the constraints of the environment with no setup, no dependencies, and no maintenance overhead.",
      lesson:
        "Constraints force creative solutions. The restriction that made this project technically interesting -- everything in a single file -- also made it immediately deployable with zero friction. Sometimes the limitation is the feature.",
      links: [],
    },
  },
];