import ProjectsClientBody from "@/components/features/projectsPage/ProjectsClientBody";

import { getProjectsData } from "@/utils/getProjectsData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
};

async function ProjectsPage() {
  const projects = await getProjectsData();

  // ProjectsClientBody is a CSC needed to separate search and tab states
  return <ProjectsClientBody projects={projects} />;
}

export default ProjectsPage;
