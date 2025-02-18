import bookHistoryModel from "./BookHistorySchema.js";

export const createBookHistory = (bookHistoryObj) => {
  return bookHistoryModel(bookHistoryObj).save();
};

export const getBookHistory = (filter) => {
  return bookHistoryModel.find(filter);
};

export const updateBookHistory = (id, updatedBookHistoryObj) => {
  return bookHistoryModel.findOneAndUpdate({ _id: id }, updatedBookHistoryObj);
};

export const deleteBookHistory = (filter) => {
  return bookHistoryModel.deleteMany(filter);
};
