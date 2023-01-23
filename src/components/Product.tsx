import Image from 'next/image';
import React from "react";
import {FC, useState} from 'react';
import {IProductProps} from '../typings';
import {StarIcon} from '@heroicons/react/24/solid';
import { motion } from "framer-motion";


const MAX_RATING = 5;
const MIN_RATING = 1;


const Product: FC<IProductProps> = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => { 
  // randomize number of stars
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING));

  const [hasPrime] = useState(Math.random() < 0.5);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="relative grid m-5 bg-white z-30 p-10 group"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="absolute top-2 right-2 text-xs italic">{category}</p>
      <Image
        className="group-hover:scale-110 transition duration-300 ease-in-out transform justify-self-center"
        alt=""
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
      />
      <h4 className="my-3 ">{title}</h4>

      <div className="flex">
        {/* create an array and fill it with the random raing number */}
        {Array(rating)
          .fill(rating)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <p>CAD {price}</p>
      </div>
      {hasPrime && (
        <div className="flex items-center spaxe-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </motion.div>
  );
};

export default Product;
