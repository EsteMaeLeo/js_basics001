"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageInit = void 0;

var pageInit = function pageInit(req, res) {
  res.render("home", {
    page: "Home"
  });
};

exports.pageInit = pageInit;