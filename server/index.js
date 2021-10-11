const express = require("express");
const mongoose = require("mongoose");
// const compression = require("compression");
const cors = require("cors");

const app = express();
// app.use(compression());
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/blog?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const Login = require("./routes/user/login");
app.use("/api", Login);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
