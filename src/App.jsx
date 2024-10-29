import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetail from './components/ItemDetail';
import Category from './category/Category';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<Category />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
