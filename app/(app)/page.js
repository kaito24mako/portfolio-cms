import CardGrid from "../_components/_ui/CardGrid";
import CardSmall from "../_components/_ui/CardSmall";
import Title from "../_components/_ui/Title";
import Card from "daisyui/components/card";

export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="px-1 flex flex-col gap-6">
      {/* title */}
      <Title
        heading="Hello Kaito,"
        subHeading="Let's create a beautiful portfolio."
      />

      {/* projects cards */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">Your Portfolio</h2>
          <span className="text-sm">Last updated: 2 hours ago</span>
        </div>
        <CardGrid>
          <CardSmall
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
          <CardSmall
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
          <CardSmall
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
          <CardSmall
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
          <CardSmall
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
          <CardSmall
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
        </CardGrid>
      </div>

      {/* statistics */}
    </div>
  );
}
