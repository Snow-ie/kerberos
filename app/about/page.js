import React from "react";
import IntroSection from "./components/IntroSection";
import BusinessHistory from "./components/BusinessHistory";
import MissionVision from "./components/MissionVision";
import LeadershipTeam from "./components/LeadershipTeam";
import WhyChooseUs from "./components/WhyChooseUs";
import CoreServices from "./components/CoreValue";

const AboutUS = () => {
  return (
    <div>
      <IntroSection />
      <BusinessHistory />
      <MissionVision />
      <CoreServices />
      <LeadershipTeam />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUS;
