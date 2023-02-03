import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Dropdown, Button, Toast } from "flowbite-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Shop = (props) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/products").then((response) => {
      setProductList(response.data);
      console.log(response.data);
    });
    setLoading(false);
  }, []);

  const addToCart = (name, description, price) => {
    let oldCart = JSON.parse(localStorage.getItem("Cart"));
    let cart = oldCart.map((item) => {
      return { ...item };
    });
    const itemObj = {
      name: name,
      description: description,
      price: price,
    };
    cart.push(itemObj);
    localStorage.setItem("Cart", JSON.stringify(cart));
    props.setCart(cart);
  };

  return (
    <div>
      {loading === true ? null : (
        <div>
          <Navigation />
          <div className="flex justify-end m-10">
            <Dropdown label="Sort by" dismissOnClick={false} color="dark">
              <Dropdown.Item>Alphabetical Order</Dropdown.Item>
              <Dropdown.Item>Highest Price</Dropdown.Item>
              <Dropdown.Item>Lowest Price</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="m-20 gap-7 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {productList.map((product) => (
              <Card key={product.productName} imgSrc={product.productImage}>
                <p className="font-bold">{product.productName}</p>
                <p>{product.productDescription}</p>
                <p>${product.productPrice}</p>
                <Button
                  onClick={() =>
                    addToCart(
                      product.productName,
                      product.productDescription,
                      product.productPrice
                    )
                  }
                  color="dark"
                  className="place-self-end"
                >
                  Add to cart
                </Button>
              </Card>
            ))}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Shop;
