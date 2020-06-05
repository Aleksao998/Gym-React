import React from "react";
import image from "../../assets/img/stott1.jpg";
import image2 from "../../assets/img/stott2.jpg";
import image3 from "../../assets/img/stott3.jpg";
import image4 from "../../assets/img/stott4.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Row, Container, Col } from "reactstrap";
function StottPilates() {
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
            STOTT PILATES
          </h2>
          <p style={{ padding: "10px" }}>
            STOTT PILATES se može vežbati čitavog života, od detinjstva do
            duboke starosti jer su vežbe dozirane i prilagođene pojedincu. STOTT
            PILATES je izuzetno specifičan i sofisticiran način vežbanja
            pilatesa na originalnim terapeutskim spravama reformerima, koje je
            osmislio Jozef Pilates. Uz pomoć STOTT PILATESA očuvaćete gipkost,
            izdužiti mišiće i što je još važnije imaćete pravilno držanje tela,
            jer ćete ojačati mišiće koji čine potporu kičmenog stuba. Uvodni
            trening Stott pilatesa je besplatan. Uvodni trening podrazumeva
            pregled i analizu Vaše posture (držanja) tela. Na osnovu potreba
            Vašeg tela, terapeut pravi za Vas program vežbi, a zavisnosti od
            tipa vežbi moći ćete da se odlučite za individualne ili
            poluindividualne treninge. U toku uvodnog treninga upoznaćete se sa
            osnovnim principima vežbanja na spravi – reformeru. Vežbanjem na
            reformerima aktivirate I one mišiće koji su inače malo aktivni.
            Treninge vode sertifikovani treneri sa inostranim iskustvom i
            dipl.viši fizioterapeut
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/hGx-AH0yieU"
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
              <th class="color"> Stott pilates</th>
              <th></th>
              <th></th>
              <th class="color"> Stott pilates</th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th class="color"> Stott pilates</th>
              <th></th>
              <th></th>
              <th class="color"> Stott pilates</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th class="color"> Stott pilates</th>
              <th></th>
              <th class="color"> Stott pilates</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> Stott pilates</th>
              <th class="color"> Stott pilates</th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th class="color"> Stott pilates</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color"> Stott pilates</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default StottPilates;
