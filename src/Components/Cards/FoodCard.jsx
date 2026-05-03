import React from "react";
import Image from "next/image";
import Link from "next/link";
import FoodAddButton from "../BouttonCard/FoodAddButton";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="bg-black shadow-md border-1 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-orange-500 font-bold text-lg">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          {/* add to card */}
          <FoodAddButton food={food}></FoodAddButton>
          <Link
            href={`/foods/${id}`}
            className="flex-1 text-center border border-orange-500 text-orange-500 py-1 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
