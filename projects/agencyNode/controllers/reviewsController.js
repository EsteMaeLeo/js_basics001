import { reviews } from "../models/reviews.js";

const saveReviews = async (req, res) => {
  //validate
  const { name, email, message } = req.body;

  const errorLog = [];
  if (name.trim() === "") {
    errorLog.push({ message: "Name is empty" });
  }
  if (email.trim() === "") {
    errorLog.push({ message: "email is empty" });
  }
  if (message.trim() === "") {
    errorLog.push({ message: "message is empty" });
  }
  if (errorLog.length > 0) {
    const reviews = await reviews.findAll();

    res.render("reviews", {
      page: "Reviews",
      errorLog,
      name,
      email,
      message,
      reviews
    });
  } else {
    try {
      await reviews.create({
        name,
        email,
        message,
      });
      res.redirect("/reviews");
    } catch (error) {
      console.log(error);
    }
  }
};

export { saveReviews };
