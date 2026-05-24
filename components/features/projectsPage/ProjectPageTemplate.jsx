"use client";

import GithubIcon from "@/components/icons/ui/GithubIcon";
import WebIcon from "@/components/icons/ui/WebIcon";
import Badge from "@/components/common/badge/Badge";
import Button from "@/components/common/button/Button";
import EditForm from "@/components/common/form/EditForm";
import Grid from "@/components/common/grid/Grid";
import Title from "@/components/common/text/Title";
import SubmitFormToast from "@/components/features/toast/SubmitFormToast";

import { useTags } from "../../../app/hooks/useTags";

function ProjectPageTemplate({
  errorMessage,
  handleFormAction,
  prevTags,
  ...props
}) {
  const { tags, tagsInput, setTagsInput, handleCreateTag, handleDeleteTag } =
    useTags(prevTags);

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
    <form action={handleFormAction} className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading={props.heading}
        subHeading={props.subHeading}
      />

      <SubmitFormToast />

      <Grid className="grid-cols-1 sm:grid-cols-5">
        {/* left form fields */}
        <div className="col-span-3 flex flex-col gap-3">
          {leftFormFields.map((field) => (
            <EditForm title={field.title} key={field.title}>
              {field.isTextArea ? (
                <textarea
                  className="w-full focus:outline-0"
                  rows={8}
                  name={field.name}
                  placeholder={field.placeholder}
                  defaultValue={field.defaultValue}
                />
              ) : (
                <input
                  type="text"
                  className="w-full focus:outline-0"
                  name={field.name}
                  placeholder={field.placeholder}
                  defaultValue={field.defaultValue}
                />
              )}
            </EditForm>
          ))}
        </div>

        {/* tags */}
        <div className="col-span-2 flex flex-col gap-3">
          <EditForm title="Tags">
            <div className="flex flex-col gap-4">
              <div className="flex">
                <input
                  className="w-full focus:outline-0"
                  type="text"
                  name="tech"
                  placeholder="Add a technology used..."
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                />
                <Button
                  onClick={(e) => {
                    handleCreateTag();
                    e.preventDefault();
                  }}
                  className="btn-sm"
                >
                  + Add
                </Button>
              </div>
              <div className="flex gap-1">
                {tags.map((tag, index) => (
                  <span key={index}>
                    {/* a hidden input is rendered to allow for NewProjectPage to get the formData of the tags */}
                    <input type="hidden" name="tags" value={tag} />
                    <div className="flex items-center">
                      <Badge text={tag} className="badge-soft badge-primary">
                        <button
                          className="cursor-pointer"
                          onClick={(e) => {
                            handleDeleteTag(index);
                            e.preventDefault();
                          }}
                        >
                          x
                        </button>
                      </Badge>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </EditForm>

          {/* live site url */}
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

          {/* github url */}
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

      {/* submit buttons */}
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
