import React from "react";
import ContactSupport from "./components/ContactSupport";
import FAQSection from "./components/FaqSection";
import MapsSection from "./components/MapsSection";

const Contact = () => {
  return (
    <div>
      <ContactSupport />
      <MapsSection />
      <FAQSection />
    </div>
  );
};

export default Contact;
