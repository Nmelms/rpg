import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";

export default function Equiped() {
  const { charStats } = useContext(GlobalContext);

  return (
    <div className="container-fluid">
      Equiped
      <div className="row">
        {charStats.inventorySlots.map((item) => {
          return (
            <div className="col-6">
              <h4>{item.location}</h4>
              <p>{item.item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
