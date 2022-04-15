import Container from "../../components/Container";
import ProductButton from "../../components/ProductButton";
import { client } from "../../utils/ShopifyClient";
import parse from "html-react-parser";
import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi"
 
function Product({ key, product }) {
  // console.log(product)
  return (
    <main className="font-montserrat">
      <Container>
        <div className="pt-6 font-montserrat">
          <p className="flex gap-2 items-center text-2xl">
            <Link href={`/shop`}>
              <a className="hover:underline">Shop</a> 
            </Link>
            <HiArrowSmRight />
            <Link href={`/product/${product.handle}`}>
              <a className="hover:underline" >{product.title}</a>
            </Link>
          </p>
        </div>
        <section
          data-id={key}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 py-8 font-montserrat"
        >
          <div className="product-images md:p-4">
            {product.images.map((img) => {
              return (
                <img
                  key={img.src}
                  src={img.src}
                  height="1000px"
                  width="1000px"
                />
              );
            })}
          </div>
          <div className="product-description pt-4">
            <h1 className="text-2xl md:text-5xl font-bold font-montserrat mb-6">
              {product.title}
            </h1>
            <p className="mb-6">{product.description.substr(0, 200)}...</p>
            <p className="mb-6">${product.variants[0].price}</p>
            <ProductButton productId={product.variants[0].id} />
          </div>
        </section>
        <section>
          <div className="mb-2 prose lg:prose-sm font-montserrat text-darknight dark:!text-primaryaccent dark:prose-headings:text-white max-w-4xl pb-8 mx-auto">
            {parse(product.descriptionHtml)}
          </div>
        </section>
        <section className="suggestions"></section>
      </Container>
    </main>
  );
}

export default Product;

export async function getStaticPaths(productSlug) {
  let products = await client.product.fetchQuery({first:80});
  products = JSON.parse(JSON.stringify(products));

  let paths = products.map((product) => {
    return `/product/${product.handle}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //   console.log(context)
  let product = await client.product.fetchByHandle(params.productSlug);
  product = JSON.parse(JSON.stringify(product));
  return {
    props: {
      product,
    }, // will be passed to the page component as props
  };
}
