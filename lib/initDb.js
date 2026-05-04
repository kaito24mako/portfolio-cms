import sequelize from "@/utils/connection";

export async function initDb() {
  await sequelize.sync();
}
