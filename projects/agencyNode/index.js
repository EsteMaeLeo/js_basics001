import express from "express";
import chalk from "chalk";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 5001;

//enable pub
app.set('view engine', 'pug')

//adding routes
app.use("/", router);

app.listen(port, () => {
  console.log(chalk.bgBlue(`Server is runnig on port ${port}`));
});
