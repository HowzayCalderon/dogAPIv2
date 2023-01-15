import React from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";

function Husky() {
  const [huskies, setHuskyData] = useState([]);

  function apiCallHusky() {
    fetch(`https://api-project-dogpics.up.railway.app/husky`)
      .then((res) => res.json())
      .then((data) => setHuskyData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    apiCallHusky();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pic-container">
        {huskies.length
          ? huskies[0].message.map((pic, index) => {
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

export default Husky;
