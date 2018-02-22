var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 5000;
var path = require("path");
var fs = require("fs");
var router = require("./routes.js");

app.use("/static", express.static(path.join(__dirname + "/")));
app.use("/api", router);


app.all("/*", function (req, res, next) {
  res.sendFile("views/index.html", {root: __dirname});
});



app.listen(port);
