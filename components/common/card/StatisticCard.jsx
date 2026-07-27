function StatisticCard({ title, count = 0 }) {
  return (
    <div className="flex items-center gap-2 bg-base-300 shadow-sm rounded py-3 px-4 pr-8 col-span-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-bar-chart-2 text-accent"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
      <div>
        <p className="text-sm sm:text-lg">{title}</p>
        <span className="text-base md:text-lg font-semibold">{count}</span>
      </div>
    </div>
  );
}

export default StatisticCard;
