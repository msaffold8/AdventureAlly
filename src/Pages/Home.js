import React from "react";
import Navbar from "../Components/Navbar";
import TripDetailsCard from "../Components/TripDetailsCard";
import Miami from "../Images/Miami.png";

const Home = () => {
  const trips = [
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun.",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
    {
      title: "Trip to Miami",
      description: "Going to South Beach will be so fun",
      imageSrc: Miami,
    },
  ];

  return (
    <div className="justify-center">
      <Navbar />
      <h1 className="flex flex-wrap justify-center mt-8 mb-8">Your Trips </h1>
      <div className="flex flex-wrap justify-center mb-4">
        {trips.map((trip, index) => (
          <TripDetailsCard key={index} {...trip} />
        ))}
      </div>
    </div>
  );
};

export default Home;
