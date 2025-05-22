import { Button } from "../ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel.jsx";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "School campus main building",
    title: "Educating Tomorrow's Leaders",
    subtitle: "Providing quality education and nurturing excellence in a supportive environment."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Students in classroom",
    title: "Inspiring Academic Excellence",
    subtitle: "Creating an environment where students thrive and reach their full potential."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "School library",
    title: "Building Character & Knowledge",
    subtitle: "Developing well-rounded individuals prepared for future challenges."
  },
];

function HeroSection() {
  return (
    <section className="w-full h-[40rem] relative pt-16 mb-1.5">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-[40rem]">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full h-full">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 h-full"></div>
              </div>
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4 z-10 animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <Button
                      size="lg"
                      className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                    >
                      <Link to="/about">Learn More</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-transparent hover:bg-white/20 text-white border-white hover:border-[#ef7822] transition-all duration-300 shadow-lg hover:shadow-xl px-8"
                    >
                      <Link to="/admission">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-2.5 h-2.5 rounded-full ${
                        index === slide.id - 1 
                          ? "bg-[#ef7822] w-8 transition-all duration-300" 
                          : "bg-white/60"
                      }`}
                    />
                  ))}
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
