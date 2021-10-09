const User = require("../Models/User.model");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      //   return await User.find();
      return "1";
    },
  },

  Mutation: {
    createUser(parent, args) {
      // const newUser = args
      // users.push(newUser);
      // return newUser;
    },
  },
};

module.exports = { resolvers };
