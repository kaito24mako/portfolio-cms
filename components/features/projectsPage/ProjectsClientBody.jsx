"use client";

import Title from "@/components/common/text/Title";
import SearchForm from "@/components/common/form/SearchForm";
import Button from "@/components/common/button/Button";
import ProjectsList from "./ProjectsList";
import DeleteIcon from "@/components/icons/ui/DeleteIcon";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

function ProjectsClientBody({ projects = [] }) {
  const [search, setSearch] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  // once a project has been created/edited...
  // route is redirected to /projects?toast=saved...
  // then display toast...
  // and replace route to /projects

  useEffect(() => {
    const toastType = searchParams.get("toast");

    if (toastType === "saved") {
      toast.success("Project saved!");
      router.replace("/projects");
    }

    if (toastType === "deleted") {
      toast.success("Project deleted", { icon: DeleteIcon });
      router.replace("/projects");
    }
  }, [searchParams, router]);

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

      <ProjectsList projects={projects} search={search} />
    </div>
  );
}

export default ProjectsClientBody;
