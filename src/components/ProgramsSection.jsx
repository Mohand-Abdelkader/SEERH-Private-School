import { Button } from "../ui/Button";
function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "Elementary Education",
      grades: "Grades K-5",
      description:
        "Building a strong foundation through engaging, developmentally appropriate curriculum.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Middle School",
      grades: "Grades 6-8",
      description:
        "Supporting academic growth and personal development during critical transitional years.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "High School",
      grades: "Grades 9-12",
      description:
        "Preparing students for college and beyond with rigorous academics and valuable life skills.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container px-4 mx-auto">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-[#0d4c83]">
            Academic Programs
          </h2>
          <div className="mx-auto mb-8 w-24 h-1 bg-[#ef7822]"></div>
          <p className="text-lg text-[#606060]">
            Our comprehensive academic programs are designed to challenge
            students at every level, fostering intellectual curiosity and a love
            of learning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="overflow-hidden bg-white rounded-lg shadow-md border border-gray-100 transition-transform hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="object-cover w-full h-48"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#040706]/70 to-transparent h-16"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-[#0d4c83]">{program.title}</h3>
                <p className="mb-3 text-sm font-medium text-[#ef7822]">
                  {program.grades}
                </p>
                <p className="mb-4 text-[#606060]">{program.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-[#0d4c83] text-[#0d4c83] hover:bg-[#0d4c83]/10"
                >
                  <a href="/academic-program">Learn More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white">
            <a href="/academic-program">View All Programs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
