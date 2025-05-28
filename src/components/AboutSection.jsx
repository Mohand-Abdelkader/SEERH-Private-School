import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white mt-2.5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header with improved styling */}
        <div className="max-w-4xl mx-auto text-center mb-16 relative">
          <span className="text-sm font-bold text-[#ef7822] uppercase tracking-wider mb-2 block">
            {t("about.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d4c83]">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-[#ef7822] mx-auto mb-8"></div>
          <p className="text-[#606060] text-lg mb-6 leading-relaxed">
            {t("about.description1")}
          </p>
          <p className="text-[#606060] text-lg leading-relaxed">
            {t("about.description2")}
          </p>

          {/* Decorative elements */}
          <div className="hidden md:block absolute -top-10 -left-16 w-32 h-32 bg-[#ef7822]/5 rounded-full"></div>
          <div className="hidden md:block absolute -bottom-10 -right-16 w-24 h-24 bg-[#0d4c83]/5 rounded-full"></div>
        </div>

        {/* Feature cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f8f9fa] p-8 rounded-lg text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0d4c83]/20 transition-all duration-300 group">
            <div className="bg-[#0d4c83]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0d4c83]/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#0d4c83]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0d4c83] group-hover:text-[#ef7822] transition-colors">
              {t("about.features.steam.title")}
            </h3>
            <p className="text-[#606060] group-hover:text-[#404040] transition-colors">
              {t("about.features.steam.description")}
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-lg text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0d4c83]/20 transition-all duration-300 group">
            <div className="bg-[#0d4c83]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0d4c83]/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#0d4c83]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0d4c83] group-hover:text-[#ef7822] transition-colors">
              {t("about.features.global.title")}
            </h3>
            <p className="text-[#606060] group-hover:text-[#404040] transition-colors">
              {t("about.features.global.description")}
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-lg text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0d4c83]/20 transition-all duration-300 group">
            <div className="bg-[#0d4c83]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0d4c83]/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#0d4c83]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm.293 9.707a1 1 0 001.414 0L10 13.414l2.293 2.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0d4c83] group-hover:text-[#ef7822] transition-colors">
              {t("about.features.development.title")}
            </h3>
            <p className="text-[#606060] group-hover:text-[#404040] transition-colors">
              {t("about.features.development.description")}
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 mb-16 py-10 px-6 bg-[#f8f9fa] rounded-xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-[#ef7822] mb-2">35+</div>
              <p className="text-[#606060] font-medium">
                {t("about.stats.years")}
              </p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-[#ef7822] mb-2">2</div>
              <p className="text-[#606060] font-medium">
                {t("about.stats.stages")}
              </p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-[#ef7822] mb-2">5+</div>
              <p className="text-[#606060] font-medium">
                {t("about.stats.facilities")}
              </p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-[#ef7822] mb-2">
                Global
              </div>
              <p className="text-[#606060] font-medium">
                {t("about.stats.staff")}
              </p>
            </div>
          </div>
        </div>

        {/* CTA button with improved styling */}
        <div className="mt-12 text-center">
          <a
            href="/about"
            className="inline-flex items-center justify-center bg-[#ef7822] hover:bg-[#ef7822]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg group"
          >
            {t("about.learn_more")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
