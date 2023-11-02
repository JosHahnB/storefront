import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductModal from './components/productModal/ProductModal';
import Products from './components/products/Products';
import Category from './components/categoryDropdown/Category';

const App = () => {
  return (
    <div>
      <Header />
      <Category />
      <Products />
      <Footer />
      <ProductModal />
    </div>
  );
};

export default App;
