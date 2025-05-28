import { Button } from "./Button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import logo from "../../public/SEERAH Logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

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

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowLanguageMenu(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageMenu(false);
  };



  return (
    <header
      className={`w-full py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SEERH School Logo" className="h-12 mr-3" />
            <span className={`text-2xl font-bold text-[#0d4c83]`}>
              SEERAH <span className="text-[#ef7822]">School</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors relative ${isActive("/") ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0" : "text-[#040706] hover:text-[#ef7822]"}`}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors relative ${isActive("/about") ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0" : "text-[#040706] hover:text-[#ef7822]"}`}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/academic-program"
                className={`font-medium transition-colors relative ${isActive("/academic-program") ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0" : "text-[#040706] hover:text-[#ef7822]"}`}
              >
                {t("nav.academic_program")}
              </Link>
              <Link
                to="/admission"
                className={`font-medium transition-colors relative ${isActive("/admission") ? "text-[#ef7822] font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ef7822] after:bottom-[-6px] after:left-0" : "text-[#040706] hover:text-[#ef7822]"}`}
              >
                {t("nav.admission")}
              </Link>
              <Button className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white shadow-sm hover:shadow-md transition-all">
                <Link to="/contact" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t("nav.contact")}
                </Link>
              </Button>
            </nav>

            {/* Language and Theme Toggles */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  className="text-[#040706] hover:text-[#ef7822] px-3 py-1.5 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  aria-label="Change language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {i18n.language === "ar" ? "العربية" : "English"}
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${showLanguageMenu ? "rotate-180" : ""}`}
                  />
                </button>

                {showLanguageMenu && (
                  <div className="absolute right-0 z-50 w-48 mt-2 overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black/5 focus:outline-none animate-fadeIn">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        onClick={() => changeLanguage("en")}
                        className={`${i18n.language === "en" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"} flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-100 w-full text-left transition-colors duration-200`}
                        role="menuitem"
                      >
                        <span className={`h-2 w-2 rounded-full ${i18n.language === "en" ? "bg-blue-600" : "bg-transparent"}`}></span>
                        {t("language.english")}
                      </button>
                      <button
                        onClick={() => changeLanguage("ar")}
                        className={`${i18n.language === "ar" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"} flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-100 w-full text-left transition-colors duration-200`}
                        role="menuitem"
                      >
                        <span className={`h-2 w-2 rounded-full ${i18n.language === "ar" ? "bg-blue-600" : "bg-transparent"}`}></span>
                        {t("language.arabic")}
                      </button>
                    </div>
                  </div>
                )}
              </div>


            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Switcher - Mobile */}
            <button
              className="p-2 text-[#040706] transition-colors duration-300 rounded-full hover:text-[#ef7822] hover:bg-gray-100"
              onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Menu Toggle - Mobile */}
            <button
              className="p-2 text-[#040706] transition-colors duration-300 rounded-full hover:text-[#ef7822] hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md transition-colors ${isActive("/") ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold" : "text-[#040706] hover:bg-gray-100"}`}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-md transition-colors ${isActive("/about") ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold" : "text-[#040706] hover:bg-gray-100"}`}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/academic-program"
                className={`px-4 py-2 rounded-md transition-colors ${isActive("/academic-program") ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold" : "text-[#040706] hover:bg-gray-100"}`}
              >
                {t("nav.academic_program")}
              </Link>
              <Link
                to="/admission"
                className={`px-4 py-2 rounded-md transition-colors ${isActive("/admission") ? "bg-[#0d4c83]/10 text-[#0d4c83] font-semibold" : "text-[#040706] hover:bg-gray-100"}`}
              >
                {t("nav.admission")}
              </Link>
              <Button className="bg-[#ef7822] hover:bg-[#ef7822]/90 text-white w-full justify-center mt-2 shadow-sm">
                <Link to="/contact" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t("nav.contact")}
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
