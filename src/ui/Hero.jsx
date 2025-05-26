function Hero({ url, title, paragraph }) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img src={url} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
