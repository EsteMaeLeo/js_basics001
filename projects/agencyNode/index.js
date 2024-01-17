const express = require("express");

const app = express();

const port = process.env.PORT || 5001;
app.listen(() => {
  console.log(`Server is runnig on port ${port}`);
});
