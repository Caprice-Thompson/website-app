import React from "react";
import { useState } from "react";
import Accordian from "../../components/Accordian";
import "./ResourcesStyles.css";

const Resources = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="resources">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Creating single select and Multi select
        components
      </button>
      {show ? <Accordian /> : null}
    </div>
  );
};

export default Resources;
