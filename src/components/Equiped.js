import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { Button } from "react-bootstrap";

export default function Equiped() {
  const { charStats, setCharStats } = useContext(GlobalContext);
  let equipmentkeys = Object.keys(charStats.equipmentSlots);
  console.log(equipmentkeys);

  const unequip = () => {
    setCharStats((draft) => {
      draft.equipmentSlots.head.item = "none";
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
              <Button onClick={unequip} variant="danger">
                UnEquip
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
