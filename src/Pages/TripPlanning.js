import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";

const TripPlanner = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 mb-10 p-5">
        <h1 className="text-center font-bold text-2xl mb-5">Plan a new trip</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="destination"
            >
              Where to?
              {/* add google places api */}
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="destination"
              type="text"
              placeholder="e.g. Paris, Hawaii, Japan"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="dates"
            >
              Dates
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="dates"
              type="text"
              placeholder="Start Date - End Date"
            />
          </div>
          <div className="mb-4"></div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Start planning
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default TripPlanner;
