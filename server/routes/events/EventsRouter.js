const router = require("express").Router();
const Events = require("../../models/events");

router.route("/get/events").get(async (req, res) => {
  Events.find().then((result) => {
    res.json(result);
  });
});

module.exports = router;
