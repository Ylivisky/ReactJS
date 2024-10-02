import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Category from './views/Category/Category';
import ItemDetail from './components/ItemDetail';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<Category />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
