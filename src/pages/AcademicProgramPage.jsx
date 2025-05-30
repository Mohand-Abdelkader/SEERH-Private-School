import ProgramsOverview from "../components/ProgramsOverview";
import CallToAction from "../components/CallToAction";
import Curriculum from "../components/Curriculum";
import Hero from "../ui/Hero";
import { useTranslation } from "react-i18next";

function AcademicProgramPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      <Hero
        url="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        title={t("programs.title")}
        paragraph={t("programs.description")}
      />

      <ProgramsOverview />

      <Curriculum />

      <CallToAction />
    </div>
  );
}

export default AcademicProgramPage;
