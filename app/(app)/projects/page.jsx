import Button from "@/components/_common/Button";
import CardGrid from "@/components/_common/Grid";
import LargeCard from "@/components/_common/_card/LargeCard";
import Title from "@/components/_common/Title";
import Pagination from "@/components/_features/_projects/Pagination";
import FilterIcon from "@/components/_images/_icons/FilterIcon";
import SearchForm from "@/components/_common/_form/SearchForm";

import { getAllProjects } from "@/controllers/projects";

export const metadata = {
  title: "Projects",
};

const projectsPlaceholders = [
  {
    updated: "Feb 24, 2026",
    tags: ["React", "SASS", "JavaScript"],
    image: "/placeholders/pokemon.png",
    // alt: "Catch Em' All! project",
    status: "Published",
    alt: "Catch Em All!",
  },
  {
    updated: "Dec 05, 2025",
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
    status: "Draft",
    alt: "Book Library",
  },
  {
    updated: "Nov 18, 2025",
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
    status: "Archived",
    alt: "Book Library",
  },
];

async function ProjectsPage() {
  const projects = await getAllProjects();

  // merging projects api with placeholders for testing
  const mergedProjects = projects?.map((project, index) => ({
    ...project.dataValues,
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

      <div className="flex flex-col gap-4">
        <Pagination tabs={["All", "Published", "Draft", "Archived"]} />

        <CardGrid className="grid-cols-1 2xl:grid-cols-2 gap-10 md:gap-6">
          {mergedProjects?.map((p) => {
            return (
              <LargeCard
                key={p.id}
                title={p.title}
                description={p.description}
                updated={p.updated}
                tags={p.tags}
                image={p.image}
                status={p.status}
                alt={p.alt}
              />
            );
          })}
        </CardGrid>
      </div>
    </div>
  );
}

export default ProjectsPage;
