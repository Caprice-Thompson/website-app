import React from "react";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./ContactForm.css";

// controlled components
//TODO:Add validation
function ContactForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Use 'name' instead of 'firstname' and 'lastname'
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Use 'name' as key to update the corresponding field in formData
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
    // alert(
    //   `First Name: ${formData.firstname}, Last Name: ${formData.lastname}, Email: ${formData.email}, Message: ${formData.message}`
    // );
  };
  console.log(show);
  return (
    <>
      <div className="form-container">
        <h1>Contact Us</h1>
        <div className="input-container">
          <form>
            <div className="form-row">
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="subject"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="textbox">
              <textarea
                id="message"
                name="message"
                placeholder="Please type your message here..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <Modal title="Success" onClose={() => setShow(false)} show={show}>
              Your details have been submitted!
            </Modal>
          </form>
        </div>
      </div>
    </>
  );
}
export default ContactForm;
