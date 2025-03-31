import userModel from "../schema/userSchema.js";

export const createUser = (userObject) => {
  return userModel(userObject).save();
};

export const findUserByEmail = (email) => {
  return userModel.findOne({ email });
};

export const updateUser = (email, userObject) => {
  return userModel.updateOne({ email }, userObject);
};
