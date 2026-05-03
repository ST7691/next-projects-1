"use client";

import { useState } from "react";

const ReviewsCard = ({ review }) => {
  const { user, photo, rating, review: text, likes } = review;

  const [likeCount, setLikeCount] = useState(likes?.length || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-black shadow-md rounded-2xl p-4 space-y-3 border">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={photo}
          alt={user}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">{user}</h3>

          {/* Stars */}
          <p className="text-yellow-500 text-sm">{"★".repeat(rating)}</p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm">{text}</p>

      {/* Like Button */}
      <div className="flex justify-between items-center pt-2">
        <button
          onClick={handleLike}
          className={`px-3 py-1 rounded-lg text-sm transition ${
            liked
              ? "bg-red-500 text-white"
              : "border text-gray-600 hover:bg-red-500 hover:text-white"
          }`}
        >
          ❤️ Like ({likeCount})
        </button>
      </div>
    </div>
  );
};

export default ReviewsCard;
