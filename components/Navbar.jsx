import Link from "next/link";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { FiShoppingCart , FiHeadphones } from "react-icons/fi"

function Navbar() {

  const { cart , cartVisibility , setCartVisibility } = useContext(CartContext);

  return (
    <>
    <nav className="bg-darknight  text-white sticky top-0 z-10  font-montserrat ">
      <div className="container max-w-5xl mx-auto">
        <div className="nav-wrapper flex flex-wrap p-4 justify-center items-center">
          <div className="navbar-logo text-xl font-bold ">
          <Link href="/"> 
            <a className="flex items-center gap-2" >
              <FiHeadphones/>
              <h2>Ecommerce</h2>
            </a>
          </Link>
          </div>
          <div className="navbar-menu px-10 flex-1 flex justify-center">
            <Link href="/">
              <a className="p-2" >Home</a>
            </Link>
            <Link href="/shop">
              <a className="p-2" >Shop</a>
            </Link>
            <Link href="/about">
              <a className="p-2">About</a>
            </Link>
            <Link href="/login-signup">
              <a className="p-2">Login</a>
            </Link>
          </div>

          <div className="cart-wrapper relative mr-5">
            <button className="cart-toggle-btn" onClick={()=> setCartVisibility(!cartVisibility)} >
              <FiShoppingCart size={25} />
            </button>
            <span className="absolute top-[-8px]" >
              {cart.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
