import Title from "../_common/Title";
import Grid from "../_common/Grid";
import EditForm from "../_common/_form/EditForm";
import Badge from "../_common/Badge";
import Button from "../_common/Button";

import WebIcon from "../_images/_icons/WebIcon";
import GithubIcon from "../_images/_icons/GithubIcon";

function CreateEditProjectPage({ ...props }) {
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

  const rightFormFields = [
    {
      isTags: true,
      title: "Tags",
    },
    {
      isTags: false,
      title: "Site URL",
      icon: <WebIcon />,
      name: "siteUrl",
      placeholder: "https://example.com",
      defaultValue: props.prevSiteUrl,
    },
    {
      isTags: false,
      title: "GitHub URL",
      icon: <GithubIcon />,
      name: "githubUrl",
      placeholder: "https://github.com/example.com",
      defaultValue: props.prevGithubUrl,
    },
  ];

  const statusButtons = [
    { value: "Archived", text: "Save as Archived", color: "btn-info" },
    { value: "Draft", text: "Save as Draft", color: "btn-warning" },
    { value: "Published", text: "Publish to Portfolio", color: "btn-success" },
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
          {leftFormFields?.map((f) => (
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
          {rightFormFields?.map((f) => (
            <EditForm title={f.title} key={f.title}>
              {f.isTags ? (
                <div className="flex gap-2">
                  <Badge text="Next.js" className="badge-soft badge-primary" />
                  <Badge text="SQLite" className="badge-soft badge-primary" />
                  <Badge
                    text="Tailwind CSS"
                    className="badge-soft badge-primary"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {f.icon}
                  <input
                    className="w-full focus:outline-0"
                    type="url"
                    name={f.name}
                    placeholder={f.placeholder}
                    defaultValue={f.defaultValue}
                  />
                </div>
              )}
            </EditForm>
          ))}
        </div>
      </Grid>

      {/* bottom buttons */}
      <div className="flex flex-col gap-5 shadow-sm p-4 justify-end bg-base-200 rounded-sm sm:flex-row">
        <Button
          href={props.exitBtnLink}
          type={props.exitBtnType}
          className="btn-ghost shadow-none! btn-sm lg:btn-md"
        >
          {props.exitBtnText}
        </Button>

        {statusButtons?.map((btn) => (
          <Button
            key={btn.value}
            name="status"
            value={btn.value}
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

export default CreateEditProjectPage;
