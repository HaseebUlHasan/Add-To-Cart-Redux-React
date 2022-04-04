import React from "react";
import { Product } from "./features/counter/Product";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from "./features/counter/Information";
import Cart from "./features/counter/Cart"
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />}/>
          <Route path="/info" element={<Information />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
