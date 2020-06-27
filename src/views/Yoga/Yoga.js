import React from "react";
import image from "../../assets/img/yoga.jpg";
import { withRouter } from "react-router-dom";
function Yoga(props) {
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
            <h2 class="site-section-heading mb-3">YOGA</h2>
            <p>
              Praktikovanjem tehnika joge postiže se veća emotivna
              uravnoteženost, odsustvo doživljaja uskraćenosti i destrukcije,
              zadovoljstvo sobom, osećanje smisla života, poznavanje sopstvenog
              načina reagovanja – kroz usredsređivanje pažnje na dešavanja u
              svom telu, usporavanje i produbljivanje disanja, sklad disanja i
              pokreta, telesnu i mentalnu relaksaciju. Na taj način se podstiče
              i okrenutost sadašnjosti, utemeljnost u realnosti i perspektivno
              posmatranje budućnosti. Hatha Yoga pogodna je za početnike, isto
              kao i za napredne vežbače, a preporučuje se svima kojima je
              potreban sklad i balans u životu.
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Bakram joga</span>
              </h2>
              <p>
                Bikram joga poznatija kao “vrela joga” izvodi se u prostoriji
                zagrejanoj na 30 do 40 C. Pruža blagi efekat saune, a vežbe se
                izvode u serijama. Samo početna serija ima 26 položaja.
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/bakram-joga");
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
                <span>Aštanga joga</span>
              </h2>
              <p>
                Aštanga/Vinjasa poznata je i kao „joga snage“ koja se vežba brzo
                i vezano, gotovo bez pauza, u nizu. Stvara toplotu u telu,
                pročišćava organizam kroz cirkulaciju i znojenje. Jedna od
                najpoznatijih serija ove vrste joge je „Pozdrav suncu“.
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/astanga-joga");
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
                <span>Bakiti joga</span>
              </h2>
              <p>
                Mnogi kažu da je zapravo najteži oblik joge jer predstavlja punu
                posvećenost. Radi se o traženju puta ka Bogu i potpunom
                posvećenju. Izvodi se meditacijom, pevanjem mantri i duhovnih
                pesama.
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/bakiti-joga");
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

export default withRouter(Yoga);
