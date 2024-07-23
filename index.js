const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/weather", (req, res) => {
  res.send("The current weather is Nice");
});

app.listen(3001);
console.log(`Server on port ${3001}`);
