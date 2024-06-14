import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import StarRating from "../../components/Rating/Rating.jsx";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <StarRating numOfStars={6} />
    </div>
  );
};

export default Contact;
