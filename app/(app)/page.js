import CardGrid from "../_components/_common/Grid";
import SmallCard from "../_components/_common/_card/SmallCard";
import Statistic from "../_components/_common/Statistic";
import Title from "../_components/_common/Title";
import ActivityTimeline from "../_components/_features/_activity/ActivityTimeline";

export const metadata = {
  title: "Dashboard",
};

function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* title */}
      <Title
        font="font-heading"
        heading="Hello Kaito,"
        subHeading="Let's create a beautiful portfolio."
      />

      {/* projects cards */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Recent Projects</h2>
          <span className="text-sm">Last updated: 2 hours ago</span>
        </div>
        <CardGrid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <SmallCard
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
          <SmallCard
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
          <SmallCard
            imgAlt="Book Library project"
            title="Book Library"
            description="Description of the project"
            btnText="Edit Project"
          />
        </CardGrid>
      </div>

      <div className="grid grid-cols-7">
        {/* statistics */}
        <div className="flex flex-col gap-2 col-span-3">
          <h2 className="text-lg font-medium">Statistics</h2>
          <div className="flex flex-col gap-3">
            <Statistic title="Total Projects" count={6} />
            <Statistic title="Published Projects" count={3} />
            <Statistic title="Unique Tags" count={5} />
          </div>
        </div>

        {/* recent activity */}
        <div className="flex flex-col gap-2 col-span-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Recent Activity</h2>
            <button className="cursor-pointer text-sm">View All</button>
          </div>

          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
