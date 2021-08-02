const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Port 3000 initialized");
});
