import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Travel = db.define("travel_agency_v1", {
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
  image: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  disponible: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
});
