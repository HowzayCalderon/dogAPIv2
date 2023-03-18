import React from "react";
import Navbar from "../Components/Navbar";
import Modal from "../Components/Modal";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

function Shiba(props) {
  const [shibas, setShibaData] = useState([]);
  const [dogPic, setDogPic] = useState("");
  const [displayMod, setDisplay] = useState("modal-container");
  const [page, setPage] = useState(0);

  async function apiCallShiba() {
    try{
      const response = await axios.get(`https://dog.ceo/api/breed/shiba/images`)
      setShibaData(response.data);
    }
    catch(error){
      console.error(error);
    }
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
    if (page + 24 < shibas.message.length) {
      setPage((prev) => prev + 24);
    } else {
      setPage(0);
    }
  };

  const handlePrevClick = () => {
    if (page - 24 < shibas.message.length) {
      setPage((prev) => prev - 16);
    } else {
      setPage(0);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="title-container">
        <h1>Shibas</h1>
      </div>
      <Modal
        display={displayMod}
        handleclick={() => handlePicClick()}
        dogPic={dogPic}
      />
      <div className="pic-container">
        {shibas.message
          ? shibas.message.slice(page, page + 24).map((pic, index) => {
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
