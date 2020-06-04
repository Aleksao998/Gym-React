import React from "react";
import image from "../../assets/img/PUMP5.jpg";
import image2 from "../../assets/img/PUMP6.jpg";
import image3 from "../../assets/img/PUMP7.jpg";
import image4 from "../../assets/img/PUMP8.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function Pump() {
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
            PUMP TRENING
          </h2>
          <p style={{ padding: "10px" }}>
            PUMP je originalni trening sa šipkom i tegovima koji oblikuje i jača
            telo. Trenutno se sprovodi u više od 13 000 klubova širom sveta.
            Najpopularniji je progam u svetu. Globalni fenomen.
            <br /> PUMP je trening sa opterećenjem i stoga je idealan za sve one
            koji svom uobičajenom aerobnom treningu žele da dodaju i trening
            snage. Kombinacija sjajne muzike, neuobičajene koreografije i
            inspirativnih instruktora motiviše vežbače do poslednjeg minuta
            treninga.
            <br /> PUMP je jedinstvena formula kojom ćete oblikovati figuru i
            izgubiti višak masnoće, a ujedno ojačati telo i samopouzdanje podići
            na viši nivo. Želite snažno, oblikovano i fit telo, a da pri tom ne
            dobijete neželjeni obim? BODYPUMP može doneti rezultate kojima
            težite i transformisati vaše telo primenemom efekta ponavljanja. Uz
            800 ponavljanja po treningu bićete vitki, snažni i nezaustavljivi! U
            uobičajenom pedesetpetominutnom času koristimo specifičnu muziku
            koja vas motiviše i vodi kroz čas uz maksimalne efekte.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/6Ux2x2mGGl4"
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
              <th></th>
              <th></th>
              <th class="color"> PUMP </th>
              <th></th>
              <th></th>
              <th class="color"> PUMP </th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th class="color"> PUMP </th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> PUMP </th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th class="color"> PUMP </th>
              <th></th>
              <th class="color"> PUMP </th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th class="color"> PUMP </th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> PUMP </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th class="color"> PUMP </th>
              <th></th>
              <th class="color"> PUMP </th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Pump;
