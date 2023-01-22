import { FC } from 'react';
import { IProduct } from '../typings';
import Product from '../components/Product';





const ProductFeed: FC<{products: Product[]}> = ({products}) => {
  return(
    <div>
      <h3>products hashsah</h3>
      {
        products.map(({id, title, price, description, category, image}) => (
          <Product 
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))
      }
    </div>
  ) ;
};

export default ProductFeed;
