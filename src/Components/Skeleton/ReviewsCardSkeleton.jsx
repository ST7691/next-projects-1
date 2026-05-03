const ReviewsSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 space-y-3 animate-pulse border">
      {/* User */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />

        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-24" />
          <div className="h-3 bg-gray-300 rounded w-16" />
        </div>
      </div>

      {/* Text */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full" />
        <div className="h-3 bg-gray-300 rounded w-5/6" />
        <div className="h-3 bg-gray-300 rounded w-2/3" />
      </div>

      {/* Button */}
      <div className="h-8 bg-gray-300 rounded w-24" />
    </div>
  );
};

export default ReviewsSkeleton;
