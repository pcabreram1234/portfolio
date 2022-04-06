import React from "react";
import { useMediaQuery } from "react-responsive";

const useMatchMedia = (mediaQuery) => {
  const isMediaMatch = useMediaQuery({ query: mediaQuery });
  return isMediaMatch;
};

export default useMatchMedia;
