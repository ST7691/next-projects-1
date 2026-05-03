import React from 'react'
import Title from '../Componnets/Title';
 const getFoods = async () => {
   const res = await fetch(
     "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
   );
   const data = await res.json();
   return data.foods || [];
 };
const Food = async() => {
 const food = await getFoods()
  return (
    <div>
      <Title>
        {" "}
      Total   Food <span className="text-yellow-400"> {food.length}</span> Item Found 
      </Title>
    </div>
  );
}

export default Food