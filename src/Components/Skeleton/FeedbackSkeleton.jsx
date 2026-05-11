// components/FeedbackCardSkeleton.jsx

import React from "react";

const FeedbackCardSkeleton = () => {
  return (
    <div className="lg:grid-cols-3 md:grid-cols-2 grid  gap-4">
      <div className="border border-gray-800 rounded-xl p-5 bg-black animate-pulse space-y-4">
        {/* Top content */}
        <div className="space-y-3">
          <div className="h-5 bg-gray-700 rounded w-3/4"></div>

          <div className="h-3 bg-gray-800 rounded w-1/3"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="h-9 w-24 bg-gray-700 rounded-lg"></div>

          <div className="h-9 w-24 bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCardSkeleton;
