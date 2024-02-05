import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/product/Product';
import ProductDetail from './customer/components/ProductDetail/ProductDetail';
import Cart from './customer/components/cart/Cart';

function App() {
  return (
    <div> 
    <Navigation></Navigation>

    <div>
      {/* <HomePage></HomePage> */}
      {/* <Product></Product> */}
      {/* <ProductDetail></ProductDetail> */}
      <Cart></Cart>
    </div>


    <Footer></Footer>
    </div>
  );
}

export default App;
