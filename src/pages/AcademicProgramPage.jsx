import { Button } from "../ui/Button";
import AcademicHero from "../components/AcademicHero";
import ProgramsOverview from "../components/ProgramsOverview";
import CallToAction from "../components/CallToAction";
import Curriculum from "../components/Curriculum";
function AcademicProgramPage() {
  return (
    <div className="pt-16">
      <AcademicHero />

      <ProgramsOverview />

      <Curriculum />

      <CallToAction />
    </div>
  );
}

export default AcademicProgramPage;
