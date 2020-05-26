import React from "react";

function BlockFeature() {
  return (
    <div class="border-bottom">
      <div class="row no-gutters">
        <div class="col-md-6 col-lg-3">
          <div class="w-100 h-100 block-feature p-5 bg-light">
            <span style={{ display: "inline!important" }}>
              <i className="flaticon-airplane49 display-4"></i>
            </span>
            <h2 class="underline">
              <span>Yoga</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat iure eveniet perferendis odit est.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="w-100 h-100 block-feature p-5">
            <span class="d-block mb-3">
              <span class="flaticon-weight display-4"></span>
            </span>
            <h2>Core</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat iure eveniet perferendis odit est.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="w-100 h-100 block-feature p-5 bg-light">
            <span class="d-block mb-3">
              <span class="flaticon-boxing-gloves display-4"></span>
            </span>

            <h2>Pilates</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat iure eveniet perferendis odit est.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="w-100 h-100 block-feature p-5">
            <span class="d-block mb-3">
              <span class="flaticon-running display-4"></span>
            </span>
            <h2>Cardio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              fugiat iure eveniet perferendis odit est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockFeature;
