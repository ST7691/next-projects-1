"use client";

import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";

const FeedbackCard = ({ feedback, onDelete, onUpdate }) => {
  const { _id, message, date } = feedback;

  // safe date parsing
  const safeDate = date ? new Date(date) : new Date();

  return (
    <div className="border border-gray-800 rounded-xl p-5 shadow-md bg-black space-y-4 hover:shadow-lg transition mt-5">
      {/* Content */}
      <div>
        <h2 className="text-lg font-semibold text-white">{message}</h2>

        <p className="text-sm text-gray-400 mt-1">
          {formatDistanceToNow(safeDate, {
            addSuffix: true,
          })}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onUpdate(feedback)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white text-sm"
        >
          <Pencil size={16} />
          Update
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-white text-sm"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
