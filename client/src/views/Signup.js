import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Signup = () => {
  var navigate = useNavigate();

  const navUser = (path) => {
    navigate(path);
  };

  return (
    <div className="h-screen">
      <Navigation />
      <div className="grid place-items-center">
        <Card className="p-6">
          <p className="text-3xl font-bold pb-5">Sign up</p>
          <form className="flex flex-col gap-5">
            <input type="text" placeholder="Username" className="rounded-lg" />
            <input type="text" placeholder="Email" className="rounded-lg" />
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg"
            />

            <button className="p-2 rounded-lg bg-violet-600 text-white">
              <p>Submit</p>
            </button>
            <button className="border border-solid border-black rounded-lg">
              <span className="flex items-center justify-center p-2">
                <FcGoogle className="mr-2" />
                Sign-in with Google
              </span>
            </button>
            <div>
              <span>Already have an account? </span>
              <span
                onClick={() => navUser("/login")}
                className="text-violet-600 cursor-pointer"
              >
                Sign in here
              </span>
            </div>
          </form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
