# How the database connection works:

1. utils/connection.js creates Sequelize with Postgres, which is connected to the DATABASE_URL from Supabase

2. the route.js files call connectDb() then run Sequelize model methods (GET, POST, PUT, DELETE) that operate on the database that Sequelize is connected to
