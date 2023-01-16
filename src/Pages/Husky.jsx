import React from "react";
import Navbar from "../Components/Navbar";
import Modal from "../Components/Modal";
import { useEffect, useState } from "react";

function Husky() {
  const [huskies, setHuskyData] = useState([]);
  const [dogPic, setDogPic] = useState("");
  const [displayMod, setDisplay] = useState("modal-container");

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

  const handlePicClick = () => {
    if (displayMod === "modal-container") {
      setDisplay("modal-container-active");
    } else {
      setDisplay("modal-container");
    }
  };

  return (
    <div>
      <Navbar />
      <Modal
        display={displayMod}
        handleclick={() => handlePicClick()}
        dogPic={dogPic}
      />
      <div className="pic-container">
        {huskies.length
          ? huskies[0].message.map((pic, index) => {
              return (
                <div>
                  <img
                    key={index}
                    src={pic}
                    onClick={() => {
                      setDogPic(pic);
                      if (displayMod === "modal-container") {
                        setDisplay("modal-container-active");
                      } else {
                        setDisplay("modal-container");
                      }
                    }}
                    alt="dog"
                  ></img>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Husky;
