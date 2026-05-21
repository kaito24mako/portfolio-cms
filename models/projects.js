import { DataTypes } from "sequelize";
import sequelize from "@/utils/connection";

const Project = sequelize.define("Project", {
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
    allowNull: false,
    values: ["Published", "Draft", "Archived"],
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  updatedAt: {
    type: DataTypes.DATE,
    // * Used AI to help format the date
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

      const formattedDate = date.toLocaleDateString("en-US", dateOptions);

      const formattedTime = date
        .toLocaleTimeString("en-US", {
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

// ! JOI validation needed?

export default Project;
