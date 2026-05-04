import EditForm from "@/components/_common/_form/EditForm";
import Title from "@/components/_common/Title";
import Badge from "@/components/_common/Badge";
import Grid from "@/components/_common/Grid";
import Button from "@/components/_common/Button";

import WebIcon from "@/components/_images/_icons/WebIcon";
import GithubIcon from "@/components/_images/_icons/GithubIcon";

export const metadata = {
  title: "New Project",
};

async function NewProjectsPage() {
  // * POST
  const res = await fetch("http://localhost:3000/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "My Project",
      description: "Test project",
      siteUrl: "https://example.com",
      githubUrl: "https://github.com/me/example",
      published: true,
      draft: false,
      archived: false,
    }),
  });

  const project = await res.json();

  return (
    <div className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading="Create New Project"
        subHeading="Fill in the details of your latest work"
      />

      <Grid className="grid-cols-1 sm:grid-cols-5">
        {/* left grid items */}
        <div className="col-span-3 flex flex-col gap-3">
          <EditForm title="Title">
            <input
              type="text"
              placeholder="Enter a title..."
              className="w-full focus:outline-0"
            />
          </EditForm>
          <EditForm title="Description">
            <textarea
              placeholder="Enter a brief description..."
              className="w-full focus:outline-0"
              rows={8}
            />
          </EditForm>
          <EditForm title="Image">
            <input
              type="text"
              placeholder="Upload a thumbnail..."
              className="w-full focus:outline-0"
            />
          </EditForm>
        </div>

        {/* right grid items */}
        <div className="col-span-2 flex flex-col gap-3">
          <EditForm title="Tags">
            <div className="flex gap-2">
              <Badge text="Next.js" className="badge-soft badge-primary" />
              <Badge text="SQLite" className="badge-soft badge-primary" />
              <Badge text="Tailwind CSS" className="badge-soft badge-primary" />
            </div>
          </EditForm>
          <EditForm title="Site URL">
            <div className="flex items-center gap-2">
              <WebIcon />
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full focus:outline-0"
              />
            </div>
          </EditForm>
          <EditForm title="GitHub URL">
            <div className="flex items-center gap-2">
              <GithubIcon />
              <input
                type="url"
                placeholder="https://github.com/example"
                className="w-full focus:outline-0"
              />
            </div>
          </EditForm>
        </div>
      </Grid>

      <div className="flex flex-col gap-5 shadow-sm p-4 justify-end bg-base-200 rounded-sm sm:flex-row">
        <Button
          type="submit"
          className="btn-ghost shadow-none! btn-sm lg:btn-md"
        >
          Delete
        </Button>
        <Button
          type="submit"
          className="btn-info shadow-none! btn-sm lg:btn-md"
        >
          Save as Unpublished
        </Button>
        <Button
          type="submit"
          className="btn-warning shadow-none! btn-sm lg:btn-md"
        >
          Save as Draft
        </Button>
        <Button
          type="submit"
          className="btn-success shadow-none! btn-sm lg:btn-md"
        >
          Publish to Portfolio
        </Button>
      </div>
    </div>
  );
}

export default NewProjectsPage;
