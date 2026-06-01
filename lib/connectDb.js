import sequelize from "@/utils/connection";

// though its an import, it initialises models/index.js to authorise and sync the database
// only needed when index.js establishes entity relationships
// import "@/models";

export async function connectDb() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
  } catch (err) {
    console.error("Unable to connect to the database", err);
    throw err;
  }
}
