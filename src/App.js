import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/TripSetup",
      element: <div>Trip Setup</div>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
