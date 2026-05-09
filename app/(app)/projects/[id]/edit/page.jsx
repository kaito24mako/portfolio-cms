import ProjectPageTemplate from "@/app/_components/_pages/ProjectPageTemplate";

import { redirect } from "next/navigation";
import { getProject, putProject, deleteProject } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";

// * DEBUG:
// * I wasn't sure how to retrive the properties of a project, until I examined console.log(project) and found the properties were under "dataValues"

async function EditProjectPage({ params }) {
  await connectDb();

  const { id } = await params;
  const project = await getProject(id);

  async function editProject(formData) {
    "use server";

    await connectDb();

    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      siteUrl: formData.get("siteUrl"),
      githubUrl: formData.get("githubUrl"),
      status: formData.get("status"),
    };

    await putProject(id, data);
    redirect("/projects");
  }

  async function removeProject() {
    "use server";

    await connectDb();

    await deleteProject(id);
    redirect("/projects");
  }

  return (
    <ProjectPageTemplate
      formFunction={editProject}
      exitBtnFunction={removeProject}
      heading="Edit Project"
      subHeading="Edit the details of your stunning work"
      exitBtnType="submit"
      exitBtnText="Delete"
      prevTitle={project.dataValues.title}
      prevDescription={project.dataValues.description}
      prevSiteUrl={project.dataValues.siteUrl}
      prevGithubUrl={project.dataValues.githubUrl}
    />
  );
}

export default EditProjectPage;
