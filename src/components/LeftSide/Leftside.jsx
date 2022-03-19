import React from "react";
import "./Leftside.css";

function Leftside() {
  return (
    <div className="left-aside">
      <div className="categories">
        <div>
          <h3>Categories</h3>
        </div>
        <div>
          <p>Babies & Kids</p>
          <p>Clothing & Apparel</p>
          <p>Computers & Accessories</p>
          <p>Consumer Electronics</p>
          <p>Education</p>
          <p>Gifts</p>
          <p>Health & Beauty</p>
          <p>Holidays & Occasions</p>
          <p>Household</p>
        </div>
      </div>
      <div className="hrtag">
      <hr />

      </div>
      <div className="filter">
        <h3>Filter</h3>
        <h4>Type</h4>
        <div>
          <div>
            <input type="checkbox" for="one" />
            <label for="one">Only Coupons</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>Exclusives</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>BOGO and more</label>
          </div>
        </div>
        <div className="hrtag">
      <hr />

      </div>
        <h4>Discount</h4>
        <div>
          <div>
            <input type="checkbox" for="one" />
            <label for="one">0-49% off</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>50-80% off</label>
          </div>
        </div>
        <div className="hrtag">
      <hr />

      </div>
      </div>
    </div>
  );
}

export default Leftside;