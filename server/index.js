const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const users = require("./routes/users");
const showers = require("./routes/showers");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

app.use("/api/users", users);

app.use("/api/showers", showers);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((conn) => console.log(`MongoDB Connected: ${conn.connection.host}`))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
