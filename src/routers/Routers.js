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
function AppRouters(props) {
  React.useEffect(() => {}, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route path="/kontakt" render={(props) => <ContactPage {...props} />} />
        <Route path="/o-nama" render={(props) => <AboutUs {...props} />} />
        <Route path="/pilates" render={(props) => <Pilates {...props} />} />
        <Route path="/yoga" render={(props) => <Yoga {...props} />} />
        <Route path="/core" render={(props) => <Core {...props} />} />
        <Route path="/cardio" render={(props) => <Cardio {...props} />} />
        <Route render={(props) => <ErrorPage404 {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default AppRouters;
