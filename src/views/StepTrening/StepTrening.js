import React from "react";
import image from "../../assets/img/step1.jpg";
import image2 from "../../assets/img/step3.jpg";
import image3 from "../../assets/img/step2.jpg";
import image4 from "../../assets/img/step4.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function StepTrening() {
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
            STEP TRENING
          </h2>
          <p style={{ padding: "10px" }}>
            Step aerobik je koreografski trening sa mnogo koracanja i gibanja,
            sto daje takodje, formu plesu, ali se sve vreme koristi platforma za
            «penjanje». Platforma se moze prilagoditi na nekoliko razlicitih
            visina, sto omogucava rad vezbacima razlicite utreniranosti. Trening
            se sastoji iz vise vrsta koraka koji se mogu kombinovati sa radom
            ruku i uz dodatna malo opterecenje dvorucnih tegova, pa osim
            izdrzljivosti i sagorevanja kalorija, radi se i na tonusu misica.
            Postoji veliko interesovanje za ovu vrstu aerobika, koju bodibilderi
            koriste kao kardio-trening.
            <br /> <br />
            To je sistem joge koji dinamično povezuje inače statitične klasične
            joga položaje. Aštanga/Vinjasa je vrlo zahtevan sistem i to je „joga
            snage“ koja se vežba brzo i vezano u nizu. <br /> <br />
            Svrha te joge je da se stvori toplota u telu a koja pročišćava kroz
            cirkulaciju i znojenje. Jedna od najpoznatijih serija te škole je i
            „Pozdrav suncu“. Pevačica madona je poklonik Aštanga joge već 30
            godina (vidimo je na slici). Na velikoj slici možete videti tkzv.
            „Osnovnu seriju“ (i bolje da ne znate kako izgleda napredna serija).
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/7LtXAhpSPmg"
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
              <th class="color">Step trening</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color">Step trening</th>
              <th></th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color">Step trening</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th class="color">Step trening</th>
              <th class="color">Step trening</th>
              <th></th>
              <th class="color">Step trening</th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th class="color">Step trening</th>
              <th></th>
              <th class="color">Step trening</th>
              <th></th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th class="color">Step trening</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default StepTrening;
