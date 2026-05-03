import Button from "@/app/_components/_common/Button";
import CardGrid from "@/app/_components/_common/Grid";
import LargeCard from "@/app/_components/_common/_card/LargeCard";
import Title from "@/app/_components/_common/Title";
import Pagination from "@/app/_components/_features/_projects/Pagination";
import FilterIcon from "@/app/_components/_images/_icons/FilterIcon";

const projects = [
  {
    title: "Catch Em' All!",
    updatedAt: "Feb 24, 2026",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, adlaboriosam voluptatum consectetur reiciendis beatae.",
    tags: ["React", "SASS", "JavaScript"],
    image: "/placeholders/pokemon.png",
    alt: "Catch Em' All! project",
    status: "Active",
  },
  {
    title: "Book Library",
    updatedAt: "Dec 05, 2025",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, adlaboriosam voluptatum consectetur reiciendis beatae.",
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
    image: "/placeholders/library.png",
    alt: "Book Library project",
    status: "Draft",
  },
];

function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-0">
        <Title
          font="font-heading"
          heading="Projects"
          subHeading="Create and manage your stunning projects"
        />
        <div className="flex gap-5">
          <Button icon={FilterIcon}>Filter</Button>
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
          {projects.map((p) => {
            return (
              <LargeCard
                key={p.title}
                title={p.title}
                updatedAt={p.updatedAt}
                description={p.description}
                tags={p.tags}
                image={p.image}
                alt={p.alt}
                status={p.status}
              />
            );
          })}
        </CardGrid>
      </div>
    </div>
  );
}

export default ProjectsPage;
