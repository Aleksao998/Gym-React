import React from "react";
import image from "../../assets/img/startit1.jpg";
import image2 from "../../assets/img/startit2.jpg";
import image3 from "../../assets/img/startit3.jpg";
import image4 from "../../assets/img/startit4.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function StartIt() {
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
            START IT TRENING
          </h2>
          <p style={{ padding: "10px" }}>
            Start IT treninzi se sastoje od kratkih ali jakih intervala fizičke
            aktivnosti koji su praćeni adekvatnim odmorom između njih. Trajanje
            intervala može da bude u opsegu od 10–60 sekundi. E sada, koliko
            ćete intervala izvesti u toku treninga, koliko ćete pauzirati
            između, koliki će biti njihov intenzitet i koju ćete fizičku
            aktivnost izabrati, zavisi od nivoa vaše fizičke pripremljenosti.
            Najčešće korišćeni i sigurno najefikasniji su intervali trčanja,
            mada je moguće izvoditi ove treninge u plivanju, biciklizmu,
            veslanju itd. U svakom slučaju, izabraćete onu aktivnost u kojoj ste
            najbolji, jer će vam to dati najveće mogućnosti da napredujete.
            <br /> <br />
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/CBWQGb4LyAM"
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
              <th class="color">StartIt trening</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color">StartIt trening</th>
              <th></th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th class="color">StartIt trening</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th class="color">StartIt trening</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color">StartIt trening</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th class="color">StartIt trening</th>
              <th></th>
              <th></th>
              <th class="color">StartIt trening</th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default StartIt;
