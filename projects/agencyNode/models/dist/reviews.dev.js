"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reviews = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../config/db.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var reviews = _db["default"].define(process.env.DB_REV, {
  name: {
    type: _sequelize.Sequelize.STRING
  },
  email: {
    type: _sequelize.Sequelize.STRING
  },
  message: {
    type: _sequelize.Sequelize.STRING
  }
});

exports.reviews = reviews;