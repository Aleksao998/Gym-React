import React from "react";
import image from "../../assets/img/nutrition.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";

function Nutritionist() {
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
            <h2 class="site-section-heading mb-3">NUTRICIONISTA</h2>
            <p>
              Nutricionista je tu da vam pomogne da na zdrav i bezbedan način
              dostignete željene ciljeve i transformišete svoje telo. Internet
              je prepun mahom štetnih i neefikasnih dijeta koje dovode do jo-jo
              efekta, i u najgorem slučaju, značajnog pogoršanja vašeg zdravlja.
              Svaka osoba koja se obrati nutricionisti za pomoć dobiće posebni
              tretman, i plan ishrane koji odgovara njihovim fitnes ciljevima, i
              fizičkom zdravlju. Osobe sa zdravstvenim problemima ko što je
              fijabetes ili visok krvni pritisak moraju posebno da vode računa o
              ishrani, i nutricionista za svaku osobu ponaosob osmišljava
              adekvatni plan ishrane koji će, u kombinaciji sa treningom,
              dovesti do željene transformacije tela i pre svega, zdravog i
              srećnijeg života. Uostalom, neadekvatna ishrana bogata trans
              masnim kiselinama I šećerima može izazvati niz zdravstvenih
              problema.
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

export default Nutritionist;
