import React, { useState } from "react";
import Accordian from "../../components/Accordian/accordian";
import "./Resources.css";
import CatFact from "../CatFact/CatFact";

const Resources = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="resources">
      <CatFact />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Creating single select and Multi select
        components
      </button>
      {show ? <Accordian /> : null}
    </div>
  );
};

export default Resources;
