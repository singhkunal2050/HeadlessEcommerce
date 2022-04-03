import ProductSingle from "../components/ProductSingle";
import { client } from "../utils/ShopifyClient";
import { useContext } from "react";
import { ProductContext } from "../context/productsContext";

function Shop({ products }) {

  const { productsGlobal , setProductsGlobal } = useContext(ProductContext);
  setProductsGlobal(products);
  // console.log(products);
  return (
    <main className="shop">
      <div className="container">
        <div className="products">
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
