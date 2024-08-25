const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of server");
});

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello from the other side</h1>");
});

app.post("/post-route", (req, res) => {
  const { name } = req.body;
  res.send(`Welcome ${name}`);
});

app.listen(PORT, (error) => {
  if (!error) console.log("Server is listening on port " + PORT);
  else console.log("Error occured, server cant start", error);
});
