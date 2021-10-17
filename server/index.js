const express = require("express");
const compression = require("compression");
const cors = require("cors");
const Application = require("./lib/app/ApplicationStart");
const Connect = require("./lib/connect/Connect");

const app = express();
app.use(compression());
app.use(cors());
app.use(express.json());

Connect.DB(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/blog?retryWrites=true&w=majority"
);

const Login = require("./routes/user/login");
app.use("/api", Login);

const Events = require("./routes/events/EventsRouter");
app.use("/api", Events);

Application.start(3001, app);
