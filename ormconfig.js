const { SnakeNamingStrategy } = require("typeorm-naming-strategies");
const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE, NODE_ENV } = process.env;

module.exports = {
  type: "postgres",
  database: DATABASE,
  host: DATABASE_HOST,
  password: DATABASE_PASSWORD,
  port: 5432,
  username: DATABASE_USER,
  logging: true,
  cli: {
    migrationsDir: "src/database/migrations",
  },
  entities: ["src/models/*.{js,ts}"],
  migrations: ["src/database/migrations/*.{js,ts}"],
  namingStrategy: new SnakeNamingStrategy(),
  ssl: false,
};
