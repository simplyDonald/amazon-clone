import { FC } from 'react';
import React from "react";
import Image from 'next/image';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";


const Header: FC = () => {
  return (
    <header className="">
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 pr-6 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            className="cursor-pointer"
            alt="logo"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 rounded-md flex-grow flex-shrink rounded-l-md  focus:outline-none px-4 "
          />
          <MagnifyingGlassIcon className="h-12 p-4 " />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap  ">
          <div onClick={() => signIn()} className="link">
            <p>Hello Jeff Bezos</p>
            <p className=" font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="hover:animate-wiggle relative flex items-center link">
            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center text-black rounded-full  group-hover:animate-wiggle">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Food & Grocery</p>
        <p className="hidden lg:inline-flex link">Prime</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex link">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
