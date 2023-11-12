import { useEffect } from 'react';

import { getProducts } from './store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './store/categorySlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import Home from './components/homePage/home';

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productData);
  useEffect(() => {
    console.log('useEffect');
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  console.log(productData);
  return (
    <div>
      {/* <Header /> */}
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
