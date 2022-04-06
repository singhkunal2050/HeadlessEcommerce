import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { CartContext } from "../context/cartContext";
import { ProductContext } from "../context/productsContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState({
    items: [],
  });
  const [cartVisibility, setCartVisibility] = useState(false);

  let [productsGlobal, setProductsGlobal] = useState();

  return (
    <>
     
      <CartContext.Provider
        value={{
          cart,
          setCart,
          cartCount,
          setCartCount,
          cartVisibility,
          setCartVisibility,
        }}
      >
        <ProductContext.Provider value={{ productsGlobal, setProductsGlobal }}>
          <Navbar />
          <Cart />
          <Component {...pageProps} />
          <Footer />
        </ProductContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
