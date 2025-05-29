import MissionVision from "../components/MissionVision";
import History from "../components/History";
import Values from "../components/Values";
import CallToAction from "../components/CallToAction";
import Hero from "../ui/Hero";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      <Hero
        title={t("about.title")}
        paragraph={t("about.description1")}
        url="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <MissionVision />

      <History />

      <Values />

      <CallToAction />
    </div>
  );
}

export default AboutPage;
