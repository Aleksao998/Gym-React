import React from "react";
import image from "../../assets/img/cardio.jpg";
import { withRouter } from "react-router-dom";
function Cardio(props) {
  return (
    <div class="site-section" style={{ marginTop: "100px" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="mb-5">
              <img src={image} alt="Image" class="img-fluid" />
            </p>
          </div>
          <div class="col-lg-5 ml-auto">
            <h2 class="site-section-heading mb-3">CARDIO</h2>
            <p>
              Kardio trening je najefikasniji način za skidanje masnih naslaga,
              postizanje i održavanja kondicije. Kardio-vežbe su neophodne za
              svaki efikasan program treninga jer podstiču sagorevanje masnoća
              ali su ujedno dobre i za celokupno zdravlje organizma. Takođe,
              ukoliko dugo niste vežbali, i nemate snage za druge treninge,
              kardio trening uvek možete prilagoditi svojim mogućnostima.
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Start it</span>
              </h2>
              <p>
                Vežbajte START IT i oslobodite se masnih naslaga. Osećaćete se
                lagano i puni energije.
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/startit");
                  }}
                  class="btn btn-outline-primary py-2 px-4"
                >
                  Sazanaj više
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5">
              <h2 class="underline">
                <span>Running</span>
              </h2>
              <p>Trčanje ceo trening sa intervalima odmora.</p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/running");
                  }}
                  class="btn btn-outline-primary py-2 px-4"
                >
                  Sazanaj više
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Step trening</span>
              </h2>
              <p>
                Treing na kome se smenjuje kardio i vežbe snage uz muziku. Radi
                se sa step klupicom uz koreografiju.
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/step-trening");
                  }}
                  class="btn btn-outline-primary py-2 px-4"
                >
                  Sazanaj više
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Cardio);
