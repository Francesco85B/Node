import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "favouritesDB",
  username: "root",
  password: "Cellost110816",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
