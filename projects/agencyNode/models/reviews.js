import { Sequelize } from "sequelize";
import db from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

export const reviews = db.define(process.env.DB_REV, {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  }
});
