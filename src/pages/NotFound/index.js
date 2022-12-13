import React from "react";

const NotFound = () => {
  setTimeout(() => {
    window.location.assign("/");
  }, 3000);
  return <div>NotFound</div>;
};

export default NotFound;
