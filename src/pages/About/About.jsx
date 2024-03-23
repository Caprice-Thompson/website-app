import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";

const About = () => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>See Modal</button>
      <Modal title="Modal Title" onClose={() => setShow(false)} show={show}>
        This is the modal body
      </Modal>
    </div>
  );
};
export default About;
