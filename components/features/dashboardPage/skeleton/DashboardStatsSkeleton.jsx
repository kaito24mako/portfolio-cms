function DashboardStatsSkeleton() {
  return (
    <div className="flex flex-col gap-2 col-span-3">
      <h2 className="text-lg font-medium">Statistics</h2>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="skeleton flex items-center justify-center bg-base-300 shadow-sm rounded w-[90%] h-20 py-6 px-4 pr-8"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStatsSkeleton;
