import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProgramsSection from "../components/ProgramsSection";
import VideoSection from "../components/VideoSection";
import ContactSection from "../components/ContactSection";
import NewsSection from "../components/NewsSection";
function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
      <VideoSection />
      <ContactSection />
    </main>
  );
}

export default Home;
