import GithubIcon from "@/components/icons/ui/GithubIcon";
import WebIcon from "@/components/icons/ui/WebIcon";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import EditForm from "@/components/ui/forms/EditForm";
import Grid from "@/components/ui/grid/Grid";
import Title from "@/components/ui/text/Title";

function ProjectPageTemplate({ ...props }) {
  // ! should these be in a custom hook or sth?
  const leftFormFields = [
    {
      isTextArea: false,
      title: "Title",
      name: "title",
      placeholder: "Enter a title...",
      defaultValue: props.prevTitle,
    },
    {
      isTextArea: true,
      title: "Description",
      name: "description",
      placeholder: "Enter a brief description...",
      defaultValue: props.prevDescription,
    },
    {
      isTextArea: false,
      title: "Image",
      name: "image",
      placeholder: "Upload a thumbnail...",
      defaultValue: null,
    },
  ];

  const statusButtons = [
    {
      value: "Archived",
      text: "Save as Archived",
      color: "btn-info",
    },
    {
      value: "Draft",
      text: "Save as Draft",
      color: "btn-warning",
    },
    {
      value: "Published",
      text: "Publish to Portfolio",
      color: "btn-success",
    },
  ];

  return (
    // action is a server function - when this form is submitted, call createProject with the form data
    <form action={props.formFunction} className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading={props.heading}
        subHeading={props.subHeading}
      />

      <Grid className="grid-cols-1 sm:grid-cols-5">
        {/* left form fields */}
        <div className="col-span-3 flex flex-col gap-3">
          {leftFormFields.map((f) => (
            <EditForm title={f.title} key={f.title}>
              {f.isTextArea ? (
                <textarea
                  className="w-full focus:outline-0"
                  rows={8}
                  name={f.name}
                  placeholder={f.placeholder}
                  defaultValue={f.defaultValue}
                />
              ) : (
                <input
                  type="text"
                  className="w-full focus:outline-0"
                  name={f.name}
                  placeholder={f.placeholder}
                  defaultValue={f.defaultValue}
                />
              )}
            </EditForm>
          ))}
        </div>

        {/* right form fields */}
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
                className="w-full focus:outline-0"
                type="url"
                name="siteUrl"
                placeholder="https://example.com"
                defaultValue={props.prevSiteUrl}
              />
            </div>
          </EditForm>

          <EditForm title="GitHub URL">
            <div className="flex items-center gap-2">
              <GithubIcon />
              <input
                className="w-full focus:outline-0"
                type="url"
                name="githubUrl"
                placeholder="https://github.com/example.com"
                defaultValue={props.prevGithubUrl}
              />
            </div>
          </EditForm>
        </div>
      </Grid>

      {/* bottom buttons */}
      <div className="flex flex-col gap-5 shadow-sm p-4 justify-end bg-base-200 rounded-sm sm:flex-row">
        {/* cancel/delete button */}
        <Button
          onClick={props.exitBtnFunction}
          href={props.exitBtnLink}
          type={props.exitBtnType}
          className="btn-ghost shadow-none! btn-sm lg:btn-md"
        >
          {props.exitBtnText}
        </Button>

        {/* save buttons */}
        {statusButtons.map((btn) => (
          <Button
            key={btn.value}
            value={btn.value}
            name="status"
            type="submit"
            className={`${btn.color} shadow-none! btn-sm lg:btn-md`}
          >
            {btn.text}
          </Button>
        ))}
      </div>
    </form>
  );
}

export default ProjectPageTemplate;
