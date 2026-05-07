function Pagination({ tabs }) {
  return (
    <div className="join">
      {tabs.map((tab) => {
        return (
          <button className="join-item btn btn-sm font-medium" key={tab}>
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
