import { connectDb } from "./connectDb";
import { getAllProjects } from "@/controllers/projects";

const projectsPlaceholders = [
  {
    // tags: ["React", "SASS", "JavaScript"],
    image: "/placeholders/pokemon.png",
  },
  {
    // tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
  },
  {
    // tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/tictactoe.png",
  },
  {
    // tags: ["React", "SASS", "JavaScript"],
    image: "/placeholders/pokemon.png",
  },
];

// for server-rendered pages without user-triggered requests, call controllers directly instead of fetching the API
export async function getProjectsData() {
  await connectDb();

  const projects = await getAllProjects();

  // merging projects api with placeholders for v1.0
  return projects?.map((project, index) => ({
    ...project.toJSON(),
    ...projectsPlaceholders[index],
  }));
}
