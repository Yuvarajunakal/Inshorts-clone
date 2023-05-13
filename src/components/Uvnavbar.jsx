import React from "react";
import "./uvnavbar.css";
import Humburgerdrawer from "./Humburgerdrawer.jsx";

export default function Uvnavbar({ setCategory }) {
  return (
    <div className="nav" style={{ zIndex: "1" }}>
      <div className="icon">
        {" "}
        <Humburgerdrawer setCategory={setCategory} />{" "}
      </div>
      <img
        className="inshortsicon"
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="Inshorts"
      />
    </div>
  );
}
