import { Button } from "../ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel.jsx";
import Loader from "../ui/Loader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSlides } from "../hooks/slides/useSlides";
function HeroSection() {
  const { i18n } = useTranslation();
  const { data, isLoading } = useSlides();

  const currentLang = i18n.language;
  const slides =
    data?.length === 0
      ? [
          {
            id: 1,
            url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            alt: "Seerah Private School campus",
            title: {
              en: "Welcome to Seerah Private School",
              ar: "مرحبًا بكم في مدرسة سيرة الخاصة",
            },
            subtitle: {
              en: "Empowering Future Leaders Through Quality Education",
              ar: "تمكين قادة المستقبل من خلال التعليم الجيد",
            },
          },
        ]
      : data;

  if (isLoading) return <Loader />;
  return (
    <section className="w-full h-[40rem] relative pt-16 mb-1.5">
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true,
          align: "start",
          direction: i18n.dir(),
        }}
      >
        <CarouselContent className="h-[40rem]">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full h-full">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="object-cover w-full h-full transform scale-105 animate-slow-zoom"
                />
                <div className="absolute inset-0 h-full bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center text-white animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl drop-shadow-lg">
                    {slide.title[currentLang]}
                  </h1>
                  <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-100 md:text-2xl drop-shadow-md">
                    {slide.subtitle[currentLang]}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <Button
                      size="lg"
                      className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                    >
                      <Link to="/about">{i18n.t("hero.learn_more")}</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-transparent hover:bg-white/20 text-white border-white hover:border-[#ef7822] transition-all duration-300 shadow-lg hover:shadow-xl px-8"
                    >
                      <Link to="/admission">{i18n.t("hero.apply_now")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 bg-[#0d4c83]/80 hover:bg-[#ef7822] text-white border-none z-20 flex items-center justify-center shadow-lg transition-all duration-300" />
        <CarouselNext className="right-6 bg-[#0d4c83]/80 hover:bg-[#ef7822] text-white border-none z-20 flex items-center justify-center shadow-lg transition-all duration-300" />
      </Carousel>
    </section>
  );
}

export default HeroSection;
