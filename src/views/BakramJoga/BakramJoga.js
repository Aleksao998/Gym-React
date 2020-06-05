import React from "react";
import image from "../../assets/img/bakram4.jpg";
import image2 from "../../assets/img/bakram2.jpg";
import image3 from "../../assets/img/bakram3.jpg";
import image4 from "../../assets/img/bakram4.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function BakramJoga() {
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
        <div class="col-lg-5 ml-auto">
          <h2 class="site-section-heading mb-3">BIKRAM JOGA</h2>
          <p>
            Bikram jogu je osnovao Bikram Čouduri (vidimo ga na slici sa dvoje
            vežbača) je „vrela joga“ u kojoj se prostorija zagreje na 30 – 40 C
            pa se uz intenzivno vežbanje dobije i efekat saune. Ta joga se vežba
            u serijama od kojih je najpoznatija tkzv Početna serija koja ima 26
            položaja i dve vsrte disanja. Vežbanje joge u tako zagrejanim
            prostorijama izaziva jako znojenje pa se veruje da ona oslobađa telo
            od otrova i čini ga fleksibilnim. Postoje i rizici kod takvog
            vežbanja i to počevši od nesvestica usled dehidracije pa preko
            povreda sve do srčanih udara
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px" }}>
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/Ocg3InAEZMU"
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
              <th class="color">Bakram Joga</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th></th>
              <th class="color">Bakram Joga</th>
              <th></th>
              <th class="color">Bakram Joga</th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th class="color">Bakram Joga</th>
              <th></th>
              <th></th>
              <th class="color">Bakram Joga</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th class="color">Bakram Joga</th>
              <th></th>
              <th></th>
              <th class="color">Bakram Joga</th>
              <th></th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th></th>
              <th class="color">Bakram Joga</th>
              <th></th>
              <th></th>
              <th class="color">Bakram Joga</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default BakramJoga;
