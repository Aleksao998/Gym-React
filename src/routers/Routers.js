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

import Massages from "views/Massages/Massages";

function AppRouters(props) {
  const [language, setLanguage] = useState("Srpski");
  const [srpski, setSrpski] = useState({
    text: "",
    text2: "",
  });
  const [english, setEnglish] = useState({
    text: "",
    text2: "",
  });
  React.useEffect(() => {}, []);

  return (
    <div>
      <NavBar language={language} setLanguage={setLanguage} />
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route path="/kontakt" render={(props) => <ContactPage {...props} />} />
        <Route path="/o-nama" render={(props) => <AboutUs {...props} />} />
        <Route path="/pilates" render={(props) => <Pilates {...props} />} />
        <Route path="/yoga" render={(props) => <Yoga {...props} />} />
        <Route path="/core" render={(props) => <Core {...props} />} />
        <Route path="/cardio" render={(props) => <Cardio {...props} />} />
        <Route path="/traning" render={(props) => <Tranings {...props} />} />
        <Route
          path="/nutritionist"
          render={(props) => <Nutritionist {...props} />}
        />
        <Route path="/massages" render={(props) => <Massages {...props} />} />
        <Route render={(props) => <ErrorPage404 {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default AppRouters;
