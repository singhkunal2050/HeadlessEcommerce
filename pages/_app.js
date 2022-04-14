import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { CartProvider } from "../context/cartContext";
import { ProductProvider } from "../context/productsContext";
import { UserProvider } from "../context/userContext";
import NProgress from "nprogress"
import Router from "next/router";
import "nprogress/nprogress.css"

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })

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
