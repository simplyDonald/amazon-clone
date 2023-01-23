import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
// styles for carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface IBannerProps {
}

const Banner: FC<IBannerProps> = (props) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      {/* add carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {/* div for each image */}
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71a1nX9Kf0L._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/51oPLhUx7kL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/merch/2019/4852331/GatewayENCA-TallHero-1500x600._CB413527478_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/51JxZ9oEV6L._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
