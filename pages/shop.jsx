import ProductSingle from "../components/ProductSingle";
import { client } from "../utils/ShopifyClient";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productsContext";
import Container from "../components/Container";
import Head from "next/head";

function Shop({ products, nextPage }) {
  const { productsGlobal, setProductsGlobal } = useContext(ProductContext);
  const [search, setsearch] = useState();

  useEffect(() => {
    setProductsGlobal(products);
    console.log(products)
  }, []);

  // For Future pagination requirements
  // useEffect(() => {
  //   async function getData() {
  //     let products = await client.product.fetchAll(10);
  //     let nextPage = await client.fetchNextPage(products);

  //     nextPage = JSON.parse(JSON.stringify(nextPage));
  //     products = JSON.parse(JSON.stringify(products));
  //     console.log("heyyyyyy");
  //     console.log(nextPage);
  //     console.log("heyyyyyy");
  //   }
  //   getData();
  // }, []);

  // console.log(products);
  // console.log(nextPage);

  return (
    <>
      <Head>
        <title>HeadLess Commerce | Shop</title>
      </Head>

      <main className="shop font-montserrat  ">
        <Container>
          <div className=" p-4 md:px-10 flex gap-4 items-center sticky top-[60px] left-0 right-0 z-[1]">
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className="px-3 py-2 w-full md:w-[80%] rounded-sm border-2 dark:bg-gray-600 dark:border-gray-600 mx-auto "
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-2 md:px-20 ">
            {!search && products ? (
              products.map((product) => {
                return <ProductSingle key={product.id} product={product} />;
              })
            ) : (
              <>
                {productsGlobal ? productsGlobal
                  .filter((product) =>
                    product.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((product) => {
                    return <ProductSingle key={product.id} product={product} />;
                  }) : <p className="text-center mb-6">No Products Found</p>  }
              </>
            )}
          </div>

          {/* <div className="flex justify-center py-4">
            <button className="bg-darknight py-2 px-3 text-center mx-auto">
              Load More
            </button>
          </div> */}
        </Container>
      </main>
    </>
  );
}

export default Shop;

export async function getServerSideProps({query}) {
  // console.log(query.page)
  try {
    let products = await client.product.fetchQuery({ first: 80 });
    // let products = await client.product.fetchAll(10);
    let nextPage = await client.fetchNextPage(products);
    let infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
    let policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any

    nextPage = JSON.parse(JSON.stringify(nextPage));
    products = JSON.parse(JSON.stringify(products));
    infos = JSON.parse(JSON.stringify(infos));
    policies = JSON.parse(JSON.stringify(policies));

    return {
      props: {
        products,
        nextPage,
        infos,
        policies,
      }, // will be passed to the page component as props
    };
  } catch (err) {
    let e = JSON.parse(JSON.stringify(err))
    return {
      props: {
        e,
      }, // will be passed to the page component as props
    };
  }
}
