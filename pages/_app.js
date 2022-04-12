import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { CartProvider } from "../context/cartContext";
import { ProductProvider } from "../context/productsContext";
import { UserProvider } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <Navbar />
            <Cart />
            <Component {...pageProps} />
            <Footer />
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
