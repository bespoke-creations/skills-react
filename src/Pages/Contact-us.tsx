import React, { useState, ChangeEvent } from "react";
import { sendMessage } from "../services/contact-us";
import IContactUsData from "../types/IContactUsData";

const ContactUs: React.FC = () => {
  const initialContactUsState = {
    email: "",
    message: "",
  };
  const [contactUs, setContactUs] = useState<IContactUsData>(
    initialContactUsState
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactUs({ ...contactUs, [name]: value });
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactUs({ ...contactUs, [name]: value });
  };

  const submitForm = async () => {
    var data = {
      email: contactUs.email,
      message: contactUs.message,
    };

    if (contactUs.email && contactUs.message) await sendMessage(data);
    else {
      alert("Please fill in the correct information.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="submit-form">
          <h1>Contact Us Form</h1>
          <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                data-testid="email"
                required
                value={contactUs.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                data-testid="message"
                required
                value={contactUs.message}
                onChange={handleTextareaChange}
                name="message"
              ></textarea>
            </div>
            <br />
            <div className="form-group">
              <button
                onClick={submitForm}
                data-testid="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
