const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ data: "this works" });
});

app.get("/hello", (req, res) => {
  res.json({ data: "this also works" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
