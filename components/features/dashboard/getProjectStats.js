export default function getProjectStats(projects) {
  const recent = projects.slice(0, 3);
  const total = projects.length;
  const published = projects.filter((p) => p.status === "Published").length;
  const drafted = projects.filter((p) => p.status === "Draft").length;
  const archived = projects.filter((p) => p.status === "Archived").length;

  return {
    recent,
    total,
    published,
    drafted,
    archived,
  };
}
