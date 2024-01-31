import { Travel } from "../models/Travels.js";

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

const pageTravels = async (req, res) => {
  //get data DB
  const travel = await Travel.findAll();

  console.log(travel);
  res.render("travels", {
    page: "Travels",
    travel,
  });
};

const pageReviews = (req, res) => {
  res.render("reviews", {
    page: "Reviews",
  });
};

//show page by slug
const pageDetailTravel = async (req, res) => {
  const { slug } = req.params;
  try {
    const travels = await Travel.findOne({ where: { slug: slug } });
    res.render("travel", {
      page: "Travel Information",
      travels,
    });
  } catch (erro) {
    console.log(error);
  }
};

export { pageInit, pageAbout, pageTravels, pageReviews, pageDetailTravel };
