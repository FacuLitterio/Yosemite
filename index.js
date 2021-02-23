const express = require("express");
const path = require("path");

const app = express();

//Settings
app.set("PORT", process.env.PORT || 4000);

//Middlewares
app.use(express.static(path.join(__dirname, "public")));

//Navbar Route
app.get("/Navbar", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Navbar.html"));
});

//Probiotics Route
app.get("/Probiotics", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Probiotics.html"));
});

//NaturalNights Route
app.get("/NaturalNights", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "NaturalNights.html"));
});

//Shiny Days Route
app.get("/ShinyDays", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ShinyDays.html"));
});

//Shiny Days Route
app.get("/Eldelberry", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Eldelberry.html"));
});

//Shiny Days Route
app.get("/Eldelberry", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "CollagenComplex.html"));
});

app.listen(app.get("PORT"), () =>
  console.log(`Server on Port ${app.get("PORT")}`)
);
