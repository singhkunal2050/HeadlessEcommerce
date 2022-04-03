import Image from "next/image";
import Link from "next/link";
import ProductButton from "./ProductButton";

function ProductSingle({product}) {
  return (
    <div className="product" key={product.id}>
      <div className="product-image">
        <Image
          src={product.images[0].src}
          alt={product.title}
          width="400px"
          height="400px"
        />
      </div>
      <div className="product-info">
        <Link href={"/product/" + product.handle}>
          <a>
            <h3>{product.title}</h3>
          </a>
        </Link>
        <p className="product-details-para"> {product.description}</p>
        <p>
          <strong>{product.variants[0].price}</strong>
        </p>
        <ProductButton productId={product.variants[0].id} />
      </div>
    </div>
  );
}

export default ProductSingle;
