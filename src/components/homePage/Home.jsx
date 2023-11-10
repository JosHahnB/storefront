import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ProductModal from '../productModal/ProductModal';
import Products from '../products/Products';
import Category from '../categoryDropdown/Category';
import Cart from '../cart/Cart';

const Home = () => {
  return (
    <>
      <Header />
      <Cart />
      <Category />
      <Products />
      <Footer />
      <ProductModal />
    </>
  );
};

export default Home;
