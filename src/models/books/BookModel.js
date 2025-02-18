import BookSchema from "./BookSchema.js";

//create Book
export const createNewBook = (bookObj) => {
  return BookSchema(bookObj).save();
};

export const getBook = (filter) => {
  return bookModel.find(filter);
};

// export const updateBook = (id, updatedBookObj) => {
//   return bookModel.findOneAndUpdate({ _id: id }, updatedBookObj);
// };

// export const deleteBook = (filter) => {
//   return bookModel.deleteMany(filter);
// };
