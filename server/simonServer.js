const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("../public"));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

const port = 3005
app.listen(port, () => {
  console.log(`Simon server running on port ${port}...`);
});

module.exports = app;
