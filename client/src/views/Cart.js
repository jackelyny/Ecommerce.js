import React, { useState, useEffect } from "react";
import { Table, Card, Button, Dropdown } from "flowbite-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [tax, setTax] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  //load cart
  useEffect(() => {
    let product = localStorage.getItem("Cart");
    setCart(JSON.parse(product));
    console.log(JSON.parse(product));
  }, []);

  //load subtotal
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < cart.length; i++) {
      temp += cart[i].price;
    }
    setSubtotal(temp);
  }, [cart]);

  //load tax
  useEffect(() => {
    let tax = (5.5 / 100) * subtotal;
    setTax(Number(tax.toFixed(2)));
  }, [subtotal]);

  //load total + tax
  useEffect(() => {
    setTotal(subtotal + tax);
  }, [tax]);

  const removeItem = (item) => {
    let temp = cart.map((item) => {
      return { ...item };
    });
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === item) {
        temp.splice(i, 1);
        break;
      }
    }
    setCart(temp);
    localStorage.setItem("Cart", JSON.stringify(temp));
  };

  return (
    <div>
      <Navigation />
      <Button color="dark" href="/shop" className="w-fit m-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back to store
      </Button>
      <div className="m-10 grid grid-cols-2 max-md:grid-cols-1">
        <div className="">
          <h1 className="font-bold text-2xl my-5">Shopping Cart</h1>
          <Table striped={true}>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {cart.map((cart) => (
                <Table.Row
                  key={cart.name}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <p>{cart.name}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{cart.description}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>${cart.price}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => removeItem(cart.name)}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                    >
                      Remove
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="ml-10 max-md:ml-0">
          <h1 className="font-bold text-2xl my-5">Order Summary</h1>
          <Card className="bg-gray-400/25">
            <div className="flex justify-between">
              <span className="text-md">Subtotal: </span>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                ${subtotal}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-md">Sales Tax: </span>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                ${tax}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-md font-semibold">Order Total: </span>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                ${total}
              </span>
            </div>
            <div className="flex justify-end">
              <Button color="dark" href="/payment" className="w-fit ">
                Proceed to checkout
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
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
