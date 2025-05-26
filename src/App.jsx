import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicProgramPage from "./pages/AcademicProgramPage";
import AdmissionPage from "./pages/AdmissionPage";
import NotFound from "./pages/NotFound";

import ContactPage from "./pages/ContactPage" 
import AdminLayout from "./ui/AdminLayout";
import MainLayout from "./ui/MainLayout";
import Dashboard from "./pages/admin/Dashboard"
import AdmissionRequests from "./pages/admin/AdmissionRequests";
function App() {
  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academic-program" element={<AcademicProgramPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />

          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="admission-requests" element={<AdmissionRequests/>}/>
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    
        <Routes>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
