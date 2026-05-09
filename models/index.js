import sequelize from "@/utils/connection";
import User from "@/models/users";
import Project from "@/models/projects";

Project.hasMany(User, {
  //? connects User's 'projectId' to Project's 'id'
  foreignKey: "projectId",

  // ? if the project instance is deleted, user's 'projectId' becomes null
  onDelete: "SET NULL",

  // ? if the 'projectId' changes, update user's 'projectId'
  onUpdate: "CASCADE",
});

User.belongsTo(Project, {
  foreignKey: "projectId",
});

export { sequelize, User, Project };
