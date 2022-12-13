import React from "react";
import ProdIcons from "../../../../../components/ProdIcons";

const AboutDesc = () => {
  return (
    <section className="about-description-wrapper">
      <div className="about-header-wrapper">
        <h4 className="about__header">About Me</h4>
      </div>
      <p className="p2 about__text">
        Expert guitarist and melody writer whose original guitar works has
        millions of views on TikTok. Specializes in providing hip-hop producers
        with high-quality guitar loops. Previously studied audio engineering and
        electric guitar at the prestigious Berklee School of Music in Boston,
        MA. Inspired to weave his two loves of software and music to create
        groundbreaking applications for musicians.
      </p>
      <ProdIcons></ProdIcons>
    </section>
  );
};

export default AboutDesc;
