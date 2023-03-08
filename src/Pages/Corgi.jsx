import React from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import Modal from "../Components/Modal";
import * as FaIcons from "react-icons/fa";

function Corgi(props) {
  const [corgis, setCorgiData] = useState([]);
  const [dogPic, setDogPic] = useState("");
  const [displayMod, setDisplay] = useState("modal-container");
  const [page, setPage] = useState(0);

  function apiCallCorgi() {
    fetch(`https://dog.ceo/api/breed/corgi/images`)
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

  const handleNextClick = () => {
    if (page + 24 < corgis.message.length) {
      setPage((prev) => prev + 24);
    } else {
      setPage(0);
    }
  };

  const handlePrevClick = () => {
    if (page - 24 < corgis.message.length) {
      setPage((prev) => prev - 16);
    } else {
      setPage(0);
    }
  };

  return (
    <div className="main-page-con">
      <Navbar />
      <div className="title-container">
        <h1>Corgis</h1>
      </div>
      <Modal
        display={displayMod}
        handleclick={() => handlePicClick()}
        dogPic={dogPic}
      />
      <div className="pic-container">
        {corgis.message.length
          ? corgis.message.slice(page, page + 24).map((pic, index) => {
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

export default Corgi;
