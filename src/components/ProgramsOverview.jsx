import { useTranslation } from "react-i18next";

function ProgramsOverview() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d4c83] mb-12">
          {t("programs_overview.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-[#f8f9fa] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">
              {t("programs_overview.elementary.title")}
            </h3>
            <p className="text-[#606060] mb-6">
              {t("programs_overview.elementary.description")}
            </p>
            <ul className="space-y-3">
              {["feature1", "feature2", "feature3"].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#0d4c83]">•</span>
                  <span className="text-[#606060]">
                    {t(`programs_overview.elementary.features.${feature}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f8f9fa] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">
              {t("programs_overview.intermediate.title")}
            </h3>
            <p className="text-[#606060] mb-6">
              {t("programs_overview.intermediate.description")}
            </p>
            <ul className="space-y-3">
              {["feature1", "feature2", "feature3"].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#0d4c83]">•</span>
                  <span className="text-[#606060]">
                    {t(`programs_overview.intermediate.features.${feature}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsOverview;
