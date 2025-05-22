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
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Students in classroom",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "School library",
  },
];

function HeroSection() {
  return (
    <section className="w-full h-[40rem] relative pt-16 mb-1.5">
      <Carousel className="w-full">
        <CarouselContent className="h-[40rem]">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 h-full"></div>
              </div>
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Educating Tomorrow's Leaders
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mb-8">
                  Providing quality education and nurturing excellence in a
                  supportive environment.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white"
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-transparent hover:bg-white/20 text-white border-white hover:border-[#ef7822] transition-colors duration-300"
                  >
                    <Link to="/admission">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-[#0d4c83]/80 hover:bg-[#0d4c83] text-white border-none z-20 flex items-center justify-center" />
        <CarouselNext className="right-4 bg-[#0d4c83]/80 hover:bg-[#0d4c83] text-white border-none z-20 flex items-center justify-center" />
      </Carousel>
    </section>
  );
}

export default HeroSection;
