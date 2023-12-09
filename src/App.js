import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.js";
import Experiences from "./Pages/Experiences.js";
import Resources from "./Pages/Resources.js";
import TripPlanning from "./Pages/TripPlanning.js";
import UserProfile from "./Pages/UserProfile.js";
import Landing from "./Pages/Landing.js";
import MouseEffect from "./Components/MouseEffect.js";
import "./Styles/MouseEffect.css";

function App() {
  const mousePosition = MouseEffect();
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    if (mousePosition.x !== null && mousePosition.y !== null) {
      const newTrail = { x: mousePosition.x, y: mousePosition.y };
      setTrail((prevTrail) => [...prevTrail, newTrail]);

      setTimeout(() => {
        setTrail((prevTrail) => prevTrail.slice(1));
      }, 100);
    }
  }, [mousePosition]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "Home",
      element: <Home />,
    },
    {
      path: "/Experiences",
      element: <Experiences />,
    },
    {
      path: "/Resources",
      element: <Resources />,
    },
    {
      path: "/TripPlanning",
      element: <TripPlanning />,
    },
    {
      path: "/UserProfile",
      element: <UserProfile />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      {trail.map((trailItem, index) => (
        <div
          key={index}
          className="trail"
          style={{ left: trailItem.x, top: trailItem.y }}
        />
      ))}
    </div>
  );
}

export default App;
