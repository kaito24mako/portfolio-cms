function CardGrid({ children, className = "" }) {
  return <div className={`grid ${className} gap-4`}>{children}</div>;
}

export default CardGrid;
