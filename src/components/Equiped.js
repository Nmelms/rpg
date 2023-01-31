import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { Button } from "react-bootstrap";

export default function Equiped() {
  const { charStats, setCharStats } = useContext(GlobalContext);
  let equipmentkeys = Object.keys(charStats.equipmentSlots);
  console.log(equipmentkeys);

  const unequip = (item) => {
    setCharStats((draft) => {
      for (let i = 0; i < draft.inventorySlots.length; i++) {
        if (draft.inventorySlots[i].item === "empty") {
          draft.inventorySlots[i].item = draft.equipmentSlots[item].item;
          draft.inventorySlots[i].img = draft.equipmentSlots[item].img;
          break;
        }
      }
      draft.equipmentSlots[item].item = "none";
      draft.equipmentSlots[item].img = "";
    });
  };

  return (
    <div className="container-fluid border">
      Equiped
      <div className="row ">
        {equipmentkeys.map((item) => {
          return (
            <div className="col-6 row-6 border">
              <h4 className="col-12">{item}</h4>
              <div className="d-flex">
                <img
                  className="col-4"
                  src={charStats.equipmentSlots[item].img}
                />
                <p className="col-4">{charStats.equipmentSlots[item].item}</p>
              </div>
              <Button onClick={() => unequip(item)} variant="danger">
                UnEquip
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
