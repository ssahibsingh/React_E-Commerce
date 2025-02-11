import React from 'react'
import { Footer, Navbar, Product } from "../components"
import { useEffect } from 'react';
import analytics from '../lib/segment';

const Products = () => {
  useEffect(() => {
    analytics.page(); // Track page views on load
  }, []);
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  )
}

export default Products