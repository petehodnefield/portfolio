import React from "react";

const ThankYou = () => {
  setTimeout(() => {
    window.location.assign("/about");
  }, 2000);
  return (
    <div className="thank-you-wrapper">
      <h3>Thank you for contacting me!</h3>
      <p>I will get back to you as soon as I can</p>
    </div>
  );
};

export default ThankYou;
