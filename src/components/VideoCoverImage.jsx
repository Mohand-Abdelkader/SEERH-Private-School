import { useTranslation } from "react-i18next";
import { CirclePlay } from "lucide-react";
function VideoCoverImage({ imgUrl, handlePlayVideo }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative pb-[56.25%] h-0 bg-[#0d4c83]">
        <img
          src={imgUrl}
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
        <CirclePlay className="w-[75%] h-[75%]" />
      </button>
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{t("video.video_title")}</h3>
      </div>
    </>
  );
}

export default VideoCoverImage;
