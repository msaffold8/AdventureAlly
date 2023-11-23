import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.js";
import Experiences from "./Pages/Experiences.js";
import Resources from "./Pages/Resources.js";
import TripPlanning from "./Pages/TripPlanning.js";
import UserProfile from "./Pages/UserProfile.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
    </div>
  );
}

export default App;
