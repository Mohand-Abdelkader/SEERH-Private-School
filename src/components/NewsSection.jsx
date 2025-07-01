import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/Carousel";
import { useNews } from "../hooks/news/useNews";
import Loader from "../ui/Loader";
import NewsCard from "./NewsCard";
import { useState } from "react";
function NewsSection() {
  const { t, i18n } = useTranslation();

  const { news, isLoading } = useNews();
  const currentLocale = i18n.language;
  const count = news?.length - 2;
  const [cur, setCur] = useState(0);
  function handleClick(direction) {
    setCur((cur) => {
      if (direction === "prev") {
        return cur === 0 ? count - 1 : cur - 1;
      } else {
        return cur === count - 1 ? 0 : cur + 1;
      }
    });
  }
  if (isLoading) return <Loader />;

  return (
    <section id="about" className="py-24 bg-white mt-2.5 overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Section header with improved styling */}
        <div className="relative mx-auto mb-16 max-w-4xl text-center">
          <span className="text-sm font-bold text-[#ef7822] uppercase tracking-wider mb-2 block">
            {t("news.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d4c83]">
            {t("news.title")}
          </h2>
          <div className="w-24 h-1 bg-[#ef7822] mx-auto mb-8"></div>
          <p className="text-[#606060] text-lg mb-6 leading-relaxed">
            {t("news.description1")}
          </p>
        </div>
        <Carousel
          opts={{
            align: "center",
            direction: i18n.dir() === "rtl" ? "rtl" : "ltr",
          }}
        >
          <div onClick={() => handleClick("prev")} className="hidden lg:flex">
            <CarouselPrevious className="absolute left-0 top-1/2 z-10 -translate-y-1/2 lg:flex" />
          </div>
          <div className="flex relative items-center px-0 w-full h-64 sm:h-72 md:h-80 lg:h-96 sm:px-4 md:px-8 lg:px-20">
            <CarouselContent className="flex-1">
              {news.map((newsItem, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center px-2 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <NewsCard
                    index={index}
                    news={newsItem}
                    currentLocale={currentLocale}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div onClick={() => handleClick("next")} className="hidden lg:flex">
            <CarouselNext className="absolute right-0 top-1/2 z-10 -translate-y-1/2 lg:flex" />
          </div>
        </Carousel>
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
        {/* Stats section */}
      </div>
    </section>
  );
}

export default NewsSection;
