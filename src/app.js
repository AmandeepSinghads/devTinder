const express = require("express");
const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello world!");
});
app.use("/", (req, res) => {
  res.send("Home page");
});
app.listen(3000, () => {
  console.log("Server is running");
});
