import EditForm from "@/app/_components/_common/_form/EditForm";
import Title from "@/app/_components/_common/Title";
import Badge from "@/app/_components/_common/Badge";

import WebIcon from "@/app/_components/_images/_icons/WebIcon";
import GithubIcon from "@/app/_components/_images/_icons/GithubIcon";

function NewProjectsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        font="font-heading"
        heading="Create New Project"
        subHeading="Fill in the details of your latest work"
      />

      <EditForm title="Title">
        <input type="text" placeholder="Enter a title..." className="w-full" />
      </EditForm>
      <EditForm title="Description">
        <textarea
          placeholder="Enter a brief description..."
          className="w-full"
        />
      </EditForm>
      <EditForm title="Image">
        <input
          type="text"
          placeholder="Upload a thumbnail..."
          className="w-full"
        />
      </EditForm>
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
          <input type="url" placeholder="https://example.com" />
        </div>
      </EditForm>
      <EditForm title="GitHub URL">
        <div className="flex items-center gap-2">
          <GithubIcon />
          <input type="url" placeholder="https://github.com/example" />
        </div>
      </EditForm>
    </div>
  );
}

export default NewProjectsPage;
