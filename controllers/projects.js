import Project from "@/models/projects";

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
  const project = await Project.findByPk(id);

  if (!project) {
    throw new Error("Project not found");
  }
  return project;
}

// * POST
export async function postProject(data) {
  const sameProject = await Project.findOne({
    where: { title: data.title },
  });

  if (sameProject) throw new Error("This project title already exists");

  const project = await Project.create(data);

  return {
    message: `Project ${project.title} created successfully`,
    project,
  };
}

// * PUT
export async function putProject(id, data) {
  const project = await Project.findByPk(id);

  if (!project) {
    throw new Error("Project not found");
  }

  await project.update({
    title: data.title ?? project.title,
    description: data.description ?? project.description,
    siteUrl: data.siteUrl ?? project.siteUrl,
    githubUrl: data.githubUrl ?? project.githubUrl,
    status: data.status ?? project.status,
  });

  return {
    message: `Project ${project.title} updated successfully`,
    project,
  };
}

// * DELETE
export async function deleteProject(id) {
  const project = await Project.findByPk(id);

  if (!project) {
    throw new Error("Project not found");
  }

  await project.destroy();
  return {
    message: `Project ${project.title} deleted successfully`,
  };
}
