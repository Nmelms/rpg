import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";

export default function Inventory() {
  const { charStats } = useContext(GlobalContext);
  return (
    <div>
      <h2>Inventory</h2>
      <div className="row">
        {charStats.inventorySlots.map((item) => {
          return (
            <div className="col-6">
              <p>{item.item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
