import React from "react";
import IntroSection from "./components/IntroSection";
import BusinessHistory from "./components/BusinessHistory";
import MissionVision from "./components/MissionVision";
import LeadershipTeam from "./components/LeadershipTeam";
import WhyChooseUs from "./components/WhyChooseUs";

const AboutUS = () => {
  return (
    <div>
      <IntroSection />
      <BusinessHistory />
      <MissionVision />
      <LeadershipTeam />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUS;
