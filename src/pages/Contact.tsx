import React from 'react';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const location = useLocation();
  const contactMessage = location.state?.message || "No message provided";

  return (
    <div>
      <h1>Contact Us</h1>
      <p>{contactMessage}</p>
      <label>
        send your review: <input name="myInput" />
        <button>submit</button>
      </label>
    </div>
  );
};

export default Contact;
