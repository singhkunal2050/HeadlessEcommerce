import ProductButton from "../../components/ProductButton";
import { client } from "../../utils/ShopifyClient";

function Product({ key, product }) {
  return (
    <main>
      <div className="container">
        <section data-id={key}  className="product-single">
          <div className="product-images">
            {product.images.map((img) => {
              return <img key={img.src}  src={img.src} height="400px" width="400px" />;
            })}
          </div>
          <div className="product-description">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.variants[0].price}</p>
            <ProductButton productId={product.variants[0].id} />
          </div>
        </section>
        <section className="suggestions"></section>
      </div>
    </main>
  );
}

export default Product;

export async function getStaticPaths(productSlug) {
  let products = await client.product.fetchAll();
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
