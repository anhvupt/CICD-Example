const express = require("express");

const app = express();

app.get("/", function (req, res) {
  return res.send("Hello World. so bad");
});

app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;
