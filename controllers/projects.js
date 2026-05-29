import Project from "@/models/projects";

import { badRequest, conflict, notFound } from "@/lib/errorHandler";

// in next.js, controllers shouldnt know about requests/responses (like req.params, req.body, res.send),
// it should only return data or throw errors

function isValidUrl(value) {
  if (!value) return true;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

//* GET
export async function getAllProjects() {
  const projects = await Project.findAll({
    attributes: { exclude: ["createdAt"] },
    order: [["updatedAt", "DESC"]],
  });

  return projects;
}

export async function getProjectById(id) {
  if (!id) {
    throw badRequest("Project ID is required");
  }

  const project = await Project.findByPk(id, {
    attributes: { exclude: ["createdAt"] },
  });

  if (!project) {
    throw notFound("Project not found");
  }

  return project;
}

export async function getPublishedProjects() {
  const projects = await Project.findAll({
    where: {
      status: "Published",
    },
    attributes: { exclude: ["createdAt"] },
    order: [["updatedAt", "DESC"]],
  });

  if (!projects) throw badRequest("No published projects found");

  return projects;
}

// * POST
export async function postProject(data) {
  const sameProject = await Project.findOne({
    where: { title: data.title },
  });

  if (sameProject)
    throw conflict("A project with the same title already exists");

  if (!data.title) throw badRequest("A title is required to create a project");

  if (!data.status)
    throw badRequest("A status is required to create a project");

  if (!isValidUrl(data.siteUrl)) {
    throw badRequest("Site URL must be a valid URL");
  }

  if (!isValidUrl(data.githubUrl)) {
    throw badRequest("GitHub URL must be a valid URL");
  }

  const project = await Project.create(data, {
    attributes: { exclude: ["createdAt"] },
  });

  return {
    message: `Project ${project.title} created successfully`,
    project,
  };
}

// * PUT
export async function putProject(id, data) {
  if (!id) {
    throw badRequest("Project ID is required");
  }

  const project = await Project.findByPk(id);

  if (!project) {
    throw notFound("Project not found");
  }

  if (!data.title) {
    throw badRequest("A title is required to edit a project");
  }

  if (!isValidUrl(data.siteUrl)) {
    throw badRequest("Site URL must be a valid URL");
  }

  if (!isValidUrl(data.githubUrl)) {
    throw badRequest("GitHub URL must be a valid URL");
  }

  if (data.title !== project.title) {
    const sameProject = await Project.findOne({
      where: { title: data.title },
    });

    if (sameProject) {
      throw conflict("A project with the same title already exists");
    }
  }

  await project.update({
    title: data.title ?? project.title,
    description: data.description ?? project.description,
    siteUrl: data.siteUrl ?? project.siteUrl,
    githubUrl: data.githubUrl ?? project.githubUrl,
    status: data.status ?? project.status,
    tags: data.tags ?? project.tags,
  });

  return {
    message: `Project ${project.title} updated successfully`,
    project,
  };
}

// * DELETE
export async function deleteProject(id) {
  if (!id) {
    throw badRequest("Project ID is required");
  }

  const project = await Project.findByPk(id);

  if (!project) {
    throw notFound("Project not found");
  }

  await project.destroy();
  return {
    message: `Project ${project.title} deleted successfully`,
  };
}
