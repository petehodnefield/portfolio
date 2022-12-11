import React from "react";

const Contact = () => {
  return (
    <div className="contact-form-wrapper">
      <h3 className="form__header">Contact Me</h3>

      <form id="contact-form" className="contact-form">
        <div className="form__content-wrapper">
          <div className="form__input-wrapper">
            <label className="form__label">Name</label>
            <input name="name" className="form__input" type="text"></input>
          </div>
          <div className="form__input-wrapper">
            <label className="form__label">Email address</label>
            <input name="email" className="form__input" type="email"></input>
          </div>
          <div className="form__input-wrapper">
            <label className="form__label">Subject</label>
            <input name="subject" className="form__input" type="text"></input>
          </div>
          <div className="form__input-wrapper">
            <label className="form__label">Message</label>
            <textarea
              name="message"
              className="form__input form__text-area"
              type="text"
            ></textarea>
          </div>
          <div className="form__btn-wrapper">
            <button type="submit" className="btn btn-secondary btn-form">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
