import sequelize from "@/utils/connection";
import { DataTypes } from "sequelize";

const Project = sequelize.define("Project", {
  // userId: {
  //   type: DataTypes.UUID,
  //   allowNull: false,
  //   references: {
  //     model: "Users",
  //     key: "id",
  //   },
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
  // },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  siteUrl: {
    type: DataTypes.STRING,
  },
  githubUrl: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ["Published", "Draft", "Archived"],
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  updatedAt: {
    type: DataTypes.DATE,
    get() {
      const rawValue = this.getDataValue("updatedAt");
      if (!rawValue) return null;

      const date = new Date(rawValue);
      const currentYear = new Date().getFullYear();

      const dateOptions = {
        month: "short",
        day: "numeric",
      };

      // only show year if it's not the current year
      if (date.getFullYear() !== currentYear) {
        dateOptions.year = "numeric";
      }

      const formattedDate = date.toLocaleDateString(undefined, dateOptions);

      const formattedTime = date
        .toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" ", "")
        .toLowerCase();

      return `${formattedDate}, ${formattedTime}`;
    },
  },
});

export default Project;
