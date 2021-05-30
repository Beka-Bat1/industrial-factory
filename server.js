var express = require("express");
var app = express();
const fs = require("fs");
const compression = require("compression");


app.use(compression());
app.use(express.static("build"));

var port = process.env.PORT || 3000;

const listener = app.listen(port, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
