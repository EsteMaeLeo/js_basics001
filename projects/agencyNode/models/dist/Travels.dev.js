"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Travel = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../config/db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Travel = _db["default"].define("travel_agency_v1", {
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
  image: {
    type: _sequelize.Sequelize.STRING
  },
  descripcion: {
    type: _sequelize.Sequelize.STRING
  },
  disponible: {
    type: _sequelize.Sequelize.STRING
  },
  slug: {
    type: _sequelize.Sequelize.STRING
  }
});

exports.Travel = Travel;