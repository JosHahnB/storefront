import { useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductModal from './components/productModal/ProductModal';
import Products from './components/products/Products';
import Category from './components/categoryDropdown/Category';
import Cart from './components/cart/Cart';
import { getProducts  } from './store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './store/categorySlice';

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
    

      <Header />
      <Cart />
      <Category />
      <Products />
      <Footer />
      <ProductModal />
    </div>
  );
};

export default App;
