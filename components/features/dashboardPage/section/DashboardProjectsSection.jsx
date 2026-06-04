import SmallCard from "@/components/common/card/SmallCard";
import Grid from "@/components/common/grid/Grid";
import EditIcon from "@/components/icons/ui/EditIcon";
import getProjectStats from "@/utils/projects/getProjectStats";

async function DashboardProjectsSection({ projectsPromise }) {
  const projects = await projectsPromise;
  const { recentProjects } = getProjectStats(projects);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Recent Projects</h2>
        {/* <span className="text-sm">
          Last updated:{" "}
          {projects[0] ? projects[0].updatedAt : "never"}
        </span> */}
      </div>

      {projects.length === 0 ? (
        <p className="card card-sm md:card-md 2xl:card-lg bg-base-200 shadow-md h-50 md:h-60 flex items-center justify-center w-full lg:w-[30%]">
          None
        </p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {recentProjects?.map((p) => (
            <SmallCard
              key={p.id}
              title={p.title}
              description={`Last updated: ${p.updatedAt}`}
              status={p.status}
              image={p.image}
              alt={`${p.title} project`}
              btnText="Edit"
              btnIcon={EditIcon}
              btnLink={`/projects/${p.id}/edit`}
            />
          ))}
        </Grid>
      )}
    </div>
  );
}

export default DashboardProjectsSection;
