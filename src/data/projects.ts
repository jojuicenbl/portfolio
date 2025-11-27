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
    title: "Unmet.io", 
    description: "Scan the web for unmet needs and emerging trends. To be published.",
    url: "https://unmet.io",
    tags: ["Python", "FastAPI", "SQLite", "OpenAI API"],
   },
   { title: "Side Project #3", description: "To be published."}
];
