import React from "react";
import image from "../../assets/img/core301.jpg";
import image2 from "../../assets/img/core302.jpg";
import image3 from "../../assets/img/core303.jpg";
import image4 from "../../assets/img/core304.png";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function Core30() {
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
            CORE30 TRENING
          </h2>
          <p style={{ padding: "10px" }}>
            Centralne mišićne strukture trupa (eng. core) predstavljaju osnovu
            svakog pokreta One stabilizuju kičmeni stub, grudni koš i karlicu
            prilikom kretanja. Imaju i ključnu ulogu u svakodnevnim biološkim
            aktivnostima čoveka – stvaraju pritisak u trbušnoj duplji, drže
            unutrašnje organe na svom mestu i pomažu prilikom udisanja i
            izdisanja, kao i prilikom porođaja ili napora pri izbacivanja
            telesnog otpada. Mišići trupa su od ključne važnosti ne samo za
            izgled i snagu tela, već imaju i snažan uticaj na kvalitet života
            povezan sa zdravljem.
            <br />
            Ispunjena detaljnim instrukcijama i razumljivim programima za svaki
            nivo fizičke forme, za razvoj snažnijih centralnih mišićnih
            struktura (core) namenjen i ženama i muškarcima, bez obzira na
            starosnu dob, kao i osobama sa specifičnim potrebama poput trudnica,
            dece u razvoju koja pate od problema sa držanjem tela i
            rekonvalescenata.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/dJlFmxiL11s"
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
              <th class="color"> Core30 trening </th>
              <th></th>
              <th class="color"> Core30 trening </th>
              <th></th>
              <th></th>
              <th class="color"> Core30 trening </th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th class="color"> Core30 trening </th>
              <th class="color"> Core30 trening </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> Core30 trening </th>
              <th></th>
              <th class="color"> Core30 trening </th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th class="color"> Core30 trening </th>
              <th></th>
              <th></th>
              <th class="color"> Core30 trening </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th class="color"> Core30 trening </th>
              <th></th>
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
export default Core30;
