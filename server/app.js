const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));


app.get("/", (req, res) => res.send("answered"));

app.listen(3000, () => {
  console.log(`server is listening on port ${3000}`);
});