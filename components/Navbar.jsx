import Link from "next/link";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

function Navbar() {

  const { cart, setCart, cartCount, setCartCount , cartVisibility , setCartVisibility} =
  useContext(CartContext);

  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <div className="navbar-logo">
            <h2>Headless Ecommerce</h2>
          </div>
          <div className="navbar-menu">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>

          <div className="cart-wrapper">
            <button className="cart-toggle-btn" onClick={()=> setCartVisibility(!cartVisibility)} >Cart</button>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
