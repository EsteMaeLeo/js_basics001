import express from "express";

const router = express.Router();

//res: express response and req is what user sent
router.get("/", (req, res) => {
  res.render("home", {
    page: "Home",
  });
  /* res.json({
          id:"001"
      })*/
});

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
