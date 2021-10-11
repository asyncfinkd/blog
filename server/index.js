const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
app.use(compression());
app.use(express.json());


mongoose.connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/blog?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const login = require("./routes/user/login");
app.use(login);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
