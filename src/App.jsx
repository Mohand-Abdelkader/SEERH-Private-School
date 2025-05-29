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
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ui/ScrollToTop";
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
          <ScrollToTop />
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
              <Route path="/login" element={<AdminLogin />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "##F9FAFB",
              color: "##1F2937",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
