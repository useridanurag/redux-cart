import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            console.log(data);
        }
        fetchProducts();
    }, [])

    const dispatch = useDispatch()

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    return (
        <div className='flex gap-8 justify-evenly flex-wrap'>
            {
                Products.map((product) => (
                    <div className='w-52 bg-white rounded-lg p-4 flex flex-col justify-between' key={product.id}>
                        <img className='h-24 place-self-center' src={product.image} />
                        <h4 className='text-[.7rem] font-semibold my-2'>{product.title}</h4>
                        <h4 className='text-[.7rem] font-semibold'>Price : {product.price}</h4>
                        <button className='bg-purple-700 text-white rounded-lg py-1 px-2 text-sm mt-2'
                            onClick={() => handleAdd(product)}
                        >Add To Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products