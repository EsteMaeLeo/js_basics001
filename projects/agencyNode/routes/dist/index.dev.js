"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageControler = require("../controllers/pageControler.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); //res: express response and req is what user sent


router.get("/", _pageControler.pageInit);
router.get("/about", function (req, res) {
  var travelGermany = "Travel to Germany";
  res.render("aboutus", {
    page: "About"
  });
});
router.get("/travels", function (req, res) {
  res.render("travels", {
    page: "Travels"
  });
});
router.get("/reviews", function (req, res) {
  res.render("reviews", {
    page: "Reviews"
  });
});
var _default = router;
exports["default"] = _default;