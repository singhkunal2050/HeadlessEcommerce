import React from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import { CgClose, CgMathPlus, CgMathMinus } from "react-icons/cg";
import { GiTrashCan } from "react-icons/gi";

function Cart() {
  const { cart, setCart, cartVisibility, setCartVisibility } =
    useContext(CartContext);

  useEffect(() => {
    if (localStorage.cart) {
      setCart(JSON.parse(localStorage.cart));
      console.log("Receiving from local ");
    }
  }, []);

  function updateCart(e) {
    let operation = e.target.dataset.operation;
    let productId = e.target.dataset.productId;
    // increment decrement cart item
    let newCart = cart.filter((item) => {
      if (item.variantId == productId) {
        if (operation == "plus") {
          item.quantity += 1;
        } else if (operation == "minus") {
          item.quantity -= 1;
        }
      }
      return item.quantity > 0;
    });
    localStorage.cart= JSON.stringify(newCart)
    setCart(newCart);
    console.log(cart)
  }

  return (
    <>
      <div
        className="cart-container dark:bg-gray-800 dark:text-purple-50 font-montserrat  transition-all duration-300 ease-in-out z-20 px-4 fixed right-0 top-0 bottom-0 w-full  md:w-[400px] min-h-screen bg-white"
        style={{
          transform: cartVisibility ? "translateX(0)" : "translateX(110%)",
        }}
      >
        <div className="cart-header flex justify-between  items-center py-4  z-10 bg-white dark:bg-gray-800 dark:text-purple-50">
          <h1 className="font-bold text-xl ">Cart</h1>

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
        <div className="cart-body overflow-y-auto h-[80vh] flex flex-col gap-2">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div
                  key={item.variantId}
                  className="cart-item flex border-2 dark:border-gray-600 shadow-sm rounded-lg overflow-hidden min-h-[100px] mr-4"
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
                  <div className="cart-item-details p-4  pt-1 flex flex-col flex-1">
                    <h4 className="text-darknight dark:text-gray-200 font-bold flex-1">
                      {item.customAttributes[0].value}
                    </h4>
                    <div  className="flex justify-between items-end" >
                      <div>
                        <p className="text-xs py-2">
                          Quantity : {item.quantity}
                        </p>
                        <div className="flex items-center gap-1">
                          <button
                            data-product-id={item.variantId}
                            data-operation="minus"
                            onClick={updateCart}
                            className="font-semibold text-gray-400 h-6 w-6 flex justify-center items-center border-2 rounded-full"
                          >
                            -
                          </button>
                          <button
                            data-product-id={item.variantId}
                            data-operation="plus"
                            onClick={updateCart}
                            className="font-semibold text-gray-400 h-6 w-6 flex justify-center items-center border-2 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="font-extralight text-gray-800">
                        ₹{item.customAttributes[1].value * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-md font-bold text-center">Cart is Empty</div>
          )}
        </div>
        {cart.length > 0 && <CheckoutButton />}
      </div>
    </>
  );
}

export default Cart;
