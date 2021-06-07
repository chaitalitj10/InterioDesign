import React from "react";
import Common from "./Common";
import web from "../src/Images/homePic.jpg";

function Home() {
  return (
    <div>
      <Common
        name="Interior your house with"
        imgsrc={web}
        visit="./service"
        subTitle = "Choose for yourself something new"
        btname="Get Started"
      />
    </div>
  );
}

export default Home;
