import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contactbox">
        <h3>Contact Me:</h3>
        <div className="contactminbox">
          <box-icon type="logo" color="blue" name="linkedin-square"></box-icon>
          <a href="www.linkedin.com/in/akinwunmi-muyiwa-5b5554300">LinkedIn</a>
        </div>
        <div className="contactminbox">
          <box-icon type="logo" name="github"></box-icon>
          <a href="https://github.com/feezyakinwunmi">Github</a>
        </div>
        <div className="contactminbox">
          <box-icon
            type="logo"
            color="darkgreen"
            name="whatsapp-square"
          ></box-icon>
          <a href="">WhatsApp</a>
        </div>
        <div className="contactminbox">
          <box-icon type="logo" color="darkred" name="instagram-alt"></box-icon>
          <a href="">Instagram</a>
        </div>
        <div className="contactminbox">
        <box-icon  color="white" name='phone-call' ></box-icon>         
         <a href="">+234 9161460898</a>
        </div>
      </div>
    </>
  );
};
export default Contact;
