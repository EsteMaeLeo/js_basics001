"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Travel = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../config/db.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var Travel = _db["default"].define(process.env.DB_TABLE, {
  titulo: {
    type: _sequelize.Sequelize.STRING
  },
  precio: {
    type: _sequelize.Sequelize.STRING
  },
  fecha_ida: {
    type: _sequelize.Sequelize.DATE
  },
  fecha_vuelta: {
    type: _sequelize.Sequelize.DATE
  },
  imagen: {
    type: _sequelize.Sequelize.STRING
  },
  descripcion: {
    type: _sequelize.Sequelize.STRING
  },
  disponibles: {
    type: _sequelize.Sequelize.STRING
  },
  slug: {
    type: _sequelize.Sequelize.STRING
  }
});

exports.Travel = Travel;