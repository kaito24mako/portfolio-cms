import Link from "next/link";
import ActivityTimeline from "../../activityPage/ActivityTimeline";

function DashboardActivitySection() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">
          Recent Activity (in development...)
        </h2>
        <Link
          href="/activity"
          className="link link-hover cursor-pointer text-sm"
        >
          View All
        </Link>
      </div>

      <ActivityTimeline />
    </>
  );
}

export default DashboardActivitySection;
