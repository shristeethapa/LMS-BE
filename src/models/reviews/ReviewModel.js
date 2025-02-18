import reviewModel from "./ReviewSchema.js";

export const createReview = (rObj) => {
  return reviewModel(rObj).save();
};

export const getReview = (filter) => {
  return reviewModel.find(filter);
};

export const updateReview = (id, updatedReviewObj) => {
  return reviewModel.findOneAndUpdate({ _id: id }, updatedReviewObj);
};

export const deleteReview = (filter) => {
  return reviewModel.deleteMany(filter);
};
