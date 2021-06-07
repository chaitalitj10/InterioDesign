import React from "react";
import web from "../src/Images/homePic.jpg";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> InterioDesign</strong>
                  </h1>
                  <h2 className="my-3">{props.subTitle}</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} class="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-6 order-1 order-lg-2 header-img mt-4">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
