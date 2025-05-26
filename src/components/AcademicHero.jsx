function AcademicHero() {
    return (
        <div className="relative h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Academic programs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Nurturing excellence through comprehensive education
            </p>
          </div>
        </div>
      </div>
    )
}

export default AcademicHero
