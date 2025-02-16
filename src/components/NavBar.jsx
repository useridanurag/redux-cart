import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
const NavBar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <div className='flex justify-around bg-purple-800 text-white py-2 text-xl'>
            <span>Redux Store</span>
            <div className='flex gap-10'>
                <NavLink to="/" className={``}>Home</NavLink>
                <NavLink to="/cart" className={``}>Cart</NavLink>
                <span className='rounded-lg'>Items : {items.length}</span>
            </div>
        </div>
    )
}

export default NavBar