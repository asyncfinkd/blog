const jwt = require("jsonwebtoken");
const env = require("../env.json");

module.exports = async (req, res, next) => {
  const token = JSON.parse(req.headers.authorization.split(" ")[1])
  try {
    if (!token) {
      res.json({ msg: "ტოკენი არ არსებობს", expired: true });
      next();
    } else {
      const decodedData = jwt.verify(token, env.ACCESS_TOKEN)
      req.user = decodedData
      next();
    }
  } catch (err) {
    res.json({ msg: "თქვენი სესია ამოიწურა", expired: true });
  }
};