import React, { useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import { defaultContext } from "./defaultContext";
import { fetchListingsData } from "../index";

export const PageContext = createContext();

const ContextWrapper = ({ children }) => {
  const contextValue = useReducer(reducer, defaultContext);
  const dispatch = contextValue[1];

  useEffect(() => {
    fetchListingsData("OC18244338").then((data) =>
      dispatch({ type: "HYDRATE_LISTINGS_DATA", payload: data })
    );
  }, []);

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};

export default ContextWrapper;
