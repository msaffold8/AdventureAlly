import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AdventureAlly from "../Images/AdventureAllyHero.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="justify-center">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:flex lg:items-start lg:px-8 lg:py-40">
        <div className="flex flex-col justify-center lg:flex-auto">
          <h1 className="mt-6 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Making your travel plans so much easier!
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Esse id magna consectetur fugiat non dolor in ad laboris magna
            laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
            voluptate id. In veniam incididunt ex veniam adipisicing sit.
          </p>
          <div className="mt-6 flex items-center gap-x-6">
            <Link
              to="/TripPlanning"
              className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400"
            >
              Start Planning
            </Link>

            <a
              href="www.example.com"
              className="text-sm font-semibold text-gray-900"
            >
              Sign up <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <img
            src={AdventureAlly}
            alt="Adventure Ally Logo"
            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
