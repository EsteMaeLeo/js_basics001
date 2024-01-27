const pageInit = (req, res) => {
  res.render("home", {
    page: "Home",
  });
};

const pageAbout = (req, res) => {
  const travelGermany = "Travel to Germany";
  res.render("aboutus", {
    page: "About",
  });
};

const pageTravels = (req, res) => {
  res.render("travels", {
    page: "Travels",
  });
};

const pageReviews = (req, res) => {
  res.render("reviews", {
    page: "Reviews",
  });
};

export { pageInit, pageAbout, pageTravels, pageReviews };
