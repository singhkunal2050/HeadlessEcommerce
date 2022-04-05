import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { ProductContext } from "../context/productsContext";

function ProductButton({ productId }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart, cartCount, setCartCount } = useContext(CartContext);
  const { productsGlobal, setProductsGlobal } = useContext(ProductContext);

  function updateCart(e) {
    let currentProduct = productsGlobal.find(
      (product) => product.variants[0].id == productId
    );
    if (cart.items.length == 0) {
      setCart({
        items: [
          {
            variantId: productId,
            quantity: quantity,
            customAttributes: [
              { key: "title", value: currentProduct.title },
              { key: "price", value: currentProduct.variants[0].price },
              { key: "img", value: currentProduct.images[0].src },
            ],
          },
        ],
      });
    } else {
      let temp = [
        ...cart.items,
        {
          variantId: productId,
          quantity: quantity,
          customAttributes: [
            { key: "title", value: currentProduct.title },
            { key: "price", value: currentProduct.variants[0].price },
            { key: "img", value: currentProduct.images[0].src },
          ],
        },
      ];
      const reducedArr = temp.reduce((acc, cur) => {
        acc[cur.variantId]
          ? (acc[cur.variantId].quantity += cur.quantity)
          : (acc[cur.variantId] = cur);
        return acc;
      }, {});
      let combinedLineItems = Object.values(reducedArr);
      console.log(combinedLineItems);
      setCart({ items: [...combinedLineItems] });
    }
    // alert("Product Added to Cart");
    console.log(cart);
    setQuantity(1);
  }

  function handleQuantityChange(e) {
    if (e.target.dataset.operation.includes("plus")) {
      setQuantity(quantity + 1);
    } else if (e.target.dataset.operation.includes("minus") && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="add-to-cart-wrapper flex ">
      <div className="update-quantity-wrapper flex flex-col ">
        <button
          className="border-2 py-0 px-2 h-5 border-gray-300 flex justify-center items-center" 
          data-operation="plus"
          onClick={handleQuantityChange}
        >
       +
        </button>
       
        <button
          className="border-2 py-0 px-2 h-5 border-gray-300 flex justify-center items-center"
          data-operation="minus"
          onClick={handleQuantityChange}
        >
          -
        </button>
      </div>

      <input
        readOnly
        type="number"
        name="1"
        min={1}
        id="quantity"
        value={quantity}
        className="w-10 border-2 border-gray-300 text-center flex-[1]"
      />
      <button
        onClick={updateCart}
        className="add-to-cart bg-rose-700 text-white font-bold flex-[4]"
        data-product-id={productId}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductButton;
