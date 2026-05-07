import sequelize from "@/utils/connection";
// though its an import, it initialises models/index.js to authorise and sync the database
import "@/models";

export async function connectDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established");

    await sequelize.sync();
    console.log("Database and tables created");
  } catch (err) {
    console.error("Unable to connect to the database", err);
  }
}
