import { Button } from "../ui/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ProgramsSection() {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useTranslation();

  const programs = [
    {
      id: 1,
      title: t("programs.elementary.title"),
      grades: t("programs.elementary.grades"),
      description: t("programs.elementary.description"),
      features: t("programs.elementary.features", { returnObjects: true }),
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: t("programs.intermediate.title"),
      grades: t("programs.intermediate.grades"),
      description: t("programs.intermediate.description"),
      features: t("programs.intermediate.features", { returnObjects: true }),
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0d4c83]/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef7822]/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="text-sm font-bold text-[#ef7822] uppercase tracking-wider mb-2 block">
            {t("programs.subtitle")}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-[#0d4c83]">
            {t("programs.title")}
          </h2>
          <div className="mx-auto mb-8 w-24 h-1 bg-[#ef7822]"></div>
          <p className="text-lg text-[#606060] leading-relaxed">
            {t("programs.description")}
          </p>
        </div>

        {/* Program tabs */}
        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === program.id
                  ? "bg-[#0d4c83] text-white shadow-md"
                  : "bg-white text-[#606060] hover:bg-[#0d4c83]/10"
              }`}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Featured program */}
        {programs.map(
          (program) =>
            program.id === activeTab && (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="inline-block px-4 py-1 rounded-full bg-[#0d4c83]/10 text-[#0d4c83] text-sm font-medium mb-4">
                      {program.grades}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0d4c83] mb-4">
                      {program.title}
                    </h3>
                    <p className="text-[#606060] mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-[#0d4c83] mb-3">
                        Program Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-[#ef7822] mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-[#606060]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white self-start shadow-sm hover:shadow-md transition-all duration-300">
                      <a href="/academic-program" className="flex items-center">
                        {t("programs.learn_more")}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )
        )}

        {/* Program cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="overflow-hidden bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#0d4c83]/20 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#040706]/80 to-transparent h-24"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-[#0d4c83] text-xs font-bold rounded-full">
                    {program.grades}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-[#0d4c83] group-hover:text-[#ef7822] transition-colors">
                  {program.title}
                </h3>
                <p className="mb-4 text-[#606060]">{program.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#0d4c83] text-[#0d4c83] hover:bg-[#0d4c83]/10 group-hover:border-[#ef7822] group-hover:text-[#ef7822] transition-colors"
                >
                  <a href="/academic-program" className="flex items-center">
                    {t("programs.learn_more")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-[#0d4c83] hover:bg-[#0d4c83]/90 text-white px-8 py-2.5 shadow-sm hover:shadow-md transition-all duration-300">
            <a href="/academic-program" className="flex items-center">
              {t("programs.view_all")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
