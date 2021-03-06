const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Boulder = require("./models/boulderModel");
const boulderRouter = require("./router/boulderRouter")(Boulder);
const Note = require("./models/noteModel");
const noteRouter = require("./router/noteRouter")(Note);

const app = express();
const db = mongoose.connect("mongodb://18.130.244.7/boulderBucketList", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/boulders", boulderRouter);
app.use("/notes", noteRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
