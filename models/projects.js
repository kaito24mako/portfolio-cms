import { DataTypes } from "sequelize";
import sequelize from "@/utils/connection";

const Project = sequelize.define("Project", {
  // ? how to create foreign key of userId
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  siteUrl: {
    type: DataTypes.STRING,
  },
  githubUrl: {
    type: DataTypes.STRING,
  },
  // ? should these be in 'status' instead
  published: {
    type: DataTypes.BOOLEAN,
  },
  draft: {
    type: DataTypes.BOOLEAN,
  },
  archived: {
    type: DataTypes.BOOLEAN,
  },
});

export default Project;
