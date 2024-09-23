const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    hey: "NodeJS",
  });
});

app.listen(3000, () => {
  console.log("App listening on Port 3000");
});
