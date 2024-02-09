import { Travel } from "../models/Travels.js";
import { reviews } from "../models/reviews.js";

const pageInit = async (req, res) => {
  //get 3 travels from model
  try {
    const travel = await Travel.findAll({ limit: 3 });
    const revPage = await reviews.findAll({ limit: 3 });

    res.render("home", {
      page: "Home",
      clase: "home",
      travel,
      revPage
    });
  } catch (error) {
    console.log(error);
  }
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

const pageReviews = async (req, res) => {
  try {
    const revPage = await reviews.findAll();
    res.render("reviews", {
      page: "Reviews",
      revPage,
    });
  } catch (error) {
    console.log(error);
  }
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
