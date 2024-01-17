import express from "express";

const router = express.Router();

//res: express response and req is what user sent
router.get("/", (req, res) => {
  res.render("home");
  /* res.json({
          id:"001"
      })*/
});

router.get("/about", (req, res) => {
  const travelGermany = "Travel to Germany";
  res.render("aboutus", { travelGermany });
});

router.get("/contact", (req, res) => {
  res.send("Contact");
});

export default router;
