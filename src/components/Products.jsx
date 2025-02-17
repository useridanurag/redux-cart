import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice'
const Products = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchProducts());

        // const fetchProducts = async () => {
        //     const res = await fetch("https://fakestoreapi.com/products");
        //     const data = await res.json();
        //     setProducts(data);
        //     console.log(data);
        // }
        // fetchProducts();
    }, [])


    const handleAdd = (product) => {
        dispatch(add(product));
    }
    if (status === STATUSES.LOADING) {
        return (
            <div className='flex justify-evenly place-self-center'>
                <button className='font-semibold  mt-[35vh] bg-purple-700 text-white px-2 py-1 rounded-lg'>Loading...</button></div>)
    }
    else if (status === STATUSES.ERROR) {
        return (
            <div className='flex justify-evenly place-self-center'>
                <button className='font-semibold  mt-[35vh] bg-purple-700 text-white px-2 py-1 rounded-lg'>Something Went Wrong...</button></div>)
    }
    return (
        <div className='flex gap-8 justify-evenly flex-wrap'>
            {
                products.map((product) => (
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