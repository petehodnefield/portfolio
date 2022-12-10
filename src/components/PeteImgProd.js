import React from "react";
import { Icon } from "@iconify/react";
import ProdIcons from "./ProdIcons";
import pete from "../assets/photos/headshot.jpg";
const PeteImgProd = () => {
  return (
    <section className="about-image-icons-wrapper">
      <div className="about-image-wrapper">
        <img className="about__img" src={pete} />
      </div>
      <ProdIcons></ProdIcons>
    </section>
  );
};

export default PeteImgProd;
