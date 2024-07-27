"use client";
import { createContext, useState, useContext } from "react";
import { cloneDeep } from "lodash";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [globalState, setGlobalState] = useState<{ [key: string]: any }>({
    isSidebarOpen: false,
  });

  const setState = (newState: { [key: string]: any }) => {
    setGlobalState((prevState) => {
      const clone = cloneDeep(prevState);

      Object.keys(newState).forEach((key) => {
        clone[key] = newState[key];
      });

      return clone;
    });
  };

  return <GlobalContext.Provider value={{ globalState, setState }}>{children}</GlobalContext.Provider>;
}

export const useGlobal = () => useContext(GlobalContext);
