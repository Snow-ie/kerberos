import AboutSection from "./components/AboutSection";
import Expertise from "./components/Expertise";
import ExpertInsights from "./components/ExpertiseInsight";
import HeroSection from "./components/HeroSection";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ValuesSection />
      <AboutSection />
      <Expertise />
      <ExpertInsights />
    </div>
  );
}
