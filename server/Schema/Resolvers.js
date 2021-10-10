const User = require("../Models/User.model");
const Admin = require("../Models/Admin.model");

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
      return result
        ? { access_token: "1" }
        : { text: "Password or email is incorrect" };
    },
  },
};

module.exports = { resolvers };
