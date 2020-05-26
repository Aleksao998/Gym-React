import React from "react";
import image from "../../assets/img/masaza.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
function Massages() {
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
            <h2 class="site-section-heading mb-3">SPORTSKA MASAŽA</h2>
            <p>
              Sportska masaža se preporučuje sportistima kao i rekreativcima.
              Postoji nekoliko vrsta sportskih masaža. Masaža koja se izvodi
              nakon treninga ili dugotrajnog napornog rada mišića sprečava
              nastanak mlečne kiseline, ili istu otklanja ukoliko je došlo do
              njenog nagomilavanja. Nakupljena mlečna kiselina se pretvara u
              kalcifikate, koji mogu da izazovu mišićnu napetost pa čak i bol.
              Postoje i sportske masaže čija je uloga da saniraju najčešće
              sportske povrede (bacački lakat, teniski lakat, plivačko rame,
              skakačko koleno itd.). Ova masaža preporučuje se i kada do povrede
              nije došlo, nego je mišić umoran, pa masažom treba da se opusti i
              rastereti. Često se rade i sportske masaže koje služe za pripremu
              sportiste za takmičenje, utakmicu i sl. Ova masaža opušta
              periferni nervni sistem i priprema telo za nove napore. Sportskim
              masažama se poboljšava prokrvljenost mišića, pa je on spremniji za
              napor koji sledi.
            </p>
          </div>
        </div>
      </div>
      <div class="forma">
        <h2 class="site-section-heading mb-3">Rezervacija termina</h2>
        <form>
          <FormGroup>
            <Label for="firstName">Ime</Label>
            <Input
              type="text"
              name="Name"
              id="Name"
              placeholder="Upisite svoje ime"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Prezime</Label>
            <Input
              type="text"
              name="lastName"
              id="lastNamed"
              placeholder="Upisite svoje Prezime"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Datum termina</Label>
            <Input
              type="date"
              name="date"
              id="date"
              placeholder="Upisite datum zeljenog termina"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Opis problema</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button color="primary" type="submit">
            Potvrdi
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Massages;
