import ProjectsClientBody from "@/components/features/projectsPage/ProjectsClientBody";

import { retrieveAllProjects } from "@/utils/projects/projectActions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
};

async function ProjectsPage() {
  const projects = await retrieveAllProjects();

  // ProjectsClientBody is a CSC needed to separate search and tab states
  return <ProjectsClientBody projects={projects} />;
}

export default ProjectsPage;
