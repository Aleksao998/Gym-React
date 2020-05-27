import React from "react";

import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import BlockFeature from "./BlockFeature/BlockFeature";
import InfoProfile from "./Info/Info";
import OurTrainers from "./OurTrainer/OurTrainer";
import PopularTrainings from "./PopularTrainings/PopularTrainings";

function LandingPage(props) {
  return (
    <div>
<<<<<<< HEAD
      <LandingPageHeader language={props.language} />

      <BlockFeature />
=======
      <LandingPageHeader />
>>>>>>> origin/master
      <PopularTrainings />
      <InfoProfile />
      <OurTrainers />
    </div>
  );
}

export default LandingPage;
