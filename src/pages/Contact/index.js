import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/Header/Header";
const Contact = () => {
  const [isOpen, setIsOpen] = useState();
  const form = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_op0chih",
        "template_rdxerpv",
        form.current,
        "ySIVZl7xYdNJMWPtu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.location.assign("#/thank-you");
  };
  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      <div className="contact-form-wrapper">
        <h3 className="form__header">Contact Me</h3>
        <form
          ref={form}
          onSubmit={handleFormSubmit}
          id="contact-form"
          className="contact-form"
        >
          <div className="form__content-wrapper">
            <div className="form__input-wrapper">
              <label className="form__label bold">Name</label>
              <input
                required
                name="name"
                className="form__input"
                type="text"
                maxLength="40"
              ></input>
            </div>
            <div className="form__input-wrapper">
              <label className="form__label bold">Email address</label>
              <input
                required
                name="email"
                className="form__input"
                type="email"
                maxLength="30"
              ></input>
            </div>
            <div className="form__input-wrapper">
              <label className="form__label bold">Subject</label>
              <input
                required
                name="subject"
                className="form__input"
                type="text"
                maxLength="40"
              ></input>
            </div>
            <div className="form__input-wrapper">
              <label className="form__label bold">Message</label>
              <textarea
                resi
                name="message"
                className="form__input form__text-area"
                type="text"
                required
                maxLength="280"
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
    </div>
  );
};

export default Contact;
