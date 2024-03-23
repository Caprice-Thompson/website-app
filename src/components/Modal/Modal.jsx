import "./Modal.css";
import React from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const modalRoot = document.getElementById("root");

  // Here is where we just design modal set up
  return ReactDOM.createPortal(
    <>
      <div
        className={`modal-overlay ${props.show ? "show" : ""}`}
        onClick={props.onClose}
      />
      <div className={`modal ${props.show ? "show" : ""}`}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{props.title}</h2>
          </div>
          <p>{props.children}</p>
          <div className="modal-footer">
            <button className="close-btn" onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}
