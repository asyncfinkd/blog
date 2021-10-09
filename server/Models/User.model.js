const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: { type: Number, required: true },
    married: { type: Boolean, required: true }
})

const User = mongoose.model("users", UserSchema);

module.exports = User;