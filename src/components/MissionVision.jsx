import { useTranslation } from "react-i18next";

function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">
              {t("mission_vision.mission.title")}
            </h3>
            <p className="text-[#606060]">
              {t("mission_vision.mission.description")}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">
              {t("mission_vision.vision.title")}
            </h3>
            <p className="text-[#606060]">
              {t("mission_vision.vision.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
