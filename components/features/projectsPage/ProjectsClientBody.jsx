"use client";

import Title from "@/components/common/text/Title";
import SearchForm from "@/components/common/forms/SearchForm";
import Button from "@/components/common/button/Button";
import ProjectsList from "./ProjectsList";
import Spinner from "@/components/common/loader/Spinner";

import { Suspense, useState } from "react";

function ProjectsClientBody({ projects = [] }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-0">
        <Title
          font="font-heading"
          heading="Projects"
          subHeading="Create and manage your stunning projects"
        />
        <div className="flex gap-5">
          <SearchForm search={search} onSearch={setSearch} />
          <Button
            icon="/icons/plus.svg"
            className="btn-accent px-8"
            href="/projects/new"
          >
            New Project
          </Button>
        </div>
      </div>

      <Suspense fallback={<Spinner />}>
        <ProjectsList projects={projects} search={search} />
      </Suspense>
    </div>
  );
}

export default ProjectsClientBody;
