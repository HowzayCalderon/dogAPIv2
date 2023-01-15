import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
    const [hidden, setDisplay] = useState(false)

    const hideMenu = () => {
        hidden? setDisplay(false): setDisplay(true)
    }

  return (
    <>
      <div className="top">
        <Link  onClick={hideMenu} className="">
          {hidden? <FaIcons.FaBars />: <FaIcons.FaTimes />}
        </Link>
      </div>
      <div className={hidden? 'hidden': 'list'}>
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
                <FaIcons.FaDog /> Huskies
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
