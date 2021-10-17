const mongoose = require("mongoose");
const Schema = mongoose;

const EventsSchema = Schema({
  title: { type: String },
  description: { type: String },
  date: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("events", EventsSchema);
