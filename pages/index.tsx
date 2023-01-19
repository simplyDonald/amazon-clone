import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import { increment, decrement } from "../src/slices/basketSlice";
import { itemsInBasket } from "../src/slices/basketSlice";

const Home: NextPage = () => {
  const count = useSelector(itemsInBasket);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon-clone</title>
        <link rel="icon" href="/amazon.ico" />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        {/* Product feed */}
      </main>

    </div>
  );
};

export default Home;
