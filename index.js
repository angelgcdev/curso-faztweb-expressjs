const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`);

  next();
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.all("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3001);
console.log(`Server on port ${3001}`);
