const User = require("../Models/User.model");
const Admin = require("../Models/Admin.model");
const jwt = require("jsonwebtoken");
const env = require("../env.json");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
  },

  Mutation: {
    createUser(parent, args) {
      // const newUser = args
      // users.push(newUser);
      // return newUser;
    },
    adminIdentification: async (parent, args) => {
      const result = await Admin.findOne({
        email: args.email,
        password: args.password,
      });
      const { email, firstName, lastName, fullName } = result;
      const access_token = jwt.sign(
        {
          email,
          firstName,
          lastName,
          fullName,
        },
        env.ACCESS_TOKEN
      );
      return result
        ? { access_token: access_token }
        : { text: "Password or email is incorrect" };
    },
  },
};

module.exports = { resolvers };
