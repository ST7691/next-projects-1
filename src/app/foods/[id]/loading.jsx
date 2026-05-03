import React from "react";

const Loading = () => {
  return (
    <div className="max-w-xl mx-auto p-6 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-52 bg-gray-300 rounded-lg" />

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4" />

        {/* Category + Area */}
        <div className="flex gap-3">
          <div className="h-4 bg-gray-300 rounded w-20" />
          <div className="h-4 bg-gray-300 rounded w-16" />
        </div>

        {/* Price */}
        <div className="h-6 bg-gray-300 rounded w-24" />

        {/* Buttons */}
        <div className="flex gap-2 pt-4">
          <div className="flex-1 h-10 bg-gray-300 rounded-lg" />
          <div className="flex-1 h-10 bg-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
