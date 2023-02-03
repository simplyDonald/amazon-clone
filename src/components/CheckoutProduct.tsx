import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import * as React from 'react';
import { ICheckoutProductProps } from '../types/typings';



const CheckoutProduct: React.FunctionComponent<ICheckoutProductProps> = ({id, title, price, rating,description, category, image, hasPrime}) => {

  const removeBasketItem = () => {
    // remove item from redux

  }
  return (
    <div className="grid grid-cols-5">
      <Image
        alt=""
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
      />
      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p className="font-bold">CAD {price}</p>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <div className="flex justify-between">
          {/* setup input field for Qty */}
          <p className=" text-center flex-grow button cursor-pointer text-lg font-bold">-</p>
          <input
            type="number"
            min={1}
            className=" bg-gray-200 w-12 text-lg text-center  text-gray-700"
            value={6}
          />
          <p className="text-center flex-grow button cursor-pointer text-lg font-bold">+</p>
        </div>
        <button onClick={removeBasketItem} className="button">
          <p>Remove from Basket</p>
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
