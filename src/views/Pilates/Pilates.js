import React from "react";
import image from "../../assets/img/pilates.jpg";

function Pilates() {
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
            <h2 class="site-section-heading mb-3">PILATES</h2>
            <p>
              Trening koji je možda najcelovitiji sinonim fitnesa generalno.
              Daje rezultate u povećanju elastičnosti, snage i energije,
              svesnosti sopstvenog tela, poboljšanje mentalne koncentracije.
              Utiče na poboljšanje ravnoteže i koriguje nepravilno držanje
              kičme. Preporučuje se početnicima i naprednim rekreativcima.
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Stott pilates</span>
              </h2>
              <p>
                STOTT PILATES repertoar čini više od 500 sistematičnih vežbi
                koje se izvode na strunjači, sa ili bez rekvizita, i na pilates
                mašinama. To otvara mogućnost lakog modifikovanja i
                prilagođavanja specifičnim zahtevima svakog pojedinca.
              </p>
              <p>
                <a href="#" class="btn btn-outline-primary py-2 px-4">
                  Sazanaj više
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5">
              <h2 class="underline">
                <span>Klasični pilates</span>
              </h2>
              <p>
                Pilates je inovativni i siguran mind&body program vežbanja koji
                se uglavnom izvodi na podlozi za vežbanje i uz upotrebu
                različitih rekvizita. Vežbajući Pilates razvijate svesnost o
                svom telu, dobru posturu i lake i graciozne pokrete.
              </p>
              <p>
                <a href="#" class="btn btn-outline-primary py-2 px-4">
                  Sazanaj više
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Performer pilates</span>
              </h2>
              <p>
                Vežbanje na reformeru omogućava aktiviranje velikog broja
                mišića, celokupne muskulature tela, gde se posebna pažnja
                poklanja dubokim posturalim mišićima, posebno mobilnosti i
                stabilnosti kičmenog stuba i dubokih mišića ledja, stabilnosti
                pelvisa kao i ramenog pojasa.
              </p>
              <p>
                <a href="#" class="btn btn-outline-primary py-2 px-4">
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

export default Pilates;
