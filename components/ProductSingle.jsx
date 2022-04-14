import Image from "next/image";
import Link from "next/link";
import ProductButton from "./ProductButton";

function ProductSingle({ product }) {
  return (
    <div
      className="product border-2 dark:border-gray-600 shadow-sm hover:shadow-xl rounded-lg overflow-hidden"
      key={product.id}
    >
      <div className="product-image">
        <Image
          src={product.images[0].src}
          alt={product.title}
          className="object-cover"
          width="700px"
          height="500px"
        />
      </div>
      <div className="product-info flex flex-col">
        <div className="p-4">
          <Link href={"/product/" + product.handle}>
            <a className="text-lg font-bold pb-2">
              <h3>{product.title}</h3>
            </a>
          </Link>
          <p className="mb-4">
            <strong className="text-sm text-gray-600 dark:text-gray-400">
             ₹{product.variants[0].price}
            </strong>
          </p>
        </div>

        <ProductButton productId={product.variants[0].id} />
      </div>
    </div>
  );
}

export default ProductSingle;
