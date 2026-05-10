"use client";

import { useState } from "react";

import Filters from "../_filter/Filters";
import Grid from "../../_common/Grid";
import LargeCard from "../../_common/_card/LargeCard";

function ProjectsList({ projects = [] }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.status === activeTab);

  return (
    <div className="flex flex-col gap-4">
      <Filters
        tabs={[
          { title: "All", style: "btn-active" },
          { title: "Published", style: "btn-success" },
          { title: "Draft", style: "btn-warning" },
          { title: "Archived", style: "btn-info" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Grid className="grid-cols-1 2xl:grid-cols-2 gap-10 md:gap-6">
        {filteredProjects?.map((p, index) => {
          return (
            <LargeCard
              key={index}
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
