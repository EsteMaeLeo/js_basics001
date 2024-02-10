"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

console.log(process.env.NODE_ENV);
var db;

if (process.env.NODE_ENV = "production") {
  console.log('p');
  db = new _sequelize.Sequelize(process.env.DB_URL, {
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });
} else {
  db = new _sequelize.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    port: "3306",
    dialect: "mysql",
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });
}

var _default = db;
exports["default"] = _default;