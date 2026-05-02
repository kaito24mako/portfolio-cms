import Button from "@/app/_components/_common/Button";
import CardLarge from "@/app/_components/_common/CardLarge";
import Title from "@/app/_components/_common/Title";

import FilterIcon from "@/app/_components/_images/_icons/FilterIcon";

import CardLarge2 from "@/app/_components/_common/CardLarge2";

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

      <CardLarge />
      <CardLarge2 />
    </div>
  );
}

export default ProjectsPage;
