import React from "react";
import image from "../../assets/img/running1.png";
import image2 from "../../assets/img/running2.jpg";
import image3 from "../../assets/img/running3.jpg";
import image4 from "../../assets/img/running4.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function Running() {
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
            RUNNING TRENING
          </h2>
          <p style={{ padding: "10px" }}>
            Redovnim vežbanjem, odnosno trčanjem ne samo da ćete poboljšati
            svoje zdravstveno stanje, uticati na smanjenje kilograma i
            oblikovati vašu mišićnu masu, već ćete se i znatno bolje osećati i
            biti privlačniji pripadnicama lepšeg pola.
            <br /> Pre svega dajte seb vremena, kako biste stekli izdržljivost i
            bili u mogućnosti da pravilno trčite i dišete pri tom, jer
            nepravilno disanje zapravo je razlog zašto se zadišemo i ne možemo
            da dođemo do sada kada se konačno zaustavimo. Bolovi koje ćete u
            početku osećati znak su da ste predugo sedeli na krevetu i bili
            neaktvni. Isti će vas nagovarati da odustanete ali znajte da su oni
            samo pokazatelj toga da se vaše telo suočava sa pozitivnim
            promenama. Dakle, krenite laganim korakom. Kada osetite bol,
            usporite, pre nego što se potpuno zaustavite. Odmoite na kratko i
            kada povratite snagu krenite ponovo.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/n4I_fmegTRk"
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
              <th class="color"> Running </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> Running </th>
              <th></th>
              <th class="color"> Running </th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th class="color"> Running </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th class="color"> Running </th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> Running </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th></th>
              <th class="color"> Running </th>
              <th></th>
              <th class="color"> Running </th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Running;
