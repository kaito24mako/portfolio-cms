function FilterTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="join">
      {tabs.map((tab) => (
        <button
          // logic for displaying different colors depending on the active tab
          className={`join-item btn btn-sm font-medium ${tab.title === activeTab && tab.style}`}
          key={tab.title}
          onClick={() => onTabChange(tab.title)}
          aria-label="Button to filter the projects by status"
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
