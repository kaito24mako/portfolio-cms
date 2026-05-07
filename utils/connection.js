import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  // change to postgres for supabase
  // tells sequelize to connect to Postgres
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl:
      process.env.NODE_ENV === "production"
        ? { require: true, rejectUnauthorized: false }
        : false,
  },
});

export default sequelize;
