import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <Container>
      <div className="hero text-center md:text-left grid grid-cols-1 md:grid-cols-2 place-items-center py-8">
        <div className="hero-text py-4">
          <h1 className="text-4xl md:text-6xl font-bold my-2 ">
            Shop All you Need at One Place!!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400  my-2">
            Buy Awesome Products With Headless Ecommerce Daily!
          </p>
          <Link href="/shop">
            <a className="cta cta-primary bg-darknight text-white px-4 py-2 my-2">
              Shop Now
            </a>
          </Link>
        </div>
        <div className="hero-image flex justify-center px-8">
          <Image
            src="https://source.unsplash.com/400x400?shop"
            alt=""
            className="rounded-lg shadow-xl "
            height="500px"
            width="500px"
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
