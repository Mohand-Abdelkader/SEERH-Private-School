import { Button } from "../ui/Button";
import { useTranslation } from "react-i18next";

function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0d4c83] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg mb-8 text-gray-100">{t("cta.description")}</p>
          <Button
            as="a"
            href="/admission"
            variant="outline"
            className="bg-white text-[#0d4c83] hover:bg-gray-100 px-8 py-3"
          >
            {t("cta.button")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
