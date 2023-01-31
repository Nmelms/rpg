import { createContext, useState } from "react";
import { useImmer } from "use-immer";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [charStats, setCharStats] = useImmer({
    lvl: 1,
    hp: 100,
    xp: 50,
    str: 5,
    def: 5,
    mgk: 5,
    gold: 50,
    equipmentSlots: {
      head: {
        item: "Barbarian Helmet",
        img: "/assets/helmet.png",
      },
      arms: {
        item: "",
        img: "",
      },
      legs: {
        item: "",
        img: "",
      },
      feet: {
        item: "",
        img: "",
      },
      primary: {
        item: "",
        img: "",
      },
      secondary: {
        item: "",
        img: "",
      },
    },
    // { location: "Head", item: "Barbarian helmet", img: "/assets/helmet.png" },
    // { location: "Arms", item: "empty" },
    // { location: "legs", item: "empty" },
    // { location: "Feet", item: "empty" },
    // { location: "Primary", item: "empty" },
    // { location: "Secondary", item: "empty" },

    inventorySlots: [
      { item: "empty" },
      { item: "empty" },
      { item: "empty" },
      { item: "empty" },
      { item: "empty" },
      { item: "empty" },
    ],
  });
  return (
    <GlobalContext.Provider value={{ charStats, setCharStats }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
