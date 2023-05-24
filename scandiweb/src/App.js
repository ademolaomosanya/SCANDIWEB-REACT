import React from "react";
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Header from "./Header/Header"
import All from "./All/All"
import Clothes from "./Clothes/clothes"
import Tech from "./Tech/tech";
import ProductDetailsPage from "./ProductDetailsPage/productDetailsPage";
const myStyle = {

  marginTop: '10px'
}

function App() {
  return (
    <Router>
      <Header />
      <div style={myStyle}>
        <Routes>
          <Route path='/All' element={<All/>} />
          <Route path='/clothes' element={<Clothes/>} />
          <Route path='/tech' element={<Tech/>} />
          <Route path="/products/:productId" element={<ProductDetailsPage/>} />
        </Routes>
      </div>
    </Router>

  );
}


export default App;