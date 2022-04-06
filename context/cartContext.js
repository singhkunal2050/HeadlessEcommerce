import { createContext , useState , useEffect } from "react";
export const CartContext = createContext({});

export const CartProvider = (props) => {

    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState({
        items: [],
    });
    const [cartVisibility, setCartVisibility] = useState(false);

    let [productsGlobal, setProductsGlobal] = useState();


  const cartStore = {cartCount,setCartCount , cart,setCart,cartVisibility,setCartVisibility};

  return (
    <CartContext.Provider value={cartStore}>
      {props.children}
    </CartContext.Provider>
  );
};
