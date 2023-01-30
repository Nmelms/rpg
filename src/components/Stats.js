import React from "react";
import MainProgressBar from "./ProgressBar";
import { ProgressBar } from "react-bootstrap";

export default function Stats() {
  return (
    <div className="stats">
      <h2>Stats</h2>
      <ul className="stats-list p-2">
        <li class="health-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">HP</p>
          <ProgressBar className="w-75" now={60} />
        </li>
        <li class="xp-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">XP</p>
          <ProgressBar className="w-75" now={60} />
        </li>
        <li class="str-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">STR</p>
          <ProgressBar className="w-75" now={60} />
        </li>
        <li class="def-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">DEF</p>
          <ProgressBar className="w-75" now={60} />
        </li>
        <li class="magic-bar bar my-1 d-flex align-items-center">
          <p className="m-0 w-25">MGK</p>
          <ProgressBar className="w-75" now={60} />
        </li>
      </ul>
    </div>
  );
}
