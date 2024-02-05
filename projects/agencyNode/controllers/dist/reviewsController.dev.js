"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveReviews = void 0;

var _reviews2 = require("../models/reviews.js");

var saveReviews = function saveReviews(req, res) {
  var _req$body, name, email, message, errorLog, _reviews;

  return regeneratorRuntime.async(function saveReviews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //validate
          _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;
          errorLog = [];

          if (name.trim() === "") {
            errorLog.push({
              message: "Name is empty"
            });
          }

          if (email.trim() === "") {
            errorLog.push({
              message: "email is empty"
            });
          }

          if (message.trim() === "") {
            errorLog.push({
              message: "message is empty"
            });
          }

          if (!(errorLog.length > 0)) {
            _context.next = 12;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(_reviews.findAll());

        case 8:
          _reviews = _context.sent;
          res.render("reviews", {
            page: "Reviews",
            errorLog: errorLog,
            name: name,
            email: email,
            message: message,
            reviews: _reviews
          });
          _context.next = 21;
          break;

        case 12:
          _context.prev = 12;
          _context.next = 15;
          return regeneratorRuntime.awrap(_reviews2.reviews.create({
            name: name,
            email: email,
            message: message
          }));

        case 15:
          res.redirect("/reviews");
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](12);
          console.log(_context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[12, 18]]);
};

exports.saveReviews = saveReviews;