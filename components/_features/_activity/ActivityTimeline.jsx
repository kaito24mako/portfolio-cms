import Badge from "../../_common/Badge";

const activityPlaceholders = [
  {
    update: "Pokemon App was saved as a draft.",
    time: "2 hours ago",
  },
  {
    update: "Tic Tac Toe was published.",
    time: "3 days ago",
  },
  {
    update: "Tags changed for Tic Tac Toe.",
    time: "4 days ago",
  },
  {
    update: "Book Library was saved as unpublished.",
    time: "1 week ago",
  },
];

function ActivityTimeline() {
  return (
    <ul className="w-full flex flex-col gap-6">
      {activityPlaceholders.map((a) => (
        <li
          key={a.update}
          className="rounded shadow-sm p-4 bg-base-200 dark:bg-base-300"
        >
          <div className="text-xs sm:text-base relative">
            <span className="absolute -top-7 -left-7">
              <Badge icon={true} text="2 hours ago" className="bg-base-100" />
            </span>
            <span className="pt-5">{a.update}</span>
          </div>
          {a.connectorBottom && <hr />}
        </li>
      ))}
    </ul>
  );
}

export default ActivityTimeline;
