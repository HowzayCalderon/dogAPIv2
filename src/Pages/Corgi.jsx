import React from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import Modal from "../Components/Modal";

function Corgi(props) {
  const [corgis, setCorgiData] = useState([]);
  const [dogPic, setDogPic] = useState("");
  const [displayMod, setDisplay] = useState("modal-container");
  function apiCallCorgi() {
    fetch(`https://api-project-dogpics.up.railway.app/corgi`)
      .then((res) => res.json())
      .then((data) => setCorgiData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    apiCallCorgi();
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
        {corgis.length
          ? corgis[0].message.map((pic, index) => {
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

export default Corgi;
