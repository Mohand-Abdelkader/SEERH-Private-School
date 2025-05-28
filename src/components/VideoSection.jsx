import { useState } from "react";
import { useTranslation } from "react-i18next";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0d4c83]/5 rounded-full -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ef7822]/5 rounded-full translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-sm font-bold text-[#ef7822] uppercase tracking-wider mb-2 block">
            {t("video.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d4c83]">
            {t("video.title")}
          </h2>
          <div className="w-24 h-1 bg-[#ef7822] mx-auto mb-8"></div>
          <p className="text-[#606060] text-lg leading-relaxed">
            {t("video.description")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-xl group">
            {!isPlaying ? (
              <>
                <div className="relative pb-[56.25%] h-0 bg-[#0d4c83]">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="School campus video thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d4c83]/60 to-transparent"></div>
                </div>
                <button
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ef7822] hover:bg-[#ef7822]/90 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:scale-110"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("video.video_title")}
                  </h3>
                  <p className="text-white/90">{t("video.video_subtitle")}</p>
                </div>
              </>
            ) : (
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="School Promotional Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0d4c83]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0d4c83]">
                  {t("video.features.facilities.title")}
                </h3>
              </div>
              <p className="text-[#606060]">
                {t("video.features.facilities.description")}
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0d4c83]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0d4c83]">
                  {t("video.features.faculty.title")}
                </h3>
              </div>
              <p className="text-[#606060]">
                {t("video.features.faculty.description")}
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0d4c83]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0d4c83]">
                  {t("video.features.students.title")}
                </h3>
              </div>
              <p className="text-[#606060]">
                {t("video.features.students.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
