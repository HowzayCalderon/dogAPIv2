import React from "react";
import Navbar from "../Components/Navbar";
import Modal from "../Components/Modal";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

function Shiba(props) {
  const [shibas, setShibaData] = useState([]);
  const [dogPic, setDogPic] = useState("");
  const [displayMod, setDisplay] = useState("modal-container");
  const [page, setPage] = useState(0);

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

  const handleNextClick = () => {
    if (page + 24 < shibas[0].message.length) {
      setPage((prev) => prev + 24);
    } else {
      setPage(0);
    }
  };

  const handlePrevClick = () => {
    if (page - 24 < shibas[0].message.length) {
      setPage((prev) => prev - 16);
    } else {
      setPage(0);
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
          ? shibas[0].message.slice(page, page + 24).map((pic, index) => {
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
        <FaIcons.FaArrowCircleLeft
          className="Arrow"
          onClick={() => {
            handlePrevClick();
          }}
        />
        <FaIcons.FaArrowCircleRight
          onClick={() => {
            handleNextClick();
          }}
          className="Arrow"
        />
      </div>
    </div>
  );
}

export default Shiba;
