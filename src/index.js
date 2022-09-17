import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';


import {Home, Product,Products, AboutPage, ContactPage, Cart} from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element = {<ContactPage/>} />
      <Route path="/Cart" element = {<Cart/>} />
    </Routes>
     </Provider>
  </BrowserRouter>
);