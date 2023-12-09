import { useState, useEffect } from "react";

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.pageX,
        y: event.pageY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default MouseEffect;
