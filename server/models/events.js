const mongoose = require("mongoose");

const EventsSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  date: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("events", EventsSchema);
