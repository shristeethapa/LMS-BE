import UserSchema from "./UserSchema.js";

//create User
export const createNewUser = (userObj) => {
  return UserSchema(userObj).save();
};

//read user
//get user by email address

export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};

//update user

export const updateUser = (filter, updateUserObject) => {
  return UserSchema.findByIdAndUpdate(filter, updateUserObject);
};

//delete user

export const deleteUserById = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
