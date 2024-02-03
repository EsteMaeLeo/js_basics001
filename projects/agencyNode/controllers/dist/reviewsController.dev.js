"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveReviews = void 0;

var saveReviews = function saveReviews(req, res) {
  //validate
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      message = _req$body.message;
  var errorLog = [];

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

  if (errorLog.length > 0) {
    res.render('reviews', {
      page: 'Reviews',
      errorLog: errorLog
    });
  }
};

exports.saveReviews = saveReviews;