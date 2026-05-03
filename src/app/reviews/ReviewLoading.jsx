import ReviewsSkeleton from "@/Components/Skeleton/ReviewsCardSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {[...Array(12)].map((_, index) => (
        <ReviewsSkeleton key={index}></ReviewsSkeleton>
      ))}
    </div>
  );
};

export default ReviewLoading;
