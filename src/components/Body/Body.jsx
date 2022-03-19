import React from "react";
import "./Body.css"
import Leftside from "../LeftSide/Leftside"
import Rightside from "../Rightside/Rightside";

function Body() {
  return (
    <div className="mainContainer">
      <Leftside/>  
      <Rightside />
    </div>
  );
}

export default Body;