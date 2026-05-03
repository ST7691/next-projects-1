'use client'

import { CartContext } from '@/Context/CardProvider'
import React, { use, useState } from 'react'

const FoodAddButton = ({food}) => {
  const [inCart, setInCart] = useState(false)
  const {addToCart} = use(CartContext)
    // handle add 2 cart
  const handleAdd2Cart = () => {
    addToCart(food)
    setInCart(true)
   };
  
  return (
    <button
      onClick={handleAdd2Cart}
      disabled={inCart}
      className="flex-1 bg-orange-500 text-white py-1 rounded-lg hover:bg-orange-600 transition disabled:bg-gray-600 "
    >
      {inCart ? "added" : "Add to Cart"}
    </button>
  );
}

export default FoodAddButton