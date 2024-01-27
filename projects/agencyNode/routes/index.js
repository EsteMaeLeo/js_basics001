import express from "express";
import {
  pageInit,
  pageAbout,
  pageTravels,
  pageReviews,
} from "../controllers/pageControler.js";

const router = express.Router();

//res: express response and req is what user sent
router.get("/", pageInit);

router.get("/about", pageAbout);

router.get("/travels", pageTravels);

router.get("/reviews", pageReviews);

export default router;
