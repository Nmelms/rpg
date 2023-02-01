import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";

export default function Inventory() {
  const { charStats, setCharStats } = useContext(GlobalContext);

  const handleClick = (item, slot, idx) => {
    setCharStats((draft) => {
      draft.equipmentSlots[slot] = item;
      draft.inventorySlots[idx] = { item: "empty" };
    });
  };
  return (
    <div>
      <h2>Inventory</h2>
      <div className="row">
        {charStats.inventorySlots.map((item, idx) => {
          return (
            <div
              onClick={() => handleClick(item, item.slot, idx)}
              className="col-6"
            >
              <p>{item.item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
