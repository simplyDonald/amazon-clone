import { FC } from 'react';
import Image from 'next/image';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = (props) => {
  return (
    <header className=''>
      {/* top nav */}
      <div>
        <div> 
          <Image src='https://links.papareact.com/f90' 
            className='cursor-pointer'
            alt="logo"
            width={150} 
            height={40} 
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* bottom nav */}
      <div></div>
    </header>
  ) ;
};

export default Header;
