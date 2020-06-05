import React from "react";
import image from "../../assets/img/pilates1.jpg";
import image2 from "../../assets/img/pilates2.jpg";
import image3 from "../../assets/img/pilates3.jpg";
import image4 from "../../assets/img/pilates4.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function KlasicanPilates() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div class="row " style={{ marginTop: "70px" }}>
        <div class="col-3 padding0">
          <img src={image} alt="Image" class="img-fluid" />
        </div>
        <div class="col-3 padding0">
          <img src={image2} alt="Image" class="img-fluid" />
        </div>
        <div class="col-3 padding0">
          <img src={image3} alt="Image" class="img-fluid" />
        </div>
        <div class="col-3 padding0">
          <img src={image4} alt="Image" class="img-fluid" />
        </div>
      </div>

      <div class="row" style={{ marginTop: "20px" }}>
        <div class="col-lg-5 sm-12 ml-auto">
          <h2 class="site-section-heading mb-3" style={{ padding: "10px" }}>
            KLASICAN PILATES
          </h2>
          <p style={{ padding: "10px" }}>
            Pilates predstavlja sistem vežbi istezanja tela i snage koji je
            prije devedeset godina razvio Joseph H. Pilates.
            <br /> Pilatesom se jačaju i oblikuju mišići, ispravlja se drzanje
            tela, daje gipkost, poboljšava ravnoteža, te usavršava oblik tela.
            <br />
            <br />
            Pilates je razvijen da bi se njime stvorilo zdravo telo, zdrav um i
            zdrav zivot. Pilates filozofija usmerena je na uvežbavanje tela i
            uma da deluju zajedno prema ostvarenju sveukupne telesne kondicije.
            Iako je rođen u znatno mirnijem vremenu nego što je današnje,
            J.Pilates je razumeo u kolikoj meri dnevni raspored opterecuje telo
            i um, te je težio promeniti naše ponašanje kako bismo pri vežbanju
            imali na umu učinkovitost u obavljanju svakodnevnih zadataka.
            <br />
            Vežbe pilatesa ne zahtevaju nikakvu opremu i mogu se izvoditi u
            svakom prostoru gdje se telo može udobno ispružiti.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350px"
            src="https://www.youtube.com/embed/OC5U5hazdY4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h2 class="terminiNaslov">RASPORED TERMINA</h2>
          <table class="Termini" style={{ width: "60%", margin: "0 auto" }}>
            <tr>
              <th></th>
              <th>Ponedeljak</th>
              <th>Utorak</th>
              <th>Sreda</th>
              <th>Cetvrtak</th>
              <th>Petak</th>
              <th>Subota</th>
            </tr>
            <tr>
              <th>10:15-12:00</th>
              <th class="color">Klasican pilates</th>
              <th></th>
              <th class="color">Klasican pilates</th>
              <th></th>
              <th></th>
              <th class="color">Klasican pilates</th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th class="color">Klasican pilates</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th class="color">Klasican pilates</th>
              <th></th>
              <th class="color">Klasican pilates</th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th class="color">Klasican pilates</th>
              <th></th>
              <th></th>
              <th class="color">Klasican pilates</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th></th>
              <th class="color">Klasican pilates</th>
              <th></th>
              <th></th>
              <th class="color">Klasican pilates</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default KlasicanPilates;
