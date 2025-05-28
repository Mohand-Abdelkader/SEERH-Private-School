import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicProgramPage from "./pages/AcademicProgramPage";
import AdmissionPage from "./pages/AdmissionPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import AdminLayout from "./ui/AdminLayout";
import MainLayout from "./ui/MainLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdmissionRequests from "./pages/admin/AdmissionRequests";
import AdmissionItem from "./pages/admin/AdmissionItem";
import ContactMessage from "./pages/admin/ContactMessage";
import MessageItem from "./pages/admin/MessageItem";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/academic-program"
                element={<AcademicProgramPage />}
              />
              <Route path="/admission" element={<AdmissionPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin" element={<Dashboard />} />
              <Route
                path="admission-requests"
                element={<AdmissionRequests />}
              />
              <Route
                path="admission-requests/:id"
                element={<AdmissionItem />}
              />
              <Route path="messages" element={<ContactMessage />} />
              <Route path="messages/:id" element={<MessageItem />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
