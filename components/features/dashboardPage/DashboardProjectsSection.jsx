import SmallCard from "@/components/common/cards/SmallCard";
import Grid from "@/components/common/grid/Grid";
import EditIcon from "@/components/icons/ui/EditIcon";
import getProjectStats from "./getProjectStats";
import LoadingSkeleton from "@/components/common/loader/LoadingSkeleton";

// to attach loaders for only the slow data, nested components
import { Suspense } from "react";
import { getProjectsData } from "@/lib/getProjectsData";

async function DashboardProjectsSection() {
  const projects = await getProjectsData();
  const { recentProjects } = getProjectStats(projects);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Recent Projects</h2>
        <span className="text-sm">Last updated: 2 hours ago</span>
      </div>

      <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recentProjects?.map((p) => (
          <Suspense fallback={<LoadingSkeleton />} key={p.id}>
            <SmallCard
              title={p.title}
              description={`Last edited: ${p.updatedAt}`}
              status={p.status}
              image={p.image}
              alt={`${p.title} project`}
              btnText="Edit"
              btnIcon={EditIcon}
              btnLink={`/projects/${p.id}/edit`}
            />
          </Suspense>
        ))}
      </Grid>
    </div>
  );
}

export default DashboardProjectsSection;
