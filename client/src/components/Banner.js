import React from "react";
import { Carousel } from "flowbite-react";
import Image1 from "../assets/jar-25.jpg";
import Image2 from "../assets/S-21.jpg";
import Image3 from "../assets/pump-bottle-16.jpg";

const Banner = () => {
  return (
    <div className="h-80 sm:h-96 md:96 xl:h-screen 2xl:h-screen">
      <Carousel>
        <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
          <img src={Image1} />
        </div>
        <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
          <img src={Image2} />
        </div>
        <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
          <img src={Image3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
