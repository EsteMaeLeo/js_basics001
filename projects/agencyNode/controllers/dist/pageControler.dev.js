"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageDetailTravel = exports.pageReviews = exports.pageTravels = exports.pageAbout = exports.pageInit = void 0;

var _Travels = require("../models/Travels.js");

var _reviews = require("../models/reviews.js");

var pageInit = function pageInit(req, res) {
  var promiseDB, resultado;
  return regeneratorRuntime.async(function pageInit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //get 3 travels from model
          promiseDB = [];
          promiseDB.push(_Travels.Travel.findAll({
            limit: 3
          }));
          promiseDB.push(_reviews.reviews.findAll({
            limit: 3
          }));
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(Promise.all(promiseDB));

        case 6:
          resultado = _context.sent;
          res.render("home", {
            page: "Home",
            clase: "home",
            travel: resultado[0],
            revPage: resultado[1]
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10]]);
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
  return regeneratorRuntime.async(function pageTravels$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_Travels.Travel.findAll());

        case 2:
          travel = _context2.sent;
          console.log(travel);
          res.render("travels", {
            page: "Travels",
            travel: travel
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.pageTravels = pageTravels;

var pageReviews = function pageReviews(req, res) {
  var revPage;
  return regeneratorRuntime.async(function pageReviews$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_reviews.reviews.findAll());

        case 3:
          revPage = _context3.sent;
          res.render("reviews", {
            page: "Reviews",
            revPage: revPage
          });
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //show page by slug


exports.pageReviews = pageReviews;

var pageDetailTravel = function pageDetailTravel(req, res) {
  var slug, travels;
  return regeneratorRuntime.async(function pageDetailTravel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          slug = req.params.slug;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_Travels.Travel.findOne({
            where: {
              slug: slug
            }
          }));

        case 4:
          travels = _context4.sent;
          res.render("travel", {
            page: "Travel Information",
            travels: travels
          });
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log(error);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.pageDetailTravel = pageDetailTravel;