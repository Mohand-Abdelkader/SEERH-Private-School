function AboutHero() {
    return (
        <div className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="School campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Building tomorrow's leaders through excellence in education since 1995
            </p>
          </div>
        </div>
      </div>
    )
}

export default AboutHero
