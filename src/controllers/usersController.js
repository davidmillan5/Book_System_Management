const { User } = require('../models');
const { userSchema } = require('../schema');

const createUser = async (req, res, next) => {
  const userValidation = userSchema.userSchema.validate(req.body);
  if (userValidation.error) {
    return res.status(400).send(userValidation.error);
  }
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (_, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
