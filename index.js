const express = require("express");

const app = express();

app.get("/search", (req, res) => {
  console.log(req.query);
  if (req.query.q === "JavaScript books") {
    res.send("lista de libros de javascript");
  } else {
    res.send(`Pagina normal`);
  }
});

app.get("/hello/:username", (req, res) => {
  res.send(`Hello ${req.params.username.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = Number(x) + Number(y);
  res.send(`Results: ${result}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "angel") {
    res.sendFile("./cat.png", { root: __dirname });
    return;
  }
  res.send("El usuario no tiene acceso.");
});

app.get("/name/:name/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.name} tiene ${req.params.age} años.`);
});

app.listen(3001);
console.log(`Server on port ${3001}`);
