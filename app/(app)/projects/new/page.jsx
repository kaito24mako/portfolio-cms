import CreateEditProjectPage from "@/app/_components/_pages/CreateEditProjectPage";

import { redirect } from "next/navigation";
import { connectDb } from "@/lib/connectDb";
import { postProject } from "@/controllers/projects";

export const metadata = {
  title: "New Project",
};

async function createProject(formData) {
  // "use server" tells this function to run on the server
  // so, it can safely access the db and server-only code
  "use server";

  await connectDb();

  // when user clicks a submit button, the broswer collects all the inputs with named fields and sends them as formData
  // so, an object of each of the form inputs are passed to postProject(), which creates the project
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    siteUrl: formData.get("siteUrl"),
    githubUrl: formData.get("githubUrl"),
    status: formData.get("status"),
  };

  await postProject(data);

  // redirects to /projects afterwards
  redirect("/projects");
}

function NewProjectsPage() {
  // async function handlePostProject() {
  //   const res = await fetch("/api/projects", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: "My Project",
  //       description: "Test project",
  //       siteUrl: "https://example.com",
  //       githubUrl: "https://github.com/me/example",
  //       status: "published",
  //     }),
  //   });
  //   const project = await res.json();
  // }

  return (
    // action is a server function - when this form is submitted, call createProject with the form data

    <CreateEditProjectPage
      formFunction={createProject}
      heading="Create New Project"
      subHeading="Fill in the details of your latest work"
      exitBtnLink="/projects"
      exitBtnType="button"
      exitBtnText="Cancel"
    />
  );
}

export default NewProjectsPage;
