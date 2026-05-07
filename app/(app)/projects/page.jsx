import Button from "@/app/_components/_common/Button";
import CardGrid from "@/app/_components/_common/Grid";
import LargeCard from "@/app/_components/_common/_card/LargeCard";
import Title from "@/app/_components/_common/Title";
import Pagination from "@/app/_components/_features/_projects/Pagination";
import SearchForm from "@/app/_components/_common/_form/SearchForm";

// import { getAllProjects } from "@/controllers/projects";

export const metadata = {
  title: "Projects",
};

const projectsPlaceholders = [
  {
    tags: ["React", "SASS", "JavaScript"],
    image: "/placeholders/pokemon.png",
    status: "Published",
  },
  {
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
    status: "Draft",
  },
  {
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
    status: "Archived",
  },
];

async function ProjectsPage() {
  // * GET (getAllProjects)
  // fetching data in next.js
  const data = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  const projects = await data.json();

  // merging projects api with placeholders for testing
  const mergedProjects = projects?.map((project, index) => ({
    ...project,
    ...projectsPlaceholders[index],
  }));

  console.log(mergedProjects);

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
                siteUrl={p.siteUrl}
                githubUrl={p.githubUrl}
                status={p.status}
                updatedAt={p.updatedAt}
                tags={p.tags}
                image={p.image}
                alt={p.title}
              />
            );
          })}
        </CardGrid>
      </div>
    </div>
  );
}

export default ProjectsPage;
