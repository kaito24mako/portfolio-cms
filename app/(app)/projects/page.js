import Button from "@/app/_components/_common/Button";
import CardGrid from "@/app/_components/_common/CardGrid";
import CardLarge from "@/app/_components/_common/CardLarge";
import Title from "@/app/_components/_common/Title";
import FilterIcon from "@/app/_components/_images/_icons/FilterIcon";

const projects = [
  {
    title: "Catch Em' All!",
    updatedAt: "Feb 24, 2026",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, adlaboriosam voluptatum consectetur reiciendis beatae.",
    tags: ["React", "SASS", "JavaScript"],
  },
  {
    title: "Book Library",
    updatedAt: "Dec 05, 2025",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, adlaboriosam voluptatum consectetur reiciendis beatae.",
    tags: ["Next.js", "Tailwind CSS", "SQLite"],
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
          <Button icon="/icons/plus.svg" className="btn-accent px-8">
            New Project
          </Button>
        </div>
      </div>

      <CardGrid className="grid-cols-1 2xl:grid-cols-2">
        {projects.map((p) => {
          <CardLarge
            title={p.title}
            updatedAt={p.updatedAt}
            description={p.description}
            tags={p.tags}
          />;
        })}
      </CardGrid>
    </div>
  );
}

export default ProjectsPage;
