import { Button } from "./Button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`w-full py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen 
          ? "bg-white shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/SEERAH Logo.png" 
              alt="SEERH School Logo" 
              className="h-12 mr-3" 
            />
            <span className={`text-2xl font-bold ${scrolled ? 'text-[#0d4c83]' : 'text-[#0d4c83]'}`}>
              SEERH <span className="text-[#ef7822]">School</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors relative ${
                isActive("/")
                  ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0"
                  : `${scrolled ? 'text-[#040706]' : 'text-[#040706]'} hover:text-[#ef7822]`
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors relative ${
                isActive("/about")
                  ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0"
                  : `${scrolled ? 'text-[#040706]' : 'text-[#040706]'} hover:text-[#ef7822]`
              }`}
            >
              About
            </Link>
            <Link
              to="/academic-program"
              className={`font-medium transition-colors relative ${
                isActive("/academic-program")
                  ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0"
                  : `${scrolled ? 'text-[#040706]' : 'text-[#040706]'} hover:text-[#ef7822]`
              }`}
            >
              Academic Program
            </Link>
            <Link
              to="/admission"
              className={`font-medium transition-colors relative ${
                isActive("/admission")
                  ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0"
                  : `${scrolled ? 'text-[#040706]' : 'text-[#040706]'} hover:text-[#ef7822]`
              }`}
            >
              Admission
            </Link>
            <Button 
              className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white shadow-sm hover:shadow-md transition-all"
            >
              <Link to="/contact" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${scrolled ? 'text-[#0d4c83]' : 'text-[#0d4c83]'} hover:bg-white/20`}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/")
                    ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold"
                    : "text-[#040706] hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/about")
                    ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold"
                    : "text-[#040706] hover:bg-gray-100"
                }`}
              >
                About
              </Link>
              <Link
                to="/academic-program"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/academic-program")
                    ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold"
                    : "text-[#040706] hover:bg-gray-100"
                }`}
              >
                Academic Program
              </Link>
              <Link
                to="/admission"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/admission")
                    ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold"
                    : "text-[#040706] hover:bg-gray-100"
                }`}
              >
                Admission
              </Link>
              <Button className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white w-full justify-center mt-2 shadow-sm">
                <Link to="/contact" className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
