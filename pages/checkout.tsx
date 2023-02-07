import  {FC} from 'react';
import Image from 'next/image';
import React from "react";
import Header from '../src/components/Header';
import { useSelector } from 'react-redux';
import { selectCartItems, selectItems } from '../src/slices/basketSlice';
import CheckoutProduct from '../src/components/CheckoutProduct';
import {  ICheckoutProductProps } from '../src/types/typings';


interface ICheckoutProps {
}

const Checkout: FC<ICheckoutProps> = (props) => {

  const cartItems = useSelector(selectCartItems) as ICheckoutProductProps[];



  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/*` left*/}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt="advert-banner"
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {cartItems.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  rating={item.rating}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  count={item.count}
                />
              ))}
          </div>
        </div>

        {/* right */}
        <div>
          {cartItems.length > 0 && (
            <>
              <h2>
                Subtotal (
                {/* summation of the quantity of items in cartItems */}
                {cartItems.reduce((count, item) => count + item.count, 0)})
                items
              </h2>
              <span>
                CAD{" "}
                {/* mathematical summation of the total price from cartItems */}
                {cartItems.reduce(
                  (total, item) =>
                    Number((total + item.count * item.price).toFixed(2)),
                  0
                )}
              </span>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
