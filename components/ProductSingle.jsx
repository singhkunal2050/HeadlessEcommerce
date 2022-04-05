import Image from "next/image";
import Link from "next/link";
import ProductButton from "./ProductButton";

function ProductSingle({product}) {
  return (
    <div className="product bottom-2 shadow-sm hover:shadow-xl" key={product.id}>
      <div className="product-image">
        <Image
          src={product.images[0].src}
          alt={product.title}
          width="600px"
          height="600px"
        />
      </div>
      <div className="product-info py-4 flex flex-col">
        <Link href={"/product/" + product.handle}>
          <a className="text-xl font-bold pb-2">
            <h3>{product.title}</h3>
          </a>
        </Link>
        <p>
          <strong className="text-sm text-gray-600" >${product.variants[0].price}</strong>
        </p>
        <ProductButton productId={product.variants[0].id} />
      </div>
    </div>
  );
}

export default ProductSingle;
