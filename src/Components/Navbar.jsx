import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="top">
        <Link to="/" className="">
          <FaIcons.FaBars />
        </Link>
      </div>
      <div className="list">
        <nav>
          <ul>
            <li>
              <Link to="/home">
                <FaIcons.FaHome /> Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/corgi">
                <FaIcons.FaDog /> Corgi{" "}
              </Link>
            </li>
            <li>
              <Link to="/husky">
                <FaIcons.FaDog /> Husky
              </Link>
            </li>
            <li>
              <Link to="/shiba">
                <FaIcons.FaDog /> Shiba
              </Link>
            </li>
            <li>
              <Link to="/pug">
                <FaIcons.FaDog /> Pug
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
