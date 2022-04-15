import Link from "next/link";
import { CartContext } from "../context/cartContext";
import { useContext, useState, useEffect } from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { SiApacherocketmq } from "react-icons/si"
import { CgClose } from "react-icons/cg";
import UserAvatar from "./UserAvatar";
import { UserContext } from "../context/userContext";
import ToggleTheme from "./ToggleTheme";
import Head from "next/head";

function Navbar() {
  const { cart, cartVisibility, setCartVisibility } = useContext(CartContext);
  const [nav, setNav] = useState(false);
  const { user, setUser, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (sessionStorage.user) {
      console.log("LoggedIn from session ");
      // console.log(sessionStorage.user);
      setUser(JSON.parse(sessionStorage.user));
    }
  }, []);

  return (
    <>
      <nav className="bg-darknight  text-white  sticky top-0 z-10  font-montserrat ">
        <div className="container max-w-5xl mx-auto">
          <div className="nav-wrapper flex flex-wrap p-4 justify-between items-center">
            <FiMenu
              size={20}
              className="top-6 left-8 md:hidden"
              onClick={() => setNav(!nav)}
            />
            <div className="navbar-logo text-xl font-bold ">
              <Link href="/">
                <a className="flex items-center gap-2">
                  <SiApacherocketmq />
                  <h2>Hcommerce</h2>
                </a>
              </Link>
            </div>
            <div className="nav-content flex items-center">
              <div
                style={{
                  transform: nav ? "translateX(0)" : "translateX(-110%)",
                }}
                className="navbar-menu z-20 flex flex-col justify-center items-center transition-all ease-in-out duration-500 fixed bg-white inset-0 text-darknight  md:static md:!translate-x-0 md:bg-darknight  md:text-white md:px-10 md:flex-row md:flex-1"
              >
                <CgClose
                  size={20}
                  className="fixed top-8 right-8 md:hidden"
                  onClick={() => setNav(!nav)}
                />
                <Link href="/">
                  <a className="p-2" onClick={() => setNav(false)}>
                    Home
                  </a>
                </Link>
                <Link href="/shop">
                  <a className="p-2" onClick={() => setNav(false)}>
                    Shop
                  </a>
                </Link>
                <Link href="/about">
                  <a className="p-2" onClick={() => setNav(false)}>
                    About
                  </a>
                </Link>

                {!user && (
                  <Link href="/login-signup">
                    <a className="p-2" onClick={() => setNav(false)}>
                      Login / Signup
                    </a>
                  </Link>
                )}
              </div>

              {user ? <UserAvatar /> : ""}

              <div className="flex gap-4 justify-center">
                <ToggleTheme />
                <div className="cart-wrapper relative mr-2 flex items-center  ">
                  <button
                    className="cart-toggle-btn"
                    onClick={() => setCartVisibility(!cartVisibility)}
                  >
                    <FiShoppingCart size={25} />
                  </button>
                  <span className="absolute top-[-8px] right-[-10px]">
                    {cart.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
