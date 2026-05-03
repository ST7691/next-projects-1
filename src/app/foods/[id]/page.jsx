import React from "react";
export function generateStaticParams() {
  return [{ id: "52904" }, { id: "52812" }, { id: "52895" }];
}
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1200));

  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food) {
    return (
      <h2 className="text-center mt-10 text-xl font-semibold">
        Food Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 ">
      {/* Card */}

      <div className="relative">
        {/* Image */}
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <h1 className="text-xl font-semibold">{food.title}</h1>

        <div className="flex gap-3 text-sm text-gray-400">
          <p>{food.category}</p>
          <p>{food.area}</p>
        </div>

        <p className="text-xl font-bold text-orange-500">৳ {food.price}</p>

        {/* Buttons */}
        <div className="flex gap-2 pt-4">
          <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Add to Cart
          </button>

          <a
            href={food.video}
            target="_blank"
            className="flex-1 text-center border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            Watch
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
