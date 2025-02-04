import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ValuesSection />
      <AboutSection />
    </div>
  );
}
