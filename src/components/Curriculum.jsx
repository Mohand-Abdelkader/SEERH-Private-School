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
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">STEM Focus</h3>
                <p className="text-[#606060]">
                  Comprehensive programs in Science, Technology, Engineering, and
                  Mathematics with hands-on learning experiences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-[#0d4c83]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">Language Arts</h3>
                <p className="text-[#606060]">
                  Strong emphasis on reading, writing, and communication skills through
                  literature and creative expression.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-[#0d4c83]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">Global Studies</h3>
                <p className="text-[#606060]">
                  Cultural awareness and international perspective through social
                  studies and language programs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#0d4c83]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Music className="h-6 w-6 text-[#0d4c83]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d4c83] mb-2">Arts & Music</h3>
                <p className="text-[#606060]">
                  Rich programs in visual arts, music, and performing arts to nurture
                  creativity and self-expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Curriculum
