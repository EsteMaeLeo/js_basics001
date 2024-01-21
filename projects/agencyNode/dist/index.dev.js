"use strict";

var _express = _interopRequireDefault(require("express"));

var _chalk = _interopRequireDefault(require("chalk"));

var _index = _interopRequireDefault(require("./routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 5001; //enable pub

app.set("view engine", "pug"); //get year

app.use(function (req, res, next) {
  var actualYear = new Date();
  res.locals.actualYear = actualYear.getFullYear();
  res.locals.nameSite = "Travel Agency";
  return next();
}); //define public folder
//app.use(express.static("public"));
//adding routes

app.use("/", _index["default"]);
app.listen(port, function () {
  console.log(_chalk["default"].bgBlue("Server is runnig on port ".concat(port)));
});