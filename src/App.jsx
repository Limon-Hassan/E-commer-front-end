import React from 'react';
import Nav from './Components/Ab_Navber/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Fotter/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Otp from './Pages/otpsent';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import Account from './Pages/Account';
import ProductDetails from './Pages/ProductDetails';
import PrivateRoute from './Protected/ProtectedRoute';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

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

          <Route element={<PrivateRoute />}>
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/account" element={<Account />} />
          </Route>

          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/otpsent" element={<Otp />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
