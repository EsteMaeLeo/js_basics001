"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageReviews = exports.pageTravels = exports.pageAbout = exports.pageInit = void 0;

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
  res.render("travels", {
    page: "Travels"
  });
};

exports.pageTravels = pageTravels;

var pageReviews = function pageReviews(req, res) {
  res.render("reviews", {
    page: "Reviews"
  });
};

exports.pageReviews = pageReviews;