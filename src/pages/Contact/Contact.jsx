import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import StarRating from "../../components/Rating/Rating.jsx";
import "./Contact.css";
import Header from "../../components/Header/Header";

const Contact = () => {
  return (
    <div>
      <Header title={"Contact Us"} />
      <ContactForm />
      <StarRating numOfStars={6} />
    </div>
  );
};

export default Contact;
