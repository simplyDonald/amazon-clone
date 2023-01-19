import { FC } from 'react';
import Image from 'next/image';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = (props) => {
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
            className="p-2 h-full w-6 rounded-md flex-grow flex-shrink rounded-l-md cursor-pointer focus:outline-none px-4 "
          />
          <MagnifyingGlassIcon className="h-12 p-4 " />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Jeff Bezos</p>
            <p className=" font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 md:right-7  h-4 w-4 bg-yellow-400 text-center text-black rounded-full">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold mt-2 md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div></div>
    </header>
  );
};

export default Header;
