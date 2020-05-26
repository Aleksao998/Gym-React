import React from "react";
import image from "../../assets/img/core.jpg";
function Core() {
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
            <h2 class="site-section-heading mb-3">CORE</h2>
            <p>
              Trening koji traje 30 minuta, a donosi fantastične rezultate jeste
              CORE. Po novom letnjem rasporedu i on je uveden kao novi trening.
              Core je tu da te odvede na viši fitnes nivo i da u isto vreme
              ojača i oblikuje tvoje telo. DA LI SI IKAD BIO NA OVOM TRENINGU?
              Ako nisi, sad je pravo vreme da vidiš zašto svi toliko vole Core i
              kako će on da doprinese tvom izgledu. Core kombinuje najbolje
              elemente personalnog treninga sa motivišućom muzikom i energijom
              grupnog fitnes treninga.
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>TRX CIRCUIT / PUMP</span>
              </h2>
              <p>
                Najbolje je vežbati sa sopstvenom težinom. Popularni ,,viseći”
                trening TRX vam omogućava upravo to. Prilgođen je svim nivoima
                kondicije.
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
                <span>Force trening</span>
              </h2>
              <p>
                Bazičnim pokretima oblikujte vaše telo. Povećajte mišićni tonus
                i ojačajte mišiće celog tela.
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
                <span>Core 30</span>
              </h2>
              <p>
                Želite trbušnjake, moraćete malo da se potrudite . Pored
                korekcije ishrane, vežbajte core i imaćete stomak kakav ste
                oduvek želeli. I vaša leđa će vam biti zahvalna.
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

export default Core;
