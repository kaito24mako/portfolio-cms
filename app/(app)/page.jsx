import Grid from "../_components/_common/Grid";
import SmallCard from "../_components/_common/_card/SmallCard";
import Statistic from "../_components/_common/Statistic";
import Title from "../_components/_common/Title";
import ActivityTimeline from "../_components/_features/_activity/ActivityTimeline";
import EditIcon from "../_components/_images/_icons/EditIcon";

import { getProjectsData } from "@/lib/projects";

export const metadata = {
  title: "Dashboard",
};

async function DashboardPage() {
  const projects = await getProjectsData();
  const recentProjects = projects.slice(0, 3);

  // logic for statistic cards
  const totalProjects = projects.length;
  const publishedProjects = projects.filter(
    (p) => p.status === "Published",
  ).length;
  const draftedProjects = projects.filter((p) => p.status === "Draft").length;
  const archivedProjects = projects.filter(
    (p) => p.status === "Archived",
  ).length;

  return (
    <div className="flex flex-col gap-8">
      {/* title */}
      <Title
        font="font-heading"
        heading="Hello Kaito,"
        subHeading="Let's create a beautiful portfolio."
      />

      {/* project cards */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Recent Projects</h2>
          <span className="text-sm">Last updated: 2 hours ago</span>
        </div>
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {recentProjects?.map((p) => (
            <SmallCard
              key={p.id}
              title={p.title}
              description={`Last edited: ${p.updatedAt}`}
              status={p.status}
              image={p.image}
              alt={`${p.title} project`}
              btnText="Edit"
              btnIcon={EditIcon}
              btnLink={`/projects/${p.id}/edit`}
            />
          ))}
        </Grid>
      </div>

      <div className="grid grid-cols-7">
        {/* statistics */}
        <div className="flex flex-col gap-2 col-span-3">
          <h2 className="text-lg font-medium">Statistics</h2>
          <div className="flex flex-col gap-4">
            <Statistic title="Total Projects" count={totalProjects} />
            <Statistic title="Published Projects" count={publishedProjects} />
            <Statistic title="Drafts" count={draftedProjects} />
            <Statistic title="Archived" count={archivedProjects} />
          </div>
        </div>

        {/* recent activity */}
        <div className="flex flex-col gap-4 col-span-4">
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
