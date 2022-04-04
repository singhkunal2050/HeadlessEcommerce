import React from "react";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { client } from "../utils/ShopifyClient";
import { useState, useEffect } from "react";

function CheckoutButton() {
  const [checkoutState, setCheckoutState] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    async function foo() {
      // let response = await fetch('/api/createCheckout')
      // let checkout = await response.json();
      // let checkoutId = checkout.id
      // checkout = await fetch('/api/createCheckout')
      // fetch(`https://jsonplaceholder.typicode.com/todos/${parseInt(Math.random()*50)}`)
      // .then(response => response.json())
      // .then(json => console.log(json))

      console.log(client);
      let checkout = await client.checkout.create();
      checkout = await client.checkout.addLineItems(checkout.id, cart.items);
      window.open(checkout.webUrl, "_blank");
    }
    foo();
  }, [checkoutState]);
  return (
    <button
      className="check-out"
      onClick={() => setCheckoutState(!checkoutState)}
    >
      CheckoutButton
      <p>{checkoutState}</p>
    </button>
  );
}

export default CheckoutButton;

// export async function getServerSideProps(){
//     const { cart } = useContext(CartContext)
//     client.checkout.create().then((checkout) => {
//         client.checkout.addLineItems(checkout.id, cart.items).then((checkout) => {
//             console.log(checkout.lineItems);
//             console.log("Items added to checkout object ")
//             window.location(checkout.webUrl , "_blank");
//         });
//     });
// }
