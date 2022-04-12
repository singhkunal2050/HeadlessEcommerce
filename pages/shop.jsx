import ProductSingle from "../components/ProductSingle";
import { client } from "../utils/ShopifyClient";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productsContext";
import Container from "../components/Container";

function Shop({ products }) {
  const { productsGlobal, setProductsGlobal } = useContext(ProductContext);
  const [search, setsearch] = useState();

  useEffect(() => {
    setProductsGlobal(products);
  }, []);

  // console.log(products);
  return (
    <main className="shop font-montserrat  ">
      <Container>
        <div className=" p-4 md:px-10 flex gap-4 items-center sticky top-[68px] left-0 right-0 z-10">
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="px-3 py-2 w-[80%] rounded-xl border-4 mx-auto"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-2 md:px-20  ">
          {!search ? (
            products.map((product) => {
              return <ProductSingle key={product.id} product={product} />;
            })
          ) : (
            <div>
              {productsGlobal
                .filter((product) =>
                  product.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((product) => {
                  return <ProductSingle key={product.id} product={product} />;
                })}
              )}
            </div>
          )}
        </div>
      </Container>
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
