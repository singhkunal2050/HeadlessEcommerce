import { createContext, useState, useEffect } from "react";
export const CartContext = createContext({});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const cartStore = { cart, setCart, cartVisibility, setCartVisibility };


  // useEffect(()=>{
  //   if(localStorage.cart!="")
  //     setCart(JSON.parse(localStorage.cart))
  // },[])


  return (
    <CartContext.Provider value={cartStore}>
      {props.children}
    </CartContext.Provider>
  );
};
