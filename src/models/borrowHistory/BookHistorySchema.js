import mongoose from "mongoose";

const bookHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    borrowDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["borrowed", "returned"],
      default: "borrowed",
      required: true,
    },
    isReviewed: {
      type: Boolean,
      required: true,
    },
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BookHistory", "bookHistorySchema");
