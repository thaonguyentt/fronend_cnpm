import React from "react";
import "./Contact.css";
import Formfeedback from "./Form";

const Contact = () => {
  
  return (
    <div className="contactus-container">
      <div className="contact-title-container">
        <h1>contact us</h1>
      </div>
      <div>
        <div className="row">
          <div className="col img_col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5493.018324682531!2d9.838129226695125!3d46.49803081650707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47837dc07e50dd11%3A0x6a6a0de98dba03b4!2sMR%20RENTAL!5e0!3m2!1sen!2s!4v1636081426210!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              className="embed_location_from_map"
            />
          </div>
          <div className="col image-title-contactus"></div>
        </div>
      </div>
      <div>
      <Formfeedback />
      </div>
    </div>
  );
};

export default Contact;
