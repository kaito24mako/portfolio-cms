import { connectDb } from "@/lib/connectDb";
import { getAllProjects } from "@/controllers/projects";

const projectsPlaceholders = [
  {
    image: "/placeholders/pokemon.png",
  },
  {
    image: "/placeholders/library.png",
  },
  {
    image: "/placeholders/tictactoe.png",
  },
  {
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
