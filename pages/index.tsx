import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Header from "../src/components/Header";
import { increment, decrement } from "../src/slices/basketSlice";
import { itemsInBasket } from "../src/slices/basketSlice";

const Home: NextPage = () => {
  const count = useSelector(itemsInBasket);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div className="">
      <Head>
        <title>Amazon-clone</title>
        <link rel="icon" href="/amazon.ico" />
      </Head>
      
      <Header />

    </div>
  );
};

export default Home;
