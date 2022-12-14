import { useState, useEffect } from "react";
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
export const useWindowDimensions = () => {
  const [width, setWidth] = useState(getWindowDimensions().width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowDimensions().width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};
