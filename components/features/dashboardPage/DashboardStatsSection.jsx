import StatisticCard from "@/components/common/cards/StatisticCard";
import getProjectStats from "./getProjectStats";
import { getProjectsData } from "@/lib/getProjectsData";

async function DashboardStatsSection() {
  const projects = await getProjectsData();
  const { total, published, drafted, archived } = getProjectStats(projects);

  return (
    <div className="flex flex-col gap-2 col-span-3">
      <h2 className="text-lg font-medium">Statistics</h2>
      <div className="flex flex-col gap-4">
        <StatisticCard title="Total Projects" count={total} />
        <StatisticCard title="Published Projects" count={published} />
        <StatisticCard title="Drafts" count={drafted} />
        <StatisticCard title="Archived" count={archived} />
      </div>
    </div>
  );
}

export default DashboardStatsSection;
