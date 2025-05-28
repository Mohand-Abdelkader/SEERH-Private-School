import { useTranslation } from "react-i18next";

function Values() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d4c83] mb-12">
          {t("values.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#0d4c83] mb-4">
              {t("values.innovation.title")}
            </h3>
            <p className="text-[#606060]">
              {t("values.innovation.description")}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#0d4c83] mb-4">
              {t("values.diversity.title")}
            </h3>
            <p className="text-[#606060]">
              {t("values.diversity.description")}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#0d4c83] mb-4">
              {t("values.progressive.title")}
            </h3>
            <p className="text-[#606060]">
              {t("values.progressive.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
