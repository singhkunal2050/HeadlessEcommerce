import Link from "next/link";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { FiShoppingCart , FiHeadphones } from "react-icons/fi"

function Navbar() {

  const { cart, setCart, cartCount, setCartCount , cartVisibility , setCartVisibility} =
  useContext(CartContext);

  return (
    <>
    <nav className="bg-darknight  text-white sticky top-0 z-10  font-montserrat ">
      <div className="container max-w-5xl mx-auto">
        <div className="nav-wrapper flex p-4 justify-between items-center">
          <div className="navbar-logo text-xl font-bold ">
          <Link href="/"> 
            <a className="flex items-center gap-2" >
              <FiHeadphones/>
              <h2>Ecommerce</h2>
            </a>
          </Link>
          </div>
          <div className="navbar-menu flex-1 flex justify-center">
            <Link href="/">
              <a className="p-2" >Home</a>
            </Link>
            <Link href="/shop">
              <a className="p-2" >Shop</a>
            </Link>
            <Link href="/about">
              <a className="p-2">About</a>
            </Link>
          </div>

          <div className="cart-wrapper">
            <button className="cart-toggle-btn" onClick={()=> setCartVisibility(!cartVisibility)} >
              <FiShoppingCart size={25} />
            </button>
            <span className="absolute top-2" >
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
