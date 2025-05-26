import { Button } from "../ui/Button";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import History from "../components/History";
import Values from "../components/Values";
import CallToAction from "../components/CallToAction";
function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />

      <MissionVision />

      <History />

      <Values />

      <CallToAction />
    </div>
  );
}

export default AboutPage;
