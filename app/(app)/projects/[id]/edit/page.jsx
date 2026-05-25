import ProjectPageTemplate from "@/components/features/projectsPage/ProjectPageTemplate";

import { editProject, removeProject } from "@/utils/projects/projectActions";
import { getProjectById } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";

export const metadata = {
  title: "Edit Project",
};

// since this page is routed by [id], it can accept params to use as the id
async function EditProjectPage({ params }) {
  await connectDb();

  const { id } = await params;
  const project = await getProjectById(id);

  // needed to get the id from params for projectActions.js
  async function editProjectAction(formData) {
    "use server";
    await editProject(id, formData);
  }

  async function removeProjectAction() {
    "use server";
    await removeProject(id);
  }

  // dataValues are the current project's values
  return (
    <ProjectPageTemplate
      handleFormAction={editProjectAction}
      exitBtnAction={removeProjectAction}
      heading="Edit Project"
      subHeading="Edit the details of your stunning work"
      exitBtnType="submit"
      exitBtnText="Delete"
      prevTitle={project.dataValues.title}
      prevDescription={project.dataValues.description}
      prevTags={project.dataValues.tags}
      prevSiteUrl={project.dataValues.siteUrl}
      prevGithubUrl={project.dataValues.githubUrl}
    />
  );
}

export default EditProjectPage;
