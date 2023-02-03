import React, { useState, useEffect } from "react";
import { Button, Footer, Table, Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    let product = localStorage.getItem("Cart");
    setCart(JSON.parse(product));
    console.log(JSON.parse(product));
  }, []);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < cart.length; i++) {
      temp += cart[i].price;
    }
    setSubtotal(temp);
  }, [cart]);

  const handleSubmit = () => {
    setPaid(true);
    console.log("Payment Successful");
  };

  return (
    <div className="flex max-lg:flex-col">
      <div className="m-6 ml-10">
        <Link to="/">
          <span className="text-3xl font-semibold dark:text-white hover:text-violet-600 lg:hidden">
            Ecommerce.js
          </span>
        </Link>
      </div>
      <div className="mt-12 ml-48 flex flex-col grow max-xl:ml-20 max-md:ml-12 max-md:mr-12 max-lg:ml-24 max-lg:mr-24 max-lg:order-2 max-md:ml-24">
        <div>
          <Link to="/">
            <span className="text-3xl font-semibold dark:text-white hover:text-violet-600 max-lg:hidden">
              Ecommerce.js
            </span>
          </Link>
        </div>

        <div className="mt-8 text-lg text-slate-700">
          Payment{" "}
          <Card className="mt-10">
            {!paid ? (
              <form className="flex flex-col gap-1">
                Credit/debit
                <div>
                  <div className="mb-1">
                    <Label value="Card number" />
                  </div>
                  <TextInput required={true} />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="mb-1">
                      <Label value="Security code" />
                    </div>
                    <TextInput required={true} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1">
                      <Label value="Expiration date" />
                    </div>
                    <TextInput required={true} />
                  </div>
                </div>
                <div>
                  <div className="mb-1">
                    <Label value="Name on card" />
                  </div>
                  <TextInput required={true} />
                </div>
                <Button
                  onClick={() => handleSubmit()}
                  className="mt-4"
                  color="dark"
                >
                  Make Payment
                </Button>
              </form>
            ) : (
              <div>Purchase successful!</div>
            )}
          </Card>
        </div>
        <div>
          <Button
            color="light"
            href="/cart"
            className="border-none w-fit mt-10"
          >
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
            Cart
          </Button>
        </div>
        <Footer.Divider />
        <div className="flex mb-10">
          <p className="text-xs pr-4">Refund policy</p>
          <p className="text-xs pr-4">Shipping policy</p>
          <p className="text-xs pr-4">Privacy policy</p>
          <p className="text-xs pr-4">Terms of service</p>
          <p className="text-xs pr-4">Cancellation policy</p>
        </div>
      </div>
      <div className=" ml-20 bg-stone-100 border-l max-lg:ml-0 max-lg:mr-0 max-lg:pb-10 max-lg:order-1 max-lg:pl-20 max-lg:pr-20">
        <div className="max-md:m-4 m-10 max-lg:ml-36 max-lg:mr-36">
          <Table>
            <Table.Body className="divide-y">
              {cart.map((cart) => (
                <Table.Row key={cart.name} className="border-none">
                  <Table.Cell className="text-gray-900 dark:text-white">
                    <p>{cart.name}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="max-lg:ml-auto max-md:ml-10 ml-80">
                      ${cart.price}
                    </p>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Footer.Divider />
        </div>
        <div className="ml-10 mr-10">
          <div className="flex justify-between text-sm">
            <p>Subtotal</p>
            <p className="text-gray-500 dark:text-white">${subtotal}</p>
          </div>
          <Footer.Divider />
        </div>
      </div>
    </div>
  );
};

export default Payment;
