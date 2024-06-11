import React, { createContext, useContext, useEffect, useState } from "react";
import { useCustomHook } from "../utils/hooks";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const value = useCustomHook();

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
