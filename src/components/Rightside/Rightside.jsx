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
          <div className="dealsCount">{`${data.length} deals`}</div>
          <div className="img-div">
        {data.map((el, i) => (
            <div key={i}>
                <div className="itemDiv">
                    <img className="itemImg" src={el.image} alt="img"></img>
                    <div className="dis">
                        <h3 className="upto">Up to</h3>
                        <h1 className="disc">{el.discount}% <span className="off">off</span></h1>
                    </div>
                </div>

                <p>{el.name}</p>
                <p>{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightside;