import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import * as React from 'react';
import { ICheckoutProductProps } from '../types/typings';
import { addToBasket, removeBasketItem, removeBasketGroup } from '../slices/basketSlice'
import { useDispatch } from 'react-redux';



const CheckoutProduct: React.FunctionComponent<ICheckoutProductProps> = ({id, title, price, rating,description, category, image, hasPrime , count}) => {

  const dispatch = useDispatch();

  const addItemToBasket = () => {

    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    }

    // send the product as an action to the redux store
    dispatch(addToBasket(product))
  }


  const removeItemFromBasket = () => {
    // remove item from redux
    dispatch(removeBasketItem({id}));
  };


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
          <button
            // disabled={count === 1}
            onClick={removeItemFromBasket}
            className={`flex justify-center items-center flex-grow button cursor-pointer text-lg font-bold focus:ring-yellow-100 
          `}
          >
            -
          </button>
          <input
            type="number"
            className=" bg-gray-100 w-12 text-lg text-center  text-gray-700 outline-none"
            value={count}
          />
          <button
            onClick={addItemToBasket}
            className="text-center flex-grow button cursor-pointer text-lg font-bold focus:ring-yellow-100"
          >
            +
          </button>
        </div>
        <button
          className="button"
          onClick={() => {
            dispatch(removeBasketGroup({ id }));
          }}
        >
          <p>Remove from Basket</p>
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
