import Title from "@/components/common/text/Title";

export const metadata = {
  title: "Tags",
};

function TagsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading="Tags"
        subHeading="Track the usage of certain technologies in your projects"
      />

      <div className="flex flex-col gap-2">
        <p>This page is a work in progress...</p>
      </div>
    </div>
  );
}

export default TagsPage;
