const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

const root = require("path").join(__dirname, "client", "build");

app.use(express.static(root));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});
