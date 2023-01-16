import React from "react";
import Navbar from "../Components/Navbar";
import Modal from "../Components/Modal";
import { useEffect, useState } from "react";

function Shiba(props) {
  const [shibas, setShibaData] = useState([]);
  const [dogPic, setDogPic] = useState("");
  const [displayMod, setDisplay] = useState("modal-container");

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
        {shibas.length
          ? shibas[0].message.map((pic, index) => {
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

export default Shiba;
