import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import * as React from 'react';
import { ICheckoutProductProps } from '../types/typings';



const CheckoutProduct: React.FunctionComponent<ICheckoutProductProps> = ({id, title, price, rating,description, category, image, hasPrime}) => {
  return (
    <div className='grid grid-cols-5'>
      <Image alt="" src={image} height={200} width={200} style={{objectFit:"contain"}}/>
      {/* middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating).fill(rating).map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500'/>
          ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
      </div>
    </div>
  );
};

export default CheckoutProduct;
