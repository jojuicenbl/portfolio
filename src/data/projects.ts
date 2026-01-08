export type Project = {
  title: string;
  description: string;
  url?: string;
  tags?: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Space Is The Place",
    description: "An elegant way to explore your Discogs vinyl collection, featuring advanced filters and integrated Apple Music previews.",
    url: "https://spaceistheplace.app",
    tags: ["Vue.js", "TypeScript", "Tailwind CSS", "Axios", "Express", "OAuth"],
    image: "/space-is-the-place.png"
  },
  {
    title: "ELR-ELEC",
    description: "Client project — Design, copywriting, and development of a high-performance business website for an electrical services company. Built with a modern Next.js stack, focused on clarity, trust, and conversion, with responsive UI, smooth scroll animations, and optimized performance.",
    url: "https://elr-elec.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/elr-elec.png"
  },
  {
    title: "La Cuisine de Souad",
    description: "Client project — Custom feature development and payment integration on Shopify, including conditional rendering and support for specific card-based payment methods.",
    url: "https://lacuisinedesouad.com/",
    tags: ["Shopify", "Liquid", "Theme 2.0", "JavaScript", "Payments"],
    image: "/lcs.png"
  },
  { 
    title: "Unmet.io", 
    description: "Scan the web for unmet needs and emerging trends. To be published.",
    url: "https://unmet.io",
    tags: ["Python", "FastAPI", "SQLite", "OpenAI API"],
   },
   { title: "Project #4", description: "To be published."}
];
