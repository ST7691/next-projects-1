import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-52 bg-gray-300"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>

        <div className="flex gap-2 pt-2">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
          <div className="h-8 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
