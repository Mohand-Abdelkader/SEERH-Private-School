import { CheckCircle, BookOpen, Globe, Music } from "lucide-react";

function Curriculum() {
    return (
        <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0d4c83] mb-12">Curriculum Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-[#0d4c83]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">STEAM Education</h3>
                <p className="text-[#606060]">
                  Innovative programs in Science, Technology, Engineering, Arts, and
                  Mathematics with access to advanced laboratories and interactive STEAM labs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-[#0d4c83]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">Montessori Approach</h3>
                <p className="text-[#606060]">
                  Interactive learning methodology that encourages hands-on exploration,
                  creativity, and independent thinking in a structured environment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-[#0d4c83]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">Cultural Diversity</h3>
                <p className="text-[#606060]">
                  A multicultural learning environment enriched by our diverse
                  international teaching staff and inclusive educational approach.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Music className="h-6 w-6 text-[#0d4c83]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">Physical Education</h3>
                <p className="text-[#606060]">
                  Comprehensive physical education program utilizing our indoor/outdoor
                  sports fields, gymnasium, and swimming pool facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Curriculum
