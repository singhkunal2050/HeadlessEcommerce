import React from "react";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { client } from "../utils/ShopifyClient";

function CheckoutButton() {
  const { cart } = useContext(CartContext);
  function checkout() {
    let checkOut = fetch("/api/createCheckout");
    let webUrl = fetch("api/createwebUrl?")
    client.checkout.addLineItems(checkOut.id, cart.items).then((checkout) => {
      console.log(checkout.lineItems);
      console.log("Items added to checkout object ");
      window.location(checkout.webUrl, "_blank");
    });
  }

  return (
    <button className="check-out" onClick={checkout}>
      CheckoutButton
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
