import express from "express";
import {
  pageInit,
  pageAbout,
  pageTravels,
  pageReviews,
  pageDetailTravel,
} from "../controllers/pageControler.js";

import {saveReviews} from "../controllers/reviewsController.js"

const router = express.Router();

//res: express response and req is what user sent
router.get("/", pageInit);

router.get("/about", pageAbout);

router.get("/travels", pageTravels);
router.get("/travels/:slug", pageDetailTravel);

router.get("/reviews", pageReviews);
router.post("/reviews", saveReviews);

export default router;
