import Link from "next/link";

import ActivityTimeline from "@/components/features/activity/ActivityTimeline";
import EditIcon from "@/components/icons/ui/EditIcon";
import Grid from "@/components/common/grid/Grid";
import SmallCard from "@/components/common/cards/SmallCard";
import Statistic from "@/components/common/cards/StatisticCard";
import Title from "@/components/common/text/Title";

import getProjectStats from "@/components/features/dashboard/getProjectStats";

import { getProjectById } from "@/lib/getProjectsData";

// force page to render data dynamically since in production, data wasn't dynamically being rendered
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard",
};

async function DashboardPage() {
  const projects = await getProjectById();

  const { recentProjects, total, published, drafted, archived } =
    getProjectStats(projects);

  return (
    <div className="flex flex-col gap-8">
      {/* title */}
      <Title
        font="font-heading"
        heading="Hello Kaito,"
        subHeading="Let's create a beautiful portfolio."
      />

      {/* recent projects */}
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
            <Statistic title="Total Projects" count={total} />
            <Statistic title="Published Projects" count={published} />
            <Statistic title="Drafts" count={drafted} />
            <Statistic title="Archived" count={archived} />
          </div>
        </div>

        {/* recent activity */}
        <div className="flex flex-col gap-4 col-span-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Recent Activity</h2>
            <Link
              href="/activity"
              className="link link-hover cursor-pointer text-sm"
            >
              View All
            </Link>
          </div>

          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
