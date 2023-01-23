import type { NextPage } from "next";
import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import ProductFeed from "../src/components/ProductFeed";
import { itemsInBasket } from "../src/slices/basketSlice";
import { IProduct } from "../src/typings";

const Home: NextPage<{ products: IProduct[] }> = ({
  products,
}) => {
  const count = useSelector(itemsInBasket);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon-clone</title>
        <link rel="icon" href="/amazon.ico" />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;


export async function getServerSideProps(params: NextPageContext) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    }

  }
}
