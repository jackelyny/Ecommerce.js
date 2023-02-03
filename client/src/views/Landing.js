import React from "react";
import { Button } from "flowbite-react";

import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Cards />
      <div className="flex justify-center m-10">
        <Button color="dark" href="/shop">
          Shop All
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
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
