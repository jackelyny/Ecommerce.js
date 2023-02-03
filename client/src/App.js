import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./views/Landing";
import Shop from "./views/Shop";
import Cart from "./views/Cart";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Payment from "./views/Payment";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route
            exact
            path="/shop"
            element={<Shop cart={cart} setCart={setCart} />}
          ></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
