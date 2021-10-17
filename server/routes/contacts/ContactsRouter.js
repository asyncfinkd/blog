const router = require("express").Router();
const Contacts = require("../../models/contacts");
const nodemailer = require("nodemailer");
const env = require("../../env.json");

router.route("/contact").post(async (req, res) => {
  const newContact = new Contacts(req.body);
  try {
    const saveNewContact = await newContact.save().then(() => {
      res.status(200).json({ success: true });
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${env.user}`,
        pass: `${env.pass}`,
      },
    });

    let mailOptions = {
      from: `${env.user}`,
      to: req.body.email,
      subject: req.body.subject,
      html: `
          <h1>Hello.</h1>
        `,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) console.log("error occurs: ", err);
      else console.log("email sent");
    });
  } catch (err) {
    res.status(404).json({ msg: "Error", err });
  }
});

module.exports = router;
