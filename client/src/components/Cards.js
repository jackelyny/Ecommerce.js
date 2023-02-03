import React from "react";
import { Card } from "flowbite-react";
import Image1 from "../assets/candle-05.jpg";
import Image2 from "../assets/square-bottle-01.jpg";
import Image3 from "../assets/skincarecard.jpg";

const Cards = () => {
  return (
    <div className="gap-7 flex lg:justify-center m-20 max-md:flex-col max-md:items-center">
      <Card imgSrc={Image1} className="w-96">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Scented Candles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </h5>
      </Card>
      <Card imgSrc={Image2} className="w-96">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Customized Shampoos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </h5>
      </Card>
      <Card imgSrc={Image3} className="w-96">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Skin Care Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </h5>
      </Card>
    </div>
  );
};

export default Cards;
