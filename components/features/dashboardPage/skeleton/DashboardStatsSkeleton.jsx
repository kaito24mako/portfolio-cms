function DashboardStatsSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-medium">Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="skeleton flex items-center gap-2 bg-base-300 shadow-sm rounded h-22 py-3 px-4 pr-8 col-span-1"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStatsSkeleton;
