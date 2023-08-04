import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header/Header"
import All from "./All/All"
import Clothes from "./Clothes/clothes"
import Tech from "./Tech/tech";
import ProductDetailsPage from "./ProductDetailsPage/productDetailsPage";
import Cart from "./Cart/cart"
import CartContext from './Context/context';
import cartReducer from './Context/reducers';

const myStyle = {

  marginTop: '10px'
}



function App() {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
  <CartContext.Provider value={{ cartState, dispatch }}>
  <Router>
        <Header />
        <div style={myStyle}>
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/clothes' element={<Clothes/>} />
            <Route path='/tech' element={<Tech />} />
            <Route path="/products/:productId" element={<ProductDetailsPage />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}


export default App;