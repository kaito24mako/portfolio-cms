//! foreign key setup

import sequelize from "@/utils/connection";
import User from "@/models/users";
import Project from "@/models/projects";

Project.hasMany(User, {
  //? connects User's 'projectId' to Project's 'id'
  foreignKey: "projectId",

  // ? if the club instance is deleted, user's 'clubId' becomes null
  onDelete: "SET NULL",

  // ? if the 'clubId' changes, update user's 'clubId'
  onUpdate: "CASCADE",
});

User.belongsTo(Project, {
  foreignKey: "projectId",
});

export { sequelize, User, Project };
