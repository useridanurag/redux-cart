import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
  const products = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }
  return (
    <>
      {products.map((product, index) => (
        <div
          key={index}
          className='flex justify-between place-items-center bg-white mx-8 mt-4 px-4 py-2 rounded-lg'>
          <div className='w-[10%]'><img className='h-24 ' src={product.image} alt="img" /></div>
          <p className='text-sm font-semibold w-[50%]'>Title : {product.title}</p>
          <p className='text-sm font-semibold'>Price : {product.price}</p>
          <button className='bg-purple-700 text-white rounded-lg py-1 px-2'
            onClick={() => handleRemove(product.id)}
          >Remove Item</button>
        </div>
      ))}
    </>
  )
}

export default Cart