const mongoose = require("mongoose");

module.exports.DB = function (URL) {
  mongoose.connect(
    URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
};
