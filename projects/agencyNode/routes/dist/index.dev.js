"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageControler = require("../controllers/pageControler.js");

var _reviewsController = require("../controllers/reviewsController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); //res: express response and req is what user sent


router.get("/", _pageControler.pageInit);
router.get("/about", _pageControler.pageAbout);
router.get("/travels", _pageControler.pageTravels);
router.get("/travels/:slug", _pageControler.pageDetailTravel);
router.get("/reviews", _pageControler.pageReviews);
router.post("/reviews", _reviewsController.saveReviews);
var _default = router;
exports["default"] = _default;