function Filters({ tabs, activeTab, onTabChange }) {
  return (
    <div className="join">
      {tabs.map((tab) => (
        // className has the logic for displaying different colors depending on the active tab
        <button
          className={`join-item btn btn-sm font-medium ${tab === activeTab ? (tab === "All" ? "btn-active" : tab === "Published" ? "btn-success" : tab === "Draft" ? "btn-warning" : tab === "Archived" ? "btn-info" : "") : ""}`}
          key={tab}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Filters;
