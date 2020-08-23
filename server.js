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

app.post("/commands", (req, res) => {
  exec(req.query.cmd, function (err, stdout, stderr) {
    console.log(stdout);
    res.send(stdout);
  });
});

// method GET PUT POST DeLETE
// Route that is to be matched

app.get("/calc", (req, res, next) => {
  console.log("Hello  from calc get");
  const result = parseInt(req.query.a) + parseInt(req.query.b);
  res.send(result + "get");
  next();
});

app.put("/calc", (req, res, next) => {
  console.log("Hello  from calc put");
  const result = parseInt(req.query.a) + parseInt(req.query.b);
  res.send(result + "put");
  next();
});

app.post("/calc", (req, res, next) => {
  console.log("Hello  from calc post");
  const result = parseInt(req.query.a) + parseInt(req.query.b);
  res.send(result + "post");
  next();
});

app.get("*", (req, res) => {
  console.log("Hello  from index *");
  res.sendFile("index.html", { root });
});
