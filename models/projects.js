import { DataTypes } from "sequelize";
import sequelize from "@/utils/connection";

const Project = sequelize.define("Project", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  siteUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  githubUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  status: {
    type: DataTypes.ENUM,
    values: ["Published", "Draft", "Archived"],
  },
  updatedAt: {
    type: DataTypes.DATE,
    get() {
      const rawValue = this.getDataValue("updatedAt");
      if (!rawValue) return null;
      const date = new Date(rawValue);

      return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`;
    },
  },
});

export default Project;
