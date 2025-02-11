import { Navbar, Main, Product, Footer } from "../components";
import { useEffect } from "react";
import analytics from "../lib/segment";

function Home() {
  useEffect(() => {
    analytics.page(); // Track page views on load
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </>
  )
}

export default Home