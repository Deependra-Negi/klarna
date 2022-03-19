import React from "react";
import "./Rightside.css";
import { data } from "../../data/data.js";

function Rightside() {
  return (
    <div className="right-aside">
      <div className="searchbar-div">
        <div>
          <img src="search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        </div>
          <div class="dealsCount">{`${data.length} deals`}</div>
          <div className="img-div">
        {data.map((el, i) => (
          <div key={i}>
                <img class="itemImg" src={el.image} alt="img"></img>
                <p>{el.name}</p>
                <p>Everything you need for a flawless skin</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightside;