import { useTranslation } from "react-i18next";

function History() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d4c83] mb-12">
          {t("history.title")}
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#606060] mb-6">{t("history.paragraph1")}</p>
          <p className="text-[#606060]">{t("history.paragraph2")}</p>
        </div>
      </div>
    </section>
  );
}

export default History;
