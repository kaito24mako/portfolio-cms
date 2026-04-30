function CardGrid({ children }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {children}
    </div>
  );
}

export default CardGrid;
