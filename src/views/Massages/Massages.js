import React, { useState } from "react";
import image from "../../assets/img/masaza.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
function Massages() {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    date: "",
    text: "",
  });

  const myDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section} style={{ marginTop: "20px" }}>
          <View style={{ textAlign: "center" }}>
            <Text>Zakazivanje Masaze</Text>
          </View>

          <View style={styles.section}>
            <Text>
              Ime i Prezime: {state.name} {state.lastName}
            </Text>
            <Text>Email:{state.email} </Text>
            <Text>Datum: {state.date}</Text>
            <Text>Opis problema: {state.text}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
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
          <FormGroup id="pdf-form">
            <Label for="firstName">Ime</Label>
            <Input
              type="text"
              name="name"
              id="Name"
              value={state.name}
              onChange={handleOnChange}
              placeholder="Upisite svoje ime"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Prezime</Label>
            <Input
              type="text"
              name="lastName"
              id="lastNamed"
              value={state.lastName}
              onChange={handleOnChange}
              placeholder="Upisite svoje Prezime"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              value={state.email}
              id="exampleEmail"
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Datum termina</Label>
            <Input
              type="date"
              name="date"
              id="date"
              value={state.date}
              onChange={handleOnChange}
              placeholder="Upisite datum zeljenog termina"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Opis problema</Label>
            <Input
              type="textarea"
              onChange={handleOnChange}
              name="text"
              value={state.text}
              id="exampleText"
            />
          </FormGroup>
          {state.name &&
          state.email &&
          state.lastName &&
          state.date &&
          state.text ? (
            <a
              onClick={() =>
                setState({
                  name: "",
                  lastName: "",
                  email: "",
                  date: "",
                  text: "",
                })
              }
            >
              <PDFDownloadLink document={myDocument} fileName="massage.pdf">
                {({ blob, url, loading, error }) => {
                  return loading ? "Loading document..." : "Download now!";
                }}
              </PDFDownloadLink>
            </a>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Massages;
