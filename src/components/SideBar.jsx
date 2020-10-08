import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ onSelectSearchBox }) => {
  return (
    <section className="side-bar">
      <div className="side-part">
        <Link to="/manifest" id="logo"></Link>
      </div>
      <div className="side-part" onClick={() => onSelectSearchBox()}>
        <span id="rec"></span>
      </div>
    </section>
  );
};

export default SideBar;
