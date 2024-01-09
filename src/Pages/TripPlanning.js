import { React, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Link } from "react-router-dom";

const destinations = [
  { value: "las-vegas", label: "Las Vegas" },
  { value: "orlando", label: "Orlando" },
  { value: "ibiza", label: "Ibiza" },
  { value: "rio-de-janeiro", label: "Rio de Janeiro" },
  { value: "tokyo", label: "Tokyo" },
  { value: "bangkok", label: "Bangkok" },
  { value: "barcelona", label: "Barcelona" },
  { value: "new-orleans", label: "New Orleans" },
  { value: "amsterdam", label: "Amsterdam" },
  { value: "miami", label: "Miami" },
];

const TripPlanner = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDestinationChange = (option) => {
    setSelectedDestination(option);
    // Handle the destination change (e.g., set it in form state)
  };
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

            <Select
              className="text-gray-700"
              value={selectedDestination}
              onChange={handleDestinationChange}
              options={destinations}
              placeholder="e.g. Orlando, Las Vegas, Tokyo"
              isClearable
              isSearchable
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="dates"
            >
              Dates
            </label>
            <div className="flex gap-4">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
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
