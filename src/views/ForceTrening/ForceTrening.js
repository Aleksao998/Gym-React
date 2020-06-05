import React from "react";
import image from "../../assets/img/pump1.jpg";
import image2 from "../../assets/img/pump2.jpg";
import image3 from "../../assets/img/pump1.jpg";
import image4 from "../../assets/img/pump2.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function ForceTrening() {
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
            FORCE TRENING
          </h2>
          <p style={{ padding: "10px" }}>
            Core, jezgro ili središte čine mišići oko kukova, trbušni mišići,
            mišići leđa i ramena. Ovi mišići funkcionišu kao jedna snažna
            celina. Mišiće jezgra možemo podeliti u grupe. Prvu grupu čine
            duboki mišići leđa i stomaka. Ovi mišići se nalaze blizu kičme i
            njihova funkcija je da pružaju potporu kičmi, kao na primer kada
            mirno stojimo. U drugu grupu spadaju površinski mišići stomaka i
            leđa. Površinski trbušni mišići kontrolišu položaj karlice i rebara
            i omogućavaju nam da rotiramo i savijamo trup prema napred. U ovu
            grupu spadaju i površni leđni mišići koji vrše opružanje trupa. Dok
            hodamo ili trčimo, na primer, sposobnost da stabilizujemo karlicu
            omogućava nam da efikasnije koristimo mišiće nogu. Treću grupu čine
            mišići i vezivna tkiva koja omogućavaju da se snaga prenese sa
            donjih na gornje ekstremitete.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/Og_fwcOzAmE"
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
              <th class="color"> Force trening </th>
              <th></th>
              <th class="color"> Force trening </th>
              <th></th>
              <th></th>
              <th class="color"> Force trening </th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th class="color"> Force trening </th>
              <th></th>
              <th class="color"> Force trening </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th class="color"> Force trening </th>
              <th></th>
              <th class="color"> Force trening </th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> Force trening </th>
              <th></th>
              <th class="color"> Force trening </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th class="color"> Force trening </th>
              <th></th>
              <th></th>
              <th class="color"> Force trening </th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default ForceTrening;
