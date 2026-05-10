function Filters({ tabs, activeTab, onTabChange }) {
  return (
    <div className="join">
      {tabs.map((tab) => (
        // className has the logic for displaying different colors depending on the active tab
        <button
          className={`join-item btn btn-sm font-medium ${tab.title === activeTab && tab.style}`}
          key={tab.title}
          onClick={() => onTabChange(tab.title)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}

export default Filters;
