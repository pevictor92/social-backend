const express = require("express");
const router = require("./Utils/router");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const mongodbUri = process.env.MONGODB_URI;

const app = express();

mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(router);

app.listen(process.env.PORT || 3333, () => console.log("Server running"));
