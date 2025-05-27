
function ProgramsOverview() {
    return (
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0d4c83] mb-12">Our Educational Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">Elementary Stage</h3>
              <p className="text-[#606060] mb-6">
                Our elementary program combines STEAM curriculum with Montessori education,
                creating an interactive and engaging learning environment for young minds.
              </p>
              <ul className="space-y-2 text-[#606060]">
                <li>• Hands-on STEAM activities</li>
                <li>• Montessori learning approach</li>
                <li>• Character development</li>
                <li>• Interactive learning experiences</li>
              </ul>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0d4c83] mb-4">Intermediate Stage</h3>
              <p className="text-[#606060] mb-6">
                Our intermediate program builds on the STEAM foundation while preparing
                students for advanced academic challenges through our American-accredited curriculum.
              </p>
              <ul className="space-y-2 text-[#606060]">
                <li>• Advanced STEAM projects</li>
                <li>• Scientific exploration</li>
                <li>• Technology integration</li>
                <li>• Leadership development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProgramsOverview
