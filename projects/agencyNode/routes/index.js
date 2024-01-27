import express from "express";
import { pageInit } from "../controllers/pageControler.js";

const router = express.Router();

//res: express response and req is what user sent
router.get("/", pageInit);

router.get("/about", (req, res) => {
  const travelGermany = "Travel to Germany";
  res.render("aboutus", {
    page: "About",
  });
});

router.get("/travels", (req, res) => {
  res.render("travels", {
    page: "Travels",
  });
});

router.get("/reviews", (req, res) => {
  res.render("reviews", {
    page: "Reviews",
  });
});

export default router;
