import React from "react";
import Stats from "./Stats";
import Inventory from "./Inventory";
import Equiped from "./Equiped";

export default function CharacterScreen() {
  return (
    <div>
      <Stats />
      <Equiped />
      <Inventory />
    </div>
  );
}
