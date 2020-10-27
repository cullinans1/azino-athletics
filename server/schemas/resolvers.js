const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Order, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    user: async (parent, arg, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await (await User.findById(context.user._id)).populated({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }
      throw new AuthenticationError("Not Logged in");
    },

    // CHeckout logic goes here
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findOneAndUpdate(context.user._id, {
          $push: { orders: order },
        });
        return order;
      }
      throw new AuthenticationError("Not logged in!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not Logged in!");
    },
    updateProduct: async (parent, { _id }, args) => {
      return await Product.findOneAndUpdate(_id, args, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;