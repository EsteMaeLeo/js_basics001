import express from "express";
import chalk from "chalk";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 5001;

//enable pub
app.set("view engine", "pug");

//get year
app.use((req, res, next) => {
  const actualYear = new Date();
  res.locals.actualYear = actualYear.getFullYear();
  res.locals.nameSite = "Travel Agency"
  return next();
});

//define public folder
app.use(express.static("public"));

//adding routes
app.use("/", router);

app.listen(port, () => {
  console.log(chalk.bgBlue(`Server is runnig on port ${port}`));
});
