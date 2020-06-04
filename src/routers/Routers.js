import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "components/Navbars/NavBar";
import Footer from "../components/Footers/FooterBlack";
// pages

import ErrorPage404 from "views/ErrorPages/404ErrorPage/404ErrorPage";
import LandingPage from "views/LandingPage/LandingPage";
import ContactPage from "views/ContactPage/ContactPage";
import AboutUs from "views/AboutUsPage/AboutUsPage";
import Pilates from "views/Pilates/Pilates";
import Yoga from "views/Yoga/Yoga";
import Core from "views/Core/Core";
import Cardio from "views/Cardio/Cardio";
import Tranings from "views/Tranings/Tranings";
import Nutritionist from "views/Nutritionist/Nutritionist";
import BakramJoga from "views/BakramJoga/BakramJoga";
import Massages from "views/Massages/Massages";
import AstangaJoga from "views/AstangaJoga/AstangaJoga";
import BakitiJoga from "views/BakitiJoga/BakitiJoga";
import StartIt from "views/StartIt/StartIt";
import Running from "views/Running/Running";
import StepTrening from "views/StepTrening/StepTrening";
import Pump from "views/Pump/Pump";
import ForceTrening from "views/ForceTrening/ForceTrening";
import Core30 from "views/Core30/Core30";
import StottPilates from "views/StottPilates/StottPilates";
import KlasicanPilates from "views/KlasicanPilates/KlasicanPilates";
import PerformerPilates from "views/PerformerPilates/PerformerPilates";

import ScrollToTop from "../components/Sroll/Scroll";
function AppRouters(props) {
  const [language, setLanguage] = useState("English");
  const [srpski, setSrpski] = useState({
    pocetnaYoga: "Joga",
    text2: "",
  });
  const [english, setEnglish] = useState({
    pocetnaYoga: "Yoga",
    text2: "",
  });
  React.useEffect(() => {}, []);

  return (
    <div>
      <NavBar language={language} setLanguage={setLanguage} />
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/kontakt"
          render={(props) => (
            <ContactPage
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/o-nama"
          render={(props) => (
            <AboutUs
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/pilates"
          render={(props) => (
            <Pilates
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/yoga"
          render={(props) => (
            <Yoga
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/core"
          render={(props) => (
            <Core
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/cardio"
          render={(props) => (
            <Cardio
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/traning"
          render={(props) => (
            <Tranings
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/bakram-joga"
          render={(props) => <BakramJoga {...props} />}
        />
        <Route
          path="/nutritionist"
          render={(props) => (
            <Nutritionist
              {...props}
              language={language}
              srpski={srpski}
              english={english}
            />
          )}
        />
        <Route
          path="/massages"
          render={(props) => <Massages {...props} />}
          language={language}
          srpski={srpski}
          english={english}
        />
        <Route path="/massages" render={(props) => <Massages {...props} />} />
        <Route
          path="/astanga-joga"
          render={(props) => <AstangaJoga {...props} />}
        />
        <Route
          path="/bakiti-joga"
          render={(props) => <BakitiJoga {...props} />}
        />
        <Route path="/startit" render={(props) => <StartIt {...props} />} />
        <Route path="/running" render={(props) => <Running {...props} />} />
        <Route
          path="/step-trening"
          render={(props) => <StepTrening {...props} />}
        />
        <Route path="/pump" render={(props) => <Pump {...props} />} />
        <Route
          path="/force-trening"
          render={(props) => <ForceTrening {...props} />}
        />
        <Route path="/core30" render={(props) => <Core30 {...props} />} />
        <Route
          path="/stott-pilates"
          render={(props) => <StottPilates {...props} />}
        />
        <Route
          path="/klasican-pilates"
          render={(props) => <KlasicanPilates {...props} />}
        />
        <Route
          path="/performer-pilates"
          render={(props) => <PerformerPilates {...props} />}
        />

        <Route render={(props) => <ErrorPage404 {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default AppRouters;
