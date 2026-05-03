'use client'
import { CartContext } from '@/Context/CardProvider'
import React, { use } from 'react'

const CartItems = () => {
  const {cart} = use(CartContext)
  return (
    <div>{cart.length}  Items add </div>
  )
}

export default CartItems