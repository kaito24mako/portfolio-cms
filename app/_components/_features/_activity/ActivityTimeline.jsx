import Badge from "../../_common/Badge";

const activityPlaceholders = [
  {
    update: "Pokemon App was saved as a draft.",
    time: "2 hours ago",
    connectorTop: false,
    connectorBottom: true,
  },
  {
    update: "Tic Tac Toe was published.",
    time: "3 days ago",
    connectorTop: true,
    connectorBottom: true,
  },
  {
    update: "Tags changed for Tic Tac Toe.",
    time: "4 days ago",
    connectorTop: true,
    connectorBottom: true,
  },
  {
    update: "Book Library was saved as unpublished.",
    time: "1 week ago",
    connectorTop: true,
    connectorBottom: false,
  },
];

function ActivityTimeline() {
  return (
    <ul className="timeline timeline-compact timeline-vertical w-full">
      {activityPlaceholders.map((a) => (
        <li key={a.update}>
          {a.connectorTop && <hr />}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-10 w-10"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box text-xs sm:text-base relative mb-5 pt-5 w-full">
            <span className="absolute -top-2 -left-2">
              <Badge icon={true} text={"2 hours ago"} />
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
