import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from '@/layouts/footer/Footer';
import Header from '@/layouts/header/Header';
import CartPage from '@/pages/cart/Cart';
import Home from '@/pages/home/Home';
import ProductPage from '@/pages/product/Product';
import SignInPage from '@/pages/sign-in/SignIn';
import SignUpPage from '@/pages/sign-up/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
