import React from "react";
import image1 from "../../../assets/img/img_2.jpg";
import image2 from "../../../assets/img/img_3.jpg";
import image3 from "../../../assets/img/img_4.jpg";
import image4 from "../../../assets/img/img_5.jpg";
function PopularTrainings() {
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
                  <a href="#" class="btn btn-primary text-white px-4">
                    <span class="caption">Learn More</span>
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
                  <a href="#" class="btn btn-primary text-white px-4">
                    <span class="caption">Learn More</span>
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
                  <a href="#" class="btn btn-primary text-white px-4">
                    <span class="caption">Learn More</span>
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
                  <a href="#" class="btn btn-primary text-white px-4">
                    <span class="caption">Learn More</span>
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

export default PopularTrainings;
