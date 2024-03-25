import { useState } from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} role={props.role}>
      {props.children}
    </button>
  );
};

export default Button;
