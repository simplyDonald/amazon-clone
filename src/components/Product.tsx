import {FC} from 'react';

interface IProductProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Product: FC<IProductProps> = (props) => {
  return(
    <div>
      
    </div>
  ) ;
};

export default Product;
