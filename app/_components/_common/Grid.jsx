function Grid({ children, className = "" }) {
  return <div className={`grid ${className} gap-4`}>{children}</div>;
}

export default Grid;
