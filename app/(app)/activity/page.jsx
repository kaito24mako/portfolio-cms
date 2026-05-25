import Title from "@/components/common/text/Title";

function ActivityPage() {
  return (
    <div className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading="Activity"
        subHeading="Look back on the work you have done"
      />

      <div className="flex flex-col gap-2">
        <p>This page is a work in progress...</p>
      </div>
    </div>
  );
}

export default ActivityPage;
