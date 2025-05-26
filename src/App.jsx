import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicProgramPage from "./pages/AcademicProgramPage";
import AdmissionPage from "./pages/AdmissionPage";
import NotFound from "./pages/NotFound";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import ContactPage from "./pages/ContactPage" 
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academic-program" element={<AcademicProgramPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
