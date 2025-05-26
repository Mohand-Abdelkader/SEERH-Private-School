import { CheckCircle, BookOpen, Globe, Music } from "lucide-react";

function ProgramsOverview() {
    return (
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0d4c83] mb-12">Our Educational Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">Elementary School</h3>
              <p className="text-[#606060] mb-6">
                Grades 1-6 focus on building strong foundations in core subjects while
                fostering creativity and critical thinking skills.
              </p>
              <ul className="space-y-2 text-[#606060]">
                <li>• Core subject mastery</li>
                <li>• Interactive learning</li>
                <li>• Character development</li>
                <li>• Arts and music programs</li>
              </ul>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">Middle School</h3>
              <p className="text-[#606060] mb-6">
                Grades 7-9 emphasize academic excellence while supporting students'
                personal growth and development.
              </p>
              <ul className="space-y-2 text-[#606060]">
                <li>• Advanced mathematics</li>
                <li>• Science exploration</li>
                <li>• Language arts</li>
                <li>• Social studies</li>
              </ul>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">High School</h3>
              <p className="text-[#606060] mb-6">
                Grades 10-12 prepare students for higher education through rigorous
                academics and specialized programs.
              </p>
              <ul className="space-y-2 text-[#606060]">
                <li>• College preparation</li>
                <li>• Advanced placement courses</li>
                <li>• Career guidance</li>
                <li>• Leadership opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProgramsOverview
