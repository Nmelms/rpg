import React, { useContext } from "react";
import Stats from "./Stats";
import Inventory from "./Inventory";
import Equiped from "./Equiped";
import { Button } from "react-bootstrap";
import GlobalContext from "../GlobalContext";

export default function CharacterScreen() {
  const { charStats, setCharStats } = useContext(GlobalContext);
  // test to handle changing equipment
  // const handleClick = () => {
  //   setCharStats({
  //     ...charStats,
  //     equipmentSlots: {
  //       ...charStats.equipmentSlots,
  //       head: {
  //         ...charStats.equipmentSlots.head,
  //         item: "ball cap",
  //       },
  //     },
  //   });
  // };
  return (
    <div>
      <Stats />
      <Equiped />
      <Inventory />
    </div>
  );
}
