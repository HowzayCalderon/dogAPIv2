import React from "react";
import * as FaIcons from "react-icons/fa";

function Modal(props) {
  return (
    <div className={props.display}>
      <span>
        <FaIcons.FaTimes onClick={props.handleclick} />
      </span>
      <div className="modal-img-container">
        <img src={props.dogPic} alt="dog" />
      </div>
      <div className="modal-p-container">
        <p> Link: {props.dogPic}</p>
      </div>
    </div>
  );
}

export default Modal;
