import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-darknight  font-montserrat ">
      <div className="container max-w-5xl mx-auto text-center text-primaryaccent py-10  ">
        <p>&copy; 2022 - Headless Ecommerce</p>
        <p className="pt-2">
          Made with ♥ by
          <a
            className="px-1 font-bold"
            target="_blank"
            rel="noreferrer"
            href="https://www.singhkunal2050.dev"
          >
            {" "}
            @singhkunal2050{" "}
          </a>
        </p>
        <h2 className="pt-2 pb-2 text-lg font-bold">Stack</h2>
        <p>React | Nextjs | Nodejs | TailwindCSS | JWT | Mongodb | Shopify Storefront API</p>
        <div className="flex gap-4 justify-center pt-4">
          <Image src="/react.png" width={45} height={40} />
          <Image src="/nextjs.png" width={40} height={40} />
          <Image src="/node.webp" width={40} height={40} />
          <Image src="/tailwind.png" width={40} height={40} />
          <Image src="/jwt.png" width={40} height={40} />
          <Image src="/mongodb.svg" width={40} height={40} />
          <Image src="/shopify.png" width={40} height={40} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
