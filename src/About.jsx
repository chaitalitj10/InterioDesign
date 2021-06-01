import React from "react";
import Common from "./Common";
import web from "../src/Images/living.jpg";

function About() {
  return (
    <div>
      <Common
        name="A Few Words About Us"
        imgsrc={web}
        visit="./contact"
        subTitle="InterioDesign was found in 1993 and has become locally and nationally recognized as a leading Interios Design Firm."
        btname="Contact Us"
      />
    </div>
  );
}

export default About;
