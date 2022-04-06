import React from "react";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { client } from "../utils/ShopifyClient";
import { useState, useEffect } from "react";

function CheckoutButton() {
  const { cart } = useContext(CartContext);

  async function createLinkandRedirect() {
    console.log("creating link");
    let checkout = await client.checkout.create();
    checkout = await client.checkout.addLineItems(checkout.id, cart);
    window.open(checkout.webUrl, "_blank");
  }

  return (
      <button className="check-out z-10 bg-darknight py-3 px-2 text-primaryaccent my-4 w-full" onClick={createLinkandRedirect}>
        CheckoutButton
      </button>
  );
}

export default CheckoutButton;

// export async function getServerSideProps(){
//     const { cart } = useContext(CartContext)
//     client.checkout.create().then((checkout) => {
//         client.checkout.addLineItems(checkout.id, cart).then((checkout) => {
//             console.log(checkout.lineItems);
//             console.log("Items added to checkout object ")
//             window.location(checkout.webUrl , "_blank");
//         });
//     });
// }
