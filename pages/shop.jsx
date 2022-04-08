import ProductSingle from "../components/ProductSingle";
import { client } from "../utils/ShopifyClient";
import { useContext , useEffect } from "react";
import { ProductContext } from "../context/productsContext";
import { CartContext } from "../context/cartContext"

function Shop({ products }) {

  const { productsGlobal , setProductsGlobal } = useContext(ProductContext);
  const { setCart } = useContext(CartContext);
  
  useEffect(()=>{
    if(localStorage.cart){
      setCart(JSON.parse(localStorage.cart))
      console.log('Receiving from local ')
    }
  },[])

  useEffect(() => {
    setProductsGlobal(products);
  }, []);

  // console.log(products);
  return (
    <main className="shop font-montserrat ">
      <div className="container mx-auto max-w-5xl">
        <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-2 md:px-20  ">
          {products.map((product) => {
            return (
              <ProductSingle key={product.id} product={product} />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Shop;

export async function getStaticProps(context) {
  //   console.log(context)
  let products = await client.product.fetchAll();
  let infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  let policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any

  products = JSON.parse(JSON.stringify(products));
  infos = JSON.parse(JSON.stringify(infos));
  policies = JSON.parse(JSON.stringify(policies));

  return {
    props: {
      products,
      infos,
      policies,
    }, // will be passed to the page component as props
  };
}
