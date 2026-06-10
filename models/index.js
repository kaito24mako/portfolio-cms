import sequelize from "@/utils/connection";
import User from "@/models/users";
import Project from "@/models/projects";

// * 1 User | M Project
User.hasMany(Project, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Project.belongsTo(User, {
  foreignKey: "userId",
});

export { sequelize, User, Project };
