import React from "react";
import { useState } from "react";

// controlled components
//TODO:Add validation
function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { firstname, lastname, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [firstname]: value,
      [lastname]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `First Name: ${formData.firstname}, Last Name: ${formData.lastname}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname"> First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
      />

      <label htmlFor="lastname"> Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;
