const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");

router.route("/login").post(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.json({ msg: "მომხმარებელი ვერ მოიძებნა", success: false });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.json({ msg: "პაროლი არასწორია", success: false });

    const token = jwt.sign(
      {
        email: user.email,
      },
      env.ACCESS_TOKEN,
      { expiresIn: "2h" }
    );
    res.json({ msg: "წარმატებული ავტორიზაცია", success: true, token });
  } catch (err) {
    res.json({ msg: "შეცდომა", err });
  }
});

module.exports = router;
