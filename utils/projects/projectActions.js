import {
  getAllProjects,
  postProject,
  putProject,
  deleteProject,
} from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { getErrorResponse } from "@/lib/errorHandler";
import { redirect } from "next/navigation";

const imagePlaceholders = [
  {
    image: "/placeholders/pokemon.webp",
  },
  {
    image: "/placeholders/library.webp",
  },
  {
    image: "/placeholders/dashboard.webp",
  },
  {
    image: "/placeholders/pokemon.webp",
  },
  {
    image: "/placeholders/library.webp",
  },
  {
    image: "/placeholders/dashboard.webp",
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

export async function createProject(prevState, formData) {
  "use server";
  try {
    await connectDb();
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      siteUrl: formData.get("siteUrl"),
      githubUrl: formData.get("githubUrl"),
      status: formData.get("status"),
      tags: formData.getAll("tags"),
    };
    await postProject(data);
  } catch (err) {
    return {
      // return the controller's throw as "error" to display on client-side
      error: getErrorResponse(err).message,
    };
  }
  redirect("/projects?toast=saved");
}

export async function editProject(id, prevState, formData) {
  "use server";
  try {
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
  } catch (err) {
    return {
      error: getErrorResponse(err).message,
    };
  }
  redirect("/projects?toast=saved");
}

export async function removeProject(id) {
  "use server";
  await connectDb();
  await deleteProject(id);
  redirect("/projects?toast=deleted");
}
