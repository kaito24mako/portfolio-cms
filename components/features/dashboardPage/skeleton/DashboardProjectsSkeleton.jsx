import Spinner from "@/components/common/loader/Spinner";

function DashboardProjectsSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Recent Projects</h2>
        <span className="text-sm">Loading latest updates...</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="card card-sm md:card-md 2xl:card-lg bg-base-200 shadow-md h-50 md:h-60 flex items-center justify-center"
          >
            <Spinner />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardProjectsSkeleton;
