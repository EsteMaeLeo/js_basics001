import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.NODE_ENV);

let db;

if ((process.env.NODE_ENV = "production")) {
  console.log('p')
  db = new Sequelize(process.env.DB_URL, {
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorsAliases: false,
  });
} else {
    db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: process.env.DB_HOST,
      port: "3306",
      dialect: "mysql",
      define: {
        timestamps: false,
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      operatorsAliases: false,
    }
  );
}

export default db;
