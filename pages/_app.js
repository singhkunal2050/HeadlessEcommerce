import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { CartContext, CartProvider } from "../context/cartContext";
import { ProductContext } from "../context/productsContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  let [productsGlobal, setProductsGlobal] = useState();
  return (
    <>
     
      <CartProvider>
        <ProductContext.Provider value={{ productsGlobal, setProductsGlobal }}>
          <Navbar />
          <Cart />
          <Component {...pageProps} />
          <Footer />
        </ProductContext.Provider>
      </CartProvider>
    </>
  );
}

export default MyApp;
