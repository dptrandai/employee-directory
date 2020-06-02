const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const app = express();
const PORT = process.env.PORT || 8080;

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//if deployed on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
};

//allow our server to interact with other ports
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

//used to log our http requests for debugging
app.use(morgan("tiny"));
//enable the cross port thing set up above
app.use(allowCrossDomain);

//parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup some routes here
app.use(require("./data/routes/api-routes"));

//start the server
app.listen(PORT, console.log("MongoDB server listening on port: ", PORT));