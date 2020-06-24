import React from "react";
import image from "../../assets/img/performer4.jpg";
import image2 from "../../assets/img/performer1.jpg";
import image3 from "../../assets/img/performer2.jpg";
import image4 from "../../assets/img/performer3.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function PerformerPilates() {
  /*Copy down*/
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [uk, setUk] = useState(1);

  const postavi = () => {
    var array = [];
    array = comments;

    var ukupno = (totalRating + rating) / uk;

    var obj = {
      text: comment,
      rating: rating,
    };

    array.push(obj);
    setUk(2);
    setTotalRating(ukupno);
    setComments(array);
    setComment("");
    setRating(0);
    console.log(array);
    document.getElementById("create-course-form").reset();
  };

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setComment(value);
  };
  /*Copy Up*/
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
            PERFORMER PILATES
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            Pilates je metoda vežbanja koju je osmislio Joseph Pilates. Sama
            ideja o reformeru nastala je za vreme I svetskog rata kada je
            J.Pilates na bolničke krevete konstuisao manje opruge, federe i
            trake pomoću kojih su se ranjenici koji su tada bili vezani za
            bolničke krevete brže oporavljali od onih koji su samo mirovali.
            Prednost vežbanja na reformeru je u simetriji, odnosno jednakom
            opterećenju leve i desne strane prilikom vežbanja. Kod većine ljudi
            statika tela je nejednako razvijena i asimetrična, a sama podela na
            levoruke i desnoruke podrazumeva da je jedna strana tela više
            razvijena od druge.
            <br /> <br />
            Redovnim vežbanjem dolazi do većeg stepena simetrije, odnosno
            jačanja inače slabije strane tela. Reformer pilates je izmedju
            ostalog nastao da bi se pokreti koji se izvode na podlozi (Mat
            pilates) uprostili, kako bi osoba ojačala i da bi onda pilates na
            podlozi bio efikasniji. Specifičnost rada na reformeru i pilates
            spravama uopšte je što su treninzi individualni ili su formirane
            male grupe, gde trener može da se posveti svakom članu. Na taj način
            trener koriguje i prati vežbača pa je napredak vrlo brz, a mogućnost
            povrede smanjen na minimum.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/tD-usRc1aUw"
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
              <th class="color">Performer pilates</th>
              <th></th>
              <th class="color">Performer pilates</th>
              <th></th>
              <th></th>
              <th class="color">Performer pilates</th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th></th>
              <th class="color">Performer pilates</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th class="color">Performer pilates</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color">Performer pilates</th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th class="color">Performer pilates</th>
              <th></th>
              <th></th>
              <th class="color">Performer pilates</th>
              <th></th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="color">Performer pilates</th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>Komentari</h3>
        </div>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col">
          <ul style={{ margin: "0", padding: "0" }}>
            {comments.map((item) => (
              <li key={item} style={{ listStyleType: "none" }}>
                <div
                  style={{
                    height: "70px",
                    width: "100%",
                    border: "1px solid black",
                    marginTop: "10px",
                  }}
                >
                  <StarRatings
                    rating={item.rating}
                    starRatedColor="blue"
                    numberOfStars={6}
                    name="rating"
                  />
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Ostavi Komentar</h3>
        </div>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col">
          <form id="create-course-form">
            <div style={{ width: "90%" }}>
              <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={6}
                name="rating"
              />
            </div>
            <Input type="text" name="comment" onChange={handleOnChange}></Input>
            <Button
              color="primary"
              onClick={postavi}
              style={{ marginTop: "15px" }}
            >
              Postavi commentar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PerformerPilates;
