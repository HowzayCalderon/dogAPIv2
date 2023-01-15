import React from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";

function Shiba(props) {
  const [shibas, setShibaData] = useState([]);

  function apiCallShiba() {
    fetch(`https://api-project-dogpics.up.railway.app/shiba`)
      .then((res) => res.json())
      .then((data) => setShibaData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    apiCallShiba();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pic-container">
        {shibas.length
          ? shibas[0].message.map((pic, index) => {
              return (
                <div>
                  <img src={pic} alt="dog"></img>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Shiba;
