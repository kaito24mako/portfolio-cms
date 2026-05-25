import {
  getAllProjects,
  postProject,
  putProject,
  deleteProject,
} from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { redirect } from "next/navigation";

const imagePlaceholders = [
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
  {
    image: "/placeholders/library.png",
  },
  {
    image: "/placeholders/tictactoe.png",
  },
];

export async function retrieveAllProjects() {
  "use server";
  await connectDb();
  const projects = await getAllProjects();
  return projects?.map((project, index) => ({
    ...project.toJSON(),
    ...imagePlaceholders[index],
  }));
}

export async function createProject(formData) {
  "use server";
  await connectDb();
  // when user clicks a submit button, the broswer collects all the inputs with named fields and sends them as formData
  // so, an object of each of the form inputs are passed to postProject(), which creates the project
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    siteUrl: formData.get("siteUrl"),
    githubUrl: formData.get("githubUrl"),
    status: formData.get("status"),
    tags: formData.getAll("tags"),
  };
  await postProject(data);
  redirect("/projects?toast=saved");
}

export async function editProject(id, formData) {
  "use server";
  await connectDb();
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    siteUrl: formData.get("siteUrl"),
    githubUrl: formData.get("githubUrl"),
    status: formData.get("status"),
    tags: formData.getAll("tags"),
  };
  await putProject(id, data);
  redirect("/projects?toast=saved");
}

export async function removeProject(id) {
  "use server";
  await connectDb();
  await deleteProject(id);
  redirect("/projects?toast=deleted");
}
