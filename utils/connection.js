import { Sequelize } from "sequelize";
import pg from "pg";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  // tells sequelize to connect to Postgres (for Supabase)
  dialect: "postgres",
  dialectModule: pg,
  logging: false,
  dialectOptions: {
    ssl:
      process.env.NODE_ENV === "production"
        ? { require: true, rejectUnauthorized: false }
        : false,
  },
});

export default sequelize;
