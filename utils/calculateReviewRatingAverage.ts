import { Review } from "@prisma/client";

export const calculateReviewRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return;

  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
