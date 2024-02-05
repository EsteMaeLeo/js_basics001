"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveReviews = void 0;

var _reviews = require("../models/reviews.js");

var saveReviews = function saveReviews(req, res) {
  var _req$body, name, email, message, errorLog;

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
            _context.next = 9;
            break;
          }

          res.render("reviews", {
            page: "Reviews",
            errorLog: errorLog,
            name: name,
            email: email,
            message: message
          });
          _context.next = 18;
          break;

        case 9:
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap(_reviews.reviews.create({
            name: name,
            email: email,
            message: message
          }));

        case 12:
          res.redirect("/reviews");
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](9);
          console.log(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 15]]);
};

exports.saveReviews = saveReviews;