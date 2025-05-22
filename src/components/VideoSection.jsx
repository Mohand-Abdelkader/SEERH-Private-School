function VideoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our School in Action
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            Watch our promotional video to get a glimpse of the vibrant learning
            environment we've created for our students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <div className="relative pb-[56.25%] h-0">
            {/* Replace with actual video embed when available */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="School Promotional Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
