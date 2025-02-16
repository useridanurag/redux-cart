import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <div className='bg-gray-200 min-h-[100vh]'>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App