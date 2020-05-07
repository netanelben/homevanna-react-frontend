import React, { useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import { defaultContext } from "./defaultContext";
import { fetchAPIData } from "../index";

export const PageContext = createContext();

const ContextWrapper = ({ children }) => {
  const contextValue = useReducer(reducer, defaultContext);
  const dispatch = contextValue[1];

  useEffect(() => {
    fetchAPIData().then((data) =>
      dispatch({ type: "HYDRATE_DATA", payload: data })
    );
  }, []);

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};

export default ContextWrapper;
