import { CheckCircle, BookOpen, Globe, Music } from "lucide-react";
import { useTranslation } from "react-i18next";

function Curriculum() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d4c83] mb-12">
          {t("curriculum.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0d4c83] mb-2">
                {t("curriculum.features.steam.title")}
              </h3>
              <p className="text-[#606060]">
                {t("curriculum.features.steam.description")}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0d4c83] mb-2">
                {t("curriculum.features.montessori.title")}
              </h3>
              <p className="text-[#606060]">
                {t("curriculum.features.montessori.description")}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Globe className="h-6 w-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0d4c83] mb-2">
                {t("curriculum.features.diversity.title")}
              </h3>
              <p className="text-[#606060]">
                {t("curriculum.features.diversity.description")}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Music className="h-6 w-6 text-[#0d4c83]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0d4c83] mb-2">
                {t("curriculum.features.physical.title")}
              </h3>
              <p className="text-[#606060]">
                {t("curriculum.features.physical.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
