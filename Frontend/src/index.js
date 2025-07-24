  import React from "react";
  import ReactDOM from "react-dom/client";
  import "../node_modules/font-awesome/css/font-awesome.min.css";
  import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { Provider } from "react-redux";
  import store from "./redux/store";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import {
    Home,
    Product,
    Products,
    AboutPage,
    ContactPage,
    Cart,
    Login,
    Register,
    Checkout,
    PageNotFound,
  } from "./pages";
  import Layout from "./components/Layout";
  import ScrollToTop from "./components/ScrollToTop";
  import { Toaster } from "react-hot-toast";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/product/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Provider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);