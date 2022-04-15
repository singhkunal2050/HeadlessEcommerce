import Head from "next/head";
import Container from "../components/Container";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import {
  FcAbout,
  FcDebt,
  FcSafe,
  FcDiploma1,
  FcCamcorderPro

} from "react-icons/fc";

import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main className="font-montserrat ">
      <Head>
        <title>HeadLess Commerce</title>
      </Head>

      <Hero />

      <Container>
        <div className="py-8">
          <h1 className="text-3xl font-bold text-center"> Our Features </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 py-8 gap-8">
            <div className="p-6 border dark:border-gray-600 shadow-xl flex flex-col items-center rounded-lg overflow-hidden">
              <h2 className="font-bold text-2xl">Affordable</h2>
              <FcDebt className="text-darknight" size={80} />
            </div>
            <div className="p-6 border dark:border-gray-600 shadow-xl flex flex-col items-center rounded-lg overflow-hidden">
              <h2 className="font-bold text-2xl">Fast</h2>
              <FcDiploma1 className="text-darknight" size={80} />
            </div>
            <div className="p-6 border dark:border-gray-600 shadow-xl flex flex-col items-center rounded-lg overflow-hidden">
              <h2 className="font-bold text-2xl">Safe</h2>
              <FcSafe
                className="text-darknight"
                size={80}
              />
            </div>
            <div className="p-6 border dark:border-gray-600 shadow-xl flex flex-col items-center rounded-lg overflow-hidden">
              <h2 className="font-bold text-2xl">Interactive</h2>
              <FcAbout className="text-darknight" size={80} />
            </div>
          </div>
        </div>
      </Container>

      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr to-darknight from-darknight bg-cover bg-no-repeat bg-fixed">
        <h4 className="text-4xl text-white font-extrabold max-w-[40ch] text-center p-6 ">
          Buy Quality Products with Headless Ecommerce!
        </h4>
        <FcCamcorderPro className="text-white" size={200} />
      </section>

      <FAQ/>
    
    </main>
  );
}
