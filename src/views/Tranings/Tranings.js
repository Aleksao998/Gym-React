import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import bikram from "../../assets/img/bikram.jpg";
import pilates from "../../assets/img/pilates.jpg";
import pump from "../../assets/img/pump.jpg";
import astanga from "../../assets/img/astanga.jpg";
import startit from "../../assets/img/startit.jpg";
import klasicniPi from "../../assets/img/klasicniP.jpg";
import force from "../../assets/img/force.jpg";
import trcanje from "../../assets/img/trcanje.jpg";
import bahkti from "../../assets/img/bahkti.jpg";
import performace from "../../assets/img/performer.jpg";
import core30 from "../../assets/img/core-30.jpg";
import startits from "../../assets/img/startits.jpg";
function Trainings(props) {
  return (
    <div
      style={{ marginTop: "70px", paddingBottom: "20px" }}
      className="allTrainings"
    >
      <div class="container">
        <div class="row">
          <div
            class="heading-with-border text-center mb-5"
            style={{ width: "100%" }}
          >
            <h2 class="heading text-uppercase">Vrste Treninga</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="media-image">
              <img src={bikram} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Bikram</h2>
                <p>Trajanje:45min</p>
                <p>Nivo: 4</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={pilates} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Stot</h2>
                <p>Trajanje:55min</p>
                <p>Nivo: 3</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="media-image">
              <img src={pump} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Pump</h2>
                <p>Trajanje:65min</p>
                <p>Nivo: 5</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={startits} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Start-it</h2>
                <p>Trajanje:35min</p>
                <p>Nivo: 3</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row rowAllTraining">
          <div class="col-md-3">
            <div class="media-image">
              <img src={astanga} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Aštanga</h2>
                <p>Trajanje:45min</p>
                <p>Nivo: 4</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={klasicniPi} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Klasični</h2>
                <p>Trajanje:35min</p>
                <p>Nivo: 2</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="media-image">
              <img src={force} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Force</h2>
                <p>Trajanje:55min</p>
                <p>Nivo: 4</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={trcanje} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Trčanje</h2>
                <p>Trajanje:65min</p>
                <p>Nivo: 3</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row rowAllTraining">
          <div class="col-md-3">
            <div class="media-image">
              <img src={bahkti} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Bakti</h2>
                <p>Trajanje:60min</p>
                <p>Nivo: 2</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={performace} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Performer</h2>
                <p>Trajanje:120min</p>
                <p>Nivo: 3</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={core30} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Core-30</h2>
                <p>Trajanje:30min</p>
                <p>Nivo: 5</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={startit} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Step</h2>
                <p>Trajanje:60min</p>
                <p>Nivo: 2</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, voluptate.
                </p>
                <p className="text-center mt-3">
                  <a
                    onClick={() => {
                      props.history.push("/");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">Detaljno</span>
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

export default withRouter(Trainings);
