"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageReviews = exports.pageTravels = exports.pageAbout = exports.pageInit = void 0;

var _Travels = require("../models/Travels.js");

var pageInit = function pageInit(req, res) {
  res.render("home", {
    page: "Home"
  });
};

exports.pageInit = pageInit;

var pageAbout = function pageAbout(req, res) {
  var travelGermany = "Travel to Germany";
  res.render("aboutus", {
    page: "About"
  });
};

exports.pageAbout = pageAbout;

var pageTravels = function pageTravels(req, res) {
  var travel;
  return regeneratorRuntime.async(function pageTravels$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_Travels.Travel.findAll());

        case 2:
          travel = _context.sent;
          console.log(travel);
          res.render("travels", {
            page: "Travels",
            travel: travel
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.pageTravels = pageTravels;

var pageReviews = function pageReviews(req, res) {
  res.render("reviews", {
    page: "Reviews"
  });
};

exports.pageReviews = pageReviews;