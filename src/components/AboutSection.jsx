function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white mt-2.5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d4c83]">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-[#ef7822] mx-auto mb-8"></div>
          <p className="text-[#606060] text-lg mb-6">
            Founded in 1995, our school has been dedicated to providing
            exceptional education that focuses on academic excellence, character
            development, and nurturing each student's unique talents.
          </p>
          <p className="text-[#606060] text-lg">
            We believe in creating a supportive community where students feel
            empowered to explore, question, and grow into responsible global
            citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f8f9fa] p-8 rounded-lg text-center shadow-sm border border-gray-100">
            <div className="bg-[#0d4c83]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#0d4c83]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0d4c83]">Academic Excellence</h3>
            <p className="text-[#606060]">
              Our curriculum is designed to challenge students and help them
              reach their full academic potential.
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-lg text-center shadow-sm border border-gray-100">
            <div className="bg-[#0d4c83]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#0d4c83]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0d4c83]">Character Development</h3>
            <p className="text-[#606060]">
              We emphasize values such as integrity, respect, and responsibility
              in all aspects of school life.
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-lg text-center shadow-sm border border-gray-100">
            <div className="bg-[#0d4c83]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#0d4c83]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm.293 9.707a1 1 0 001.414 0L10 13.414l2.293 2.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0d4c83]">Inclusive Environment</h3>
            <p className="text-[#606060]">
              We celebrate diversity and create a supportive community where
              every student feels valued and included.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white font-medium py-2 px-6 rounded-md transition-colors">
            <a href="/about">Learn More About Us</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
