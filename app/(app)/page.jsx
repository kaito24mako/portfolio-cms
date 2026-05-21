import Title from "@/components/common/text/Title";
import DashboardProjectsSection from "@/components/features/dashboardPage/section/DashboardProjectsSection";
import DashboardStatsSection from "@/components/features/dashboardPage/section/DashboardStatsSection";
import DashboardActivitySection from "@/components/features/dashboardPage/section/DashboardActivitySection";
import DashboardProjectsSkeleton from "@/components/features/dashboardPage/skeleton/DashboardProjectsSkeleton";
import DashboardStatsSkeleton from "@/components/features/dashboardPage/skeleton/DashboardStatsSkeleton";

// to attach Spinners for only the slow data, nested components
import { Suspense } from "react";

import { getProjectsData } from "@/lib/getProjectsData";

// force page to render data dynamically since in production, data wasn't dynamically being rendered
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard",
};

function DashboardPage() {
  // since the same projects data is shared between nested components, pass it as props
  const projectsPromise = getProjectsData();

  return (
    <div className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading="Hello Kaito,"
        subHeading="Let's create a beautiful portfolio."
      />

      <Suspense fallback={<DashboardProjectsSkeleton />}>
        <DashboardProjectsSection projectsPromise={projectsPromise} />
      </Suspense>

      <div className="grid grid-cols-7">
        <Suspense fallback={<DashboardStatsSkeleton />}>
          <DashboardStatsSection projectsPromise={projectsPromise} />
        </Suspense>

        <div className="flex flex-col gap-4 col-span-4">
          <DashboardActivitySection />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
