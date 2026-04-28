import CardGrid from "../_components/_ui/CardGrid";
import CardSmall from "../_components/_ui/CardSmall";
import Statistic from "../_components/_ui/Statistic";
import Title from "../_components/_ui/Title";
import Card from "daisyui/components/card";

export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="px-4 lg:px-10 xl:px-16 2xl:px-36 flex flex-col gap-8">
      {/* title */}
      <Title
        heading="Hello Kaito,"
        subHeading="Let's create a beautiful portfolio."
      />

      {/* projects cards */}
      <div className="flex flex-col gap-2">
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

      <div className="grid grid-cols-5">
        {/* statistics */}
        <div className="flex flex-col gap-2 col-span-2">
          <h2 className="text-lg">Statistics</h2>
          <Statistic />
          <Statistic />
          <Statistic />
        </div>

        {/* recent activity */}
        <div className="flex flex-col gap-2 col-span-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg">Recent Activity</h2>
            <button className="cursor-pointer text-sm">View All</button>
          </div>
          <div className="border border-base-300 rounded">activity</div>
        </div>
      </div>
    </div>
  );
}
