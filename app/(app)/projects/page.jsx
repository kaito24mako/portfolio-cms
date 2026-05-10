import { connectDb } from "@/lib/connectDb";
import { getAllProjects } from "@/controllers/projects";

import Button from "@/app/_components/_common/Button";
import Title from "@/app/_components/_common/Title";
import SearchForm from "@/app/_components/_common/_form/SearchForm";
import ProjectsList from "@/app/_components/_features/_projects/ProjectsList";

// ? what does this do? is it because this page renders dynamic data?
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
};

const projectsPlaceholders = [
  {
    tags: ["React", "SASS", "JavaScript"],
    image: "/placeholders/pokemon.png",
  },
  {
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
  },
  {
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
  },
  {
    tags: ["React", "SASS", "JavaScript"],
    image: "/placeholders/pokemon.png",
  },
];

async function ProjectsPage() {
  // for server-rendered pages without user-triggered requests, call controllers directly instead of fetching the API
  await connectDb();
  const projects = await getAllProjects();

  // merging projects api with placeholders for testing
  const mergedProjects = projects?.map((project, index) => ({
    ...project.toJSON(),
    ...projectsPlaceholders[index],
  }));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-0">
        <Title
          font="font-heading"
          heading="Projects"
          subHeading="Create and manage your stunning projects"
        />
        <div className="flex gap-5">
          <SearchForm />
          <Button
            icon="/icons/plus.svg"
            className="btn-accent px-8"
            href="/projects/new"
          >
            New Project
          </Button>
        </div>
      </div>

      <ProjectsList projects={mergedProjects} />
    </div>
  );
}

export default ProjectsPage;
