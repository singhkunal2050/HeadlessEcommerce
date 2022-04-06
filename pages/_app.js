import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { CartProvider } from "../context/cartContext";
import {  ProductProvider } from "../context/productsContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
     
      <CartProvider>
        <ProductProvider>
          <Navbar />
          <Cart />
          <Component {...pageProps} />
          <Footer />
        </ProductProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
