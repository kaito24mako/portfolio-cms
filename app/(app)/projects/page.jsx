// * only fetches data, so it stays a server-side component

import ProjectsClientBody from "@/components/features/projects/ProjectsClientBody";

import { getProjectsData } from "@/lib/getProjectsData";

export const metadata = {
  title: "Projects",
};

async function ProjectsPage() {
  const projects = await getProjectsData();

  // ProjectsClientBody is a CSC needed to separate search and tab states
  return <ProjectsClientBody projects={projects} />;
}

export default ProjectsPage;
