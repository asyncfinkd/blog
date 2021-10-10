const mongoose = require("mongoose");

const AdminModel = mongoose.Schema({
  fullName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("admins", AdminModel);

module.exports = Admin;
