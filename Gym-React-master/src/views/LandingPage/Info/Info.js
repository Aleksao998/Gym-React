import React from "react";
import image from "../../../assets/img/img_1.jpg";
function InfoProfile() {
  return (
    <div class="site-section" style={{ marginTop: "50px" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="mb-5">
              <img src={image} alt="Image" class="img-fluid" />
            </p>
          </div>
          <div class="col-lg-5 ml-auto">
            <h2 class="site-section-heading mb-3">The Club</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ad,
              tempora incidunt accusantium. Similique magni quaerat beatae illo
              aliquid. Libero non ipsa nisi, corporis architecto incidunt rem
              repellendus asperiores numquam!
            </p>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              explicabo odio officiis autem minima quibusdam.
            </p>
            <p>
              <a href="#" class="btn btn-outline-primary py-2 px-4">
                Join Our Club
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProfile;
