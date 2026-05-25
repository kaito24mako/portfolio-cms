import ProjectPageTemplate from "@/components/features/projectsPage/ProjectPageTemplate";

import { createProject } from "@/utils/projects/projectActions";

export const metadata = {
  title: "Create Project",
};

function NewProjectsPage() {
  return (
    <ProjectPageTemplate
      handleFormAction={createProject}
      heading="Create New Project"
      subHeading="Fill in the details of your latest work"
      exitBtnLink="/projects"
      exitBtnType="button"
      exitBtnText="Cancel"
    />
  );
}

export default NewProjectsPage;
