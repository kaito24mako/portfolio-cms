import sequelize from "@/utils/connection";
import User from "@/models/users";
import Project from "@/models/projects";

// * 1 User | M Project
Project.hasMany(User, {
  foreignKey: "projectId",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

User.belongsTo(Project, {
  foreignKey: "projectId",
});

export { sequelize, User, Project };
