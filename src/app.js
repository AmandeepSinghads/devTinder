const express = require("express");

const app = express();

const { userAuth } = require("./middlewares/auth");

app.use("/", (req, res, next) => {
  console.log("1st Middleware");
  next();
});

app.get(
  "/users",
  userAuth,
  (req, res, next) => {
    console.log("2nd middleware");
    next();
  },
  (req, res) => {
    res.send("response sent");
  }
);
app.listen(3000, () => {
  console.log("Server running succesfully");
});
