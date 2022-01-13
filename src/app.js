const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const dotenv = require("dotenv").config();
const multer = require("multer")();

const app = express();

app.use(express.json());
app.use(multer.any());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(xss());
app.use(cors());
app.options("*", cors());
app.use(helmet());

app.use("/v1", routes);

module.exports = app;
