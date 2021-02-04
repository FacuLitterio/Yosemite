const express = require("express");
const path = require("path");

const app = express();

//Settings
app.set("PORT", process.env.PORT || 4000);

//Middlewares
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(app.get("PORT"), () =>
  console.log(`Server on Port ${app.get("PORT")}`)
);
