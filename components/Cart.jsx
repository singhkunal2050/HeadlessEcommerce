import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Image from "next/image";
import ProductButton from "./ProductButton";
import CheckoutButton from "./CheckoutButton";

function Cart() {
  const { cart, setCart, cartCount, setCartCount , cartVisibility , setCartVisibility} =
    useContext(CartContext);

  return (
    <>
      
        {/* <div className="cart-floating-tag">
          {JSON.stringify(cart)}
        </div> */}

        <div className="cart-container transition-all duration-300 ease-in-out z-10 p-4 fixed inset-0 min-h-screen bg-white " style={{ transform: cartVisibility ? 'translateX(0)' : 'translateX(110%)' }}>
          <span className="close-cart"  onClick={()=>setCartVisibility(!cartVisibility)} >
            Close
          </span>

        <div className="cart-header">
          <h1>Cart</h1>
        </div>
        <div className="cart-body">
            
            {cart.items.length>0 && <CheckoutButton/>}
            {cart.items.map(item=>{
              return(
                <div key={item.variantId} className="cart-item">
                  <div className="cart-item-img">
                    <Image src={item.customAttributes[2].value} alt={item.customAttributes[0].value}  width="150px" height="150px" />
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.customAttributes[0].value}</h4>
                    <p>{item.quantity}</p>
                    <p>${item.customAttributes[1].value}</p>
                    <ProductButton productId={item.variantId} />                
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      
    </>
  );
}

export default Cart;
