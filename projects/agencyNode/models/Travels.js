import { Sequelize } from "sequelize";
import db from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

export const Travel = db.define(process.env.DB_TABLE, {
  titulo: {
    type: Sequelize.STRING,
  },
  precio: {
    type: Sequelize.STRING,
  },
  fecha_ida: {
    type: Sequelize.DATE,
  },
  fecha_vuelta: {
    type: Sequelize.DATE,
  },
  imagen: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  disponibles: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
});
