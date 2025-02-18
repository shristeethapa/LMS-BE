import sessionModel from "./SessionsSchema.js";

export const createSession = (sObj) => {
  return sessionModel(sObj).save();
};

export const getSession = (filter) => {
  return sessionModel.find(filter);
};

export const updateSession = (id, updatedSessionObj) => {
  return sessionModel.findOneAndUpdate({ _id: id }, updatedSessionObj);
};

export const deleteSession = (filter) => {
  return sessionModel.deleteMany(filter);
};
