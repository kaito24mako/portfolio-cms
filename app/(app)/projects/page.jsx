// * only fetches data, so it stays a server-side component

import ProjectsList from "@/components/features/projects/ProjectsList";
import Button from "@/components/ui/button/Button";
import Title from "@/components/ui/text/Title";
import { getProjectsData } from "@/lib/projects";

// ? what does this do? is it because this page renders dynamic data?
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
};

async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-0">
        <Title
          font="font-heading"
          heading="Projects"
          subHeading="Create and manage your stunning projects"
        />
        <div className="flex gap-5">
          {/* <SearchForm /> */}
          <Button
            icon="/icons/plus.svg"
            className="btn-accent px-8"
            href="/projects/new"
          >
            New Project
          </Button>
        </div>
      </div>

      <ProjectsList projects={projects} />
    </div>
  );
}

export default ProjectsPage;
