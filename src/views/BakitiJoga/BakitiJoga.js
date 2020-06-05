import React from "react";
import image from "../../assets/img/joga1.jpg";
import image2 from "../../assets/img/joga2.jpg";
import image3 from "../../assets/img/joga3.jpg";
import image4 from "../../assets/img/joga4.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function BakitiJoga() {
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
          <h2 class="site-section-heading mb-3">BAKTI JOGA</h2>
          <p style={{ padding: "10px" }}>
            Bakti znači ljubav i predanost Bogu i njegovoj kreaciji, poštovanje
            i pažnju prema svim živim bićima i celokupnoj prirodi. Svako može
            ići putem bakti: bio mlad ili star, siromašan ili bogat, nezavisno
            od nacionalne ili verske pripadnosti. Bakti joga nas vodi do cilja
            sigurno i bez stranputica. Ona podrazumeva i ljubav prema Bogu kroz
            ljubav prema Išta devti (Bogu u jednoj od njegovih inkarnacija). Bog
            je sveprisutan. On je u nama i oko nas. Mi smo povezani sa njim
            jednom tananom niti, a ta nit je ljubav. Bog je univerzalna ljubav
            koja nas sve okružuje i prožima svojom milošću, ali mi toga nismo
            svesni. Kada se ta svesnost probudi, kada jednom upoznamo božansku
            ljubav, ne želimo više ništa drugo. Tada znamo da je Bog smisao
            istinske ljubavi. Čovek bez bakti je kao riba bez vode, kao ptica
            bez krila, kao noć bez meseca i zvezda. Svim bićima je potrebna
            ljubav. Sa njom se osećamo zaštićeni i srećni poput deteta u
            majčinom naručju, poput putnika koji se nakon dugog zamornog puta
            konačno vratio u svoj dom.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
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
export default BakitiJoga;
