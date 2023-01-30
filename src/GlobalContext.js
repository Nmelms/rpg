import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const charStats = {
    lvl: 1,
    hp: 100,
    xp: 50,
    str: 5,
    def: 5,
    mgk: 5,
    gold: 50,
    inventorySlots: [
      { location: "Head", item: "empty" },
      { location: "Arms", item: "empty" },
      { location: "legs", item: "empty" },
      { location: "Feet", item: "empty" },
      { location: "Primary", item: "empty" },
      { location: "Secondary", item: "empty" },
    ],
  };
  return (
    <GlobalContext.Provider value={{ charStats }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
