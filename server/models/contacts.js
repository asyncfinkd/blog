const mongoose = require("mongoose");

const ContactsSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  subject: { type: String },
  message: { type: String },
});

module.exports = mongoose.model("contacts", ContactsSchema);
