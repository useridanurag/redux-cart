import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-center my-2'>Welcome to the Redux Toolkit Store.</h2>
      <section>
        <h3 className='text-xl font-semibold text-center my-2'>Products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home