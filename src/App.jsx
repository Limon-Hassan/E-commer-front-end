import React from 'react';
import Nav from './Components/Ab_Navber/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './Components/Fotter/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign up" element={<Signup />} />
          <Route path="/sign in" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
