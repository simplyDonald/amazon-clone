import  {FC} from 'react';
import React from "react";
import Header from '../src/components/Header';

interface ICheckoutProps {
}

const Checkout: FC<ICheckoutProps> = (props) => {
  return(
    <div className='bg-gray-100'>
      <Header />
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
