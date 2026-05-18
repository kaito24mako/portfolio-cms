import Project from "@/models/projects";
import { badRequest, conflict, notFound } from "@/lib/errors";

// in next.js, controllers shouldnt know about requests/responses (like req.params, req.body, res.send),
// it should only return data or throw errors

// * GET
export async function getAllProjects() {
  const projects = await Project.findAll({
    order: [["updatedAt", "DESC"]],
    attributes: { exclude: ["createdAt"] },
  });

  return projects;
}

export async function getProject(id) {
  if (!id) {
    throw badRequest("Project id is required");
  }

  const project = await Project.findByPk(id, {
    attributes: { exclude: ["createdAt"] },
  });

  if (!project) {
    throw notFound("Project not found");
  }

  return project;
}

// * POST
export async function postProject(data) {
  if (!data.title) {
    throw badRequest("Project title is required");
  }

  const sameProject = await Project.findOne({
    where: { title: data.title },
  });

  if (sameProject) throw conflict("This project title already exists");

  const project = await Project.create(
    {
      ...data,
      title: data.title,
    },
    {
      attributes: { exclude: ["createdAt"] },
    },
  );

  return {
    message: `Project ${project.title} created successfully`,
    project,
  };
}

// * PUT
export async function putProject(id, data) {
  if (!id) {
    throw badRequest("Project id is required");
  }

  const project = await Project.findByPk(id);

  if (!project) {
    throw notFound("Project not found");
  }

  if (data.title !== undefined && !data.title) {
    throw badRequest("Project title is required");
  }

  if (data.title && data.title !== project.title) {
    const sameProject = await Project.findOne({
      where: { title: data.title },
    });

    if (sameProject) {
      throw conflict("This project title already exists");
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
    throw badRequest("Project id is required");
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
