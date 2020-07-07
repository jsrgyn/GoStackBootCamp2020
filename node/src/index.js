const express = require("express");
const { response } = require("express");

const app = express();

app.get("/projects", (request, response) => {
  return response.send("Hello world");
});

app.get("/projectsJSON", (request, response) => {
  return response.json({ message: "Hello world" });
});

app.listen("3333");
