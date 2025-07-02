import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BriefcaseBusiness, Users, Smile, CirclePlay } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/Carousel";

const videos = [
  {
    videoId: "YkGRfvn3RUU",
    coverImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    videoId: "dQw4w9WgXcQ?si=f7F4zK9CKTc3jXJA",
    coverImage:
      "https://res.cloudinary.com/dfedm9kgj/image/upload/v1748784124/photo-1503676260728-1c00da094a0b_jya0kp.avif",
  },
  {
    videoId: "AkFTzhMuHk0?si=Itvtt5PMKj9R7you",
    coverImage:
      "https://res.cloudinary.com/dfedm9kgj/image/upload/v1748784261/photo-1509062522246-3755977927d7_oowxeg.avif",
  },
];
function VideoSection() {
  const { t } = useTranslation();
  const count = videos.length;
  const [cur, setCur] = useState(0);
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
        <Carousel>
          <div className="max-w-5xl mx-auto">
            <div
              className="hidden lg:flex"
              onClick={() => setCur((cur) => cur + 1)}
            >
              <CarouselNext className=" absolute top-[20rem]  mr-40 hidden lg:flex" />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title="School Promotional Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div
              className="hidden lg:flex"
              onClick={() => setCur((cur) => cur - 1)}
            >
              <CarouselPrevious className="ml-40 absolute top-[20rem] hidden lg:flex" />
            </div>
            <div className="hidden justify-center mt-8 space-x-2 lg:flex">
              {Array.from({ length: count }).map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-2 h-2  ${
                    index === cur ? "bg-[#ef7822]" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </Carousel>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <BriefcaseBusiness className="text-[#0d4c83]" />
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
                <Users className="text-[#0d4c83]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0d4c83]">
                {t("video.features.faculty.title")}
              </h3>
            </div>
            <p className="text-[#606060]">
              {t("video.features.faculty.description")}
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-6  rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Smile className="text-[#0d4c83]" />
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
    </section>
  );
}

export default VideoSection;
