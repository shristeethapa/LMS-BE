import { createNewBook } from "../models/books/BookModel.js";

export const createBook = async (req, res, next) => {
  try {
    //create the book
    const book = await createNewBook(req.body);

    book?._id
      ? res.json({
          status: "success",
          message: "Book created successfully",
          book,
        })
      : next({
          status: 401,
          message: "Book cannot be created!",
        });
  } catch (error) {
    next({
      status: 500,
      message: "Error creating book",
    });
  }
};
