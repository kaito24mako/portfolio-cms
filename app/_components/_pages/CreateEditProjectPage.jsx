import Title from "../_common/Title";
import Grid from "../_common/Grid";
import EditForm from "../_common/_form/EditForm";
import Badge from "../_common/Badge";
import Button from "../_common/Button";

import WebIcon from "../_images/_icons/WebIcon";
import GithubIcon from "../_images/_icons/GithubIcon";

function CreateEditProjectPage({ ...props }) {
  return (
    <form action={props.formFunction} className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading={props.heading}
        subHeading={props.subHeading}
      />

      <Grid className="grid-cols-1 sm:grid-cols-5">
        {/* left grid items */}
        <div className="col-span-3 flex flex-col gap-3">
          <EditForm title="Title">
            <input
              name="title"
              type="text"
              placeholder="Enter a title..."
              className="w-full focus:outline-0"
            />
          </EditForm>
          <EditForm title="Description">
            <textarea
              name="description"
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
                name="siteUrl"
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
                name="githubUrl"
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
          href={props.exitBtnLink}
          type={props.exitBtnType}
          className="btn-ghost shadow-none! btn-sm lg:btn-md"
        >
          {props.exitBtnText}
        </Button>
        <Button
          name="status"
          value="Archived"
          type="submit"
          className="btn-info shadow-none! btn-sm lg:btn-md"
        >
          Save as Archived
        </Button>
        <Button
          name="status"
          value="Draft"
          type="submit"
          className="btn-warning shadow-none! btn-sm lg:btn-md"
        >
          Save as Draft
        </Button>
        <Button
          name="status"
          value="Published"
          type="submit"
          className="btn-success shadow-none! btn-sm lg:btn-md"
        >
          Publish to Portfolio
        </Button>
      </div>
    </form>
  );
}

export default CreateEditProjectPage;
