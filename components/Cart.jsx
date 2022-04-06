import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import { CgClose } from "react-icons/cg";
import { GiTrashCan } from "react-icons/gi";

function Cart() {
  const {
    cart,
    setCart,
    cartCount,
    setCartCount,
    cartVisibility,
    setCartVisibility,
  } = useContext(CartContext);

  return (
    <>
      {/* <div className="cart-floating-tag">
          {JSON.stringify(cart)}
        </div> */}

      <div
        className="cart-container overflow-y-auto transition-all duration-300 ease-in-out z-10 px-4 fixed right-0 top-0 bottom-0 w-full  md:w-[400px] min-h-screen bg-white"
        style={{
          transform: cartVisibility ? "translateX(0)" : "translateX(110%)",
        }}
      >
        <div className="cart-header flex justify-between py-4 sticky top-0 z-10 bg-white">
          <h1 className="font-bold text-xl text-darknight">Cart</h1>

          {cart.length > 0 && (
            <button
              onClick={() => {
                setCart((localStorage.cart = ""));
              }}
            >
              <GiTrashCan />
            </button>
          )}
          <span
            className="close-cart"
            onClick={() => setCartVisibility(!cartVisibility)}
          >
            <CgClose />
          </span>
        </div>
        <div className="cart-body flex flex-col gap-2">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div
                  key={item.variantId}
                  className="cart-item flex border-2 shadow-sm"
                >
                  <div className="cart-item-img flex ">
                    <Image
                      className="h-[100%] w-full aspect-square object-cover"
                      src={item.customAttributes[2].value}
                      alt={item.customAttributes[0].value}
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className="cart-item-details p-4  pt-1 flex flex-col">
                    <h4 className="text-darknight font-bold flex-1">
                      {item.customAttributes[0].value}
                    </h4>
                    <p>{item.quantity}</p>
                    <p className="font-extralight text-gray-800">
                      ${item.customAttributes[1].value}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-md font-bold text-center">Cart is Empty</div>
          )}
          {cart.length > 0 && <CheckoutButton />}
        </div>
      </div>
    </>
  );
}

export default Cart;
