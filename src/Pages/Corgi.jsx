import React from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import Modal from "../Components/Modal";
import axios from "axios";

function Corgi(props) {
  const [corgis, setCorgiData] = useState([]);
  const [picIndex, setIndex] = useState(0)

  async function apiCallCorgi() {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/corgi/images`
      );
      setCorgiData(response);
      console.log(corgis.data.message);

    } 
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    apiCallCorgi();
  }, []);

  return (
    <div className="main-page-con">
      <Navbar />
      <div className="title-container">
        <h1>Corgis</h1>
      </div>
      <div className="outerContainer">
        <div className="innerContainer">
          <img src={corgis.data.message[picIndex]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Corgi;
