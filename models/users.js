import { DataTypes } from "sequelize";
import sequelize from "@/utils/connection";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    primaryKey: true,
  },
  projectId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: "Projects",
      key: "id",
    },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "Must be a valid email address" },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [7, 30],
        msg: "Password must be between 7 and 30 characters",
      },
    },
  },
});

export default User;
