import StatisticCard from "@/components/common/card/StatisticCard";
import getProjectStats from "../../../../utils/getProjectStats";

async function DashboardStatsSection({ projectsPromise }) {
  const projects = await projectsPromise;
  const { total, published, drafted, archived } = getProjectStats(projects);

  const statistics = [
    { title: "Total Projects", count: total },
    { title: "Published", count: published },
    { title: "Drafts", count: drafted },
    { title: "Archived", count: archived },
  ];

  return (
    <div className="flex flex-col gap-2 col-span-3">
      <h2 className="text-lg font-medium">Statistics</h2>
      <div className="flex flex-col gap-4">
        {statistics.map((s) => (
          <StatisticCard title={s.title} count={s.count} key={s.title} />
        ))}
      </div>
    </div>
  );
}

export default DashboardStatsSection;
