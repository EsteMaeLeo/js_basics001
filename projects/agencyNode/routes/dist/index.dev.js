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
router.get("/about", _pageControler.pageAbout);
router.get("/travels", _pageControler.pageTravels);
router.get("/travels/:travel", _pageControler.pageDetailTravel);
router.get("/reviews", _pageControler.pageReviews);
var _default = router;
exports["default"] = _default;