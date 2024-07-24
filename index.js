const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./cat.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Angel",
    lastname: "ray",
    age: 40,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "some street 123",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3001);
console.log(`Server on port ${3001}`);
