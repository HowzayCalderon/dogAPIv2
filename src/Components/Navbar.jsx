import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [hidden, setDisplay] = useState(true);

  const hideMenu = () => {
    if (hidden === true) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  return (
    <>
      <div className="top">
        <Link
          onClick={hideMenu}
          className={hidden === true ? "top" : "top-active"}
        >
          {hidden ? <FaIcons.FaBars /> : <FaIcons.FaTimes />}
        </Link>
      </div>
      <div className={hidden ? "list" : "list-active"}>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FaIcons.FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/corgis">
                <FaIcons.FaDog /> Corgis
              </Link>
            </li>
            <li>
              <Link to="/huskies">
                <FaIcons.FaDog /> Husky
              </Link>
            </li>
            <li>
              <Link to="/shibas">
                <FaIcons.FaDog /> Shibas
              </Link>
            </li>
            <li>
              <Link to="/pugs">
                <FaIcons.FaDog /> Pugs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
