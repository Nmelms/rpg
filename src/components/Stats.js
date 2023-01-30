import React, { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import GlobalContext from "../GlobalContext";

export default function Stats() {
  const { charStats } = useContext(GlobalContext);
  return (
    <div className="stats">
      <h2>Stats</h2>
      <p className="m-0">Lvl: {charStats.lvl}</p>
      <ul className="stats-list p-2">
        <li class="health-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">HP</p>
          <ProgressBar className="w-75" now={charStats.hp} />
        </li>
        <li class="xp-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">XP</p>
          <ProgressBar className="w-75" now={charStats.xp} />
        </li>
        {/* <li class="str-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">STR</p>
          <ProgressBar className="w-75" now={charStats.str} />
        </li>
        <li class="def-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">DEF</p>
          <ProgressBar className="w-75" now={charStats.def} />
        </li>
        <li class="magic-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">MGK</p>
          <ProgressBar className="w-75" now={charStats.mgk} />
        </li> */}
      </ul>
    </div>
  );
}
