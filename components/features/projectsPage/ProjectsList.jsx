// * involves client-side interaction with state, so it's a client-side component

"use client";

import { useState } from "react";

import FilterTabs from "../filter/FilterTabs";
import ProjectItem from "@/components/features/projectsPage/ProjectItem";
import Grid from "@/components/common/grid/Grid";

function ProjectsList({ projects = [], search }) {
  const [activeTab, setActiveTab] = useState("All");

  // filter by status
  let filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.status === activeTab);

  // filter by search
  if (search) {
    filteredProjects = filteredProjects.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <FilterTabs
        tabs={[
          { title: "All", style: "btn-active" },
          { title: "Published", style: "btn-success" },
          { title: "Draft", style: "btn-warning" },
          { title: "Archived", style: "btn-info" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Grid className="grid-cols-1 gap-10 md:gap-6">
        {filteredProjects?.map((p) => {
          return (
            <ProjectItem
              key={p.id}
              id={p.id}
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
      </Grid>
    </div>
  );
}

export default ProjectsList;
