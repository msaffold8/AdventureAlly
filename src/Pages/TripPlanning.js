import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [itinerary, setItinerary] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableItinerary, setEditableItinerary] = useState("");

  const handleDestinationChange = (option) => {
    setSelectedDestination(option);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedDestination || !startDate || !endDate) {
      alert("Please select a destination and dates.");
      return;
    }

    let detailedItinerary = "";
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      let day = currentDate.toISOString().split("T")[0];

      try {
        const response = await fetch("http://localhost:3000/create-itinerary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ destination: selectedDestination.label, day }),
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        detailedItinerary += `Day ${day}:\n${data.itinerary}\n\n`; // Each day's itinerary
      } catch (error) {
        console.error("Error fetching itinerary for day", day, ":", error);
        alert(`Failed to fetch itinerary for ${day}`);
      }

      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    setItinerary(detailedItinerary);
    setEditableItinerary(detailedItinerary);
    setEditMode(false);
  };
  
  
  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (!editMode) {
      setEditableItinerary(itinerary);
    } else {
      setItinerary(editableItinerary);
    }
  };

  const handleEditChange = (event) => {
    setEditableItinerary(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 mb-10 p-5">
        <h1 className="text-center font-bold text-2xl mb-5">Plan a new trip</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="destination"
            >
              Where to?
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
          <div className="flex items-center justify-between">
            <button
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Start planning
            </button>
          </div>
        </form>
        {itinerary && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="font-bold text-xl mb-4">Your Itinerary:</h2>
            {!editMode ? (
              <div>
                <div className="mb-4 whitespace-pre-line">{itinerary}</div>
                <button
                  onClick={toggleEditMode}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
              </div>
            ) : (
              <div>
                <textarea
                  className="form-textarea mt-1 block w-full border rounded"
                  rows="5"
                  value={editableItinerary}
                  onChange={handleEditChange}
                ></textarea>
                <button
                  onClick={toggleEditMode}
                  className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TripPlanner;
