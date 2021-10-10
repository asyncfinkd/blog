const User = require("../Models/User.model");
const Admin = require("../Models/Admin.model");
const { sign } = require("jsonwebtoken");
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
    me: async (_, __, { req }) => {
      return await Admin.findOne({ email: req.email });
    },
    adminIdentification: async (_, args, { req, res }) => {
      const result = await Admin.findOne({
        email: args.email,
        password: args.password,
      });

      if (!result) {
        return null;
      }

      const { email, firstName, lastName, fullName } = result;
      const access_token = sign(
        {
          email,
          firstName,
          lastName,
          fullName,
        },
        env.ACCESS_TOKEN,
        {
          expiresIn: "12h",
        }
      );

      res.cookie("access-token", access_token);

      return result
        ? {
            access_token: access_token,
          }
        : { text: "error" };
    },
  },
};

module.exports = { resolvers };
