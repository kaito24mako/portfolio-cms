import Title from "@/components/common/text/Title";
import DashboardProjectsSection from "@/components/features/dashboardPage/DashboardProjectsSection";
import DashboardStatsSection from "@/components/features/dashboardPage/DashboardStatsSection";
import DashboardActivitySection from "@/components/features/dashboardPage/DashboardActivitySection";

// force page to render data dynamically since in production, data wasn't dynamically being rendered
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard",
};

function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <Title
        font="font-heading"
        heading="Hello Kaito,"
        subHeading="Let's create a beautiful portfolio."
      />
      <DashboardProjectsSection />

      <div className="grid grid-cols-7">
        <DashboardStatsSection />

        <div className="flex flex-col gap-4 col-span-4">
          <DashboardActivitySection />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
