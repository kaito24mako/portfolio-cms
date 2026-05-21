import StatisticCard from "@/components/common/cards/StatisticCard";
import getProjectStats from "./getProjectStats";

import { Suspense } from "react";
import { getProjectsData } from "@/lib/getProjectsData";
import LoadingSkeleton from "@/components/common/loader/LoadingSkeleton";

async function DashboardStatsSection() {
  const projects = await getProjectsData();
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
          <Suspense fallback={<LoadingSkeleton />} key={s.title}>
            <StatisticCard title={s.title} count={s.count} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default DashboardStatsSection;
