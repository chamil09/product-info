import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
