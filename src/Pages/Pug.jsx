import React from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";

function Pug() {
  const [pugs, setPugData] = useState([]);

  function apiCallPug() {
    fetch(`https://api-project-dogpics.up.railway.app/pug`)
      .then((res) => res.json())
      .then((data) => setPugData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    apiCallPug();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pic-container">
        {pugs.length
          ? pugs[0].message.map((pic, index) => {
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

export default Pug;
