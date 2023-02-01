import { createContext, useState } from "react";
import { barbHelmet, leatherChest } from "./components/items/Armor";
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
        item: "empty",
        img: "",
      },
      arms: {
        item: "empty",
        img: "",
      },
      legs: {
        item: "empty",
        img: "",
      },
      feet: {
        item: "empty",
        img: "",
      },
      primary: {
        item: "empty",
        img: "",
      },
      secondary: {
        item: "empty",
        img: "",
      },
    },

    inventorySlots: [
      barbHelmet,
      leatherChest,
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
