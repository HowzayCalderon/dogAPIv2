import React from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import Modal from "../Components/Modal";
import axios from "axios";

function Corgi(props) {
  const [corgis, setCorgiData] = useState({});

  async function apiCallCorgi() {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/corgi/images`
      );
      setCorgiData(response.data);
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
          {corgis.message ? corgis['message'].map((item,index) => (
            <img src={item} key = {index}></img>
          )): <p>Loading...</p>}
          <img src={corgis['message'] ? corgis['message'][2]: <p>Loading...</p>} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Corgi;
