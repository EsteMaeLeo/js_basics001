"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageDetailTravel = exports.pageReviews = exports.pageTravels = exports.pageAbout = exports.pageInit = void 0;

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
}; //show page by slug


exports.pageReviews = pageReviews;

var pageDetailTravel = function pageDetailTravel(req, res) {
  var slug, travels;
  return regeneratorRuntime.async(function pageDetailTravel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          slug = req.params.slug;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_Travels.Travel.findOne({
            where: {
              slug: slug
            }
          }));

        case 4:
          travels = _context2.sent;
          res.render("travel", {
            page: "Travel Information",
            travels: travels
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log(error);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.pageDetailTravel = pageDetailTravel;