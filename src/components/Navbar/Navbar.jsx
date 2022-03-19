import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () {};
    }
  }, [menu]);

  return (
    <>
      <div className="navbar">
        <div style={{display:"flex", padding:"1.5rem", justifyContent:"start"}}>
          <div style={{marginRight:"50px"}}>
            <img id="logo" src="black.svg" alt="Klarna" />
          </div>{" "}
          <div className="navtab">
            <div>Shop</div> <div>How it works</div> <div>Play in 4</div>{" "}
            <div>The shopping app</div> <div>Help</div>
          </div>
          
        </div>
        <div>
          <button>Log in</button>
          <button className="show">Get the app</button>
          <button onClick={() => setMenu(!menu)} className="none">
            {!menu ? (
              <img src="menu.png" alt="" />
            ) : (<img src="close.png" alt="" />
            )}
          </button>
        </div>
      </div>
      {menu ? (
        <div className="menu">
          <div>
            <h2>Shop</h2> <h2>How it works</h2> <h2>Play in 4</h2>{" "}
            <h2>The shopping app</h2> <h2>Help</h2>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;