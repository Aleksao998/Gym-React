import React from "react";
import { withRouter } from "react-router-dom";
import image1 from "../../../assets/img/bahkti.jpg";
import image2 from "../../../assets/img/klasicniP.jpg";
import image3 from "../../../assets/img/core-30.jpg";
import image4 from "../../../assets/img/trcanje.jpg";
function PopularTrainings(props) {
  return (
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div
            class="heading-with-border text-center mb-5"
            style={{ width: "100%" }}
          >
            <h2 class="heading text-uppercase">Popular Trainings</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="media-image">
              <img src={image1} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Yoga</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/yoga");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljnije</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={image2} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Core</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/core");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljnije</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="media-image">
              <img src={image3} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Pilates</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/pilates");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljnije</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={image4} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Cardio</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/cardio");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljnije</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PopularTrainings);
