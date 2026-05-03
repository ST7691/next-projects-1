import FoodCard from "@/Components/Cards/FoodCard";
import Title from "@/Components/Title";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/Components/InputSearch";
import style from './food.module.css'

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    {next:{revalidate:5}}
  );
  const data = await res.json();
 await new Promise((resolve) => setTimeout(resolve, 1500));
  return data.foods || [];
};
const Food = async ({ searchParams }) => {
  const { search = ''} = await searchParams;
  // console.log(data)
  const foods = await getFoods(search);
  return (
    <div>
      <Title>
        {" "}
        Total Food <span className="text-yellow-500"> {foods.length}</span> Item
        Found
      </Title>
      <div className={`my-3 ${style.bg}`}>
        <InputSearch></InputSearch>
      </div>
      <div className="flex gap-5 ">
        {/* food container */}
        <div className=" flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        {/*  */}
        <div className=" border-1 w-[250px] rounded-xl p-4 ">
          <h2 className="text-2xl font-bold"> Cart Items </h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default Food;
