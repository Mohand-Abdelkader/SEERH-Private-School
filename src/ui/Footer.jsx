import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0d4c83] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">SEERH</span>{" "}
              <span className="text-[#ef7822]">School</span>
            </h3>

            {/* Rest of the footer content remains the same */}
            <p className="text-gray-200 mb-4">{t("footer.about")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#ef7822] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <Link
                to="/login"
                className="bg-white/10 p-2 rounded-full hover:bg-[#ef7822] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#ef7822] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ef7822]">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.links.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.links.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/academic-program"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.links.academic_program")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.links.admission")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ef7822]">
              {t("footer.resourcesfor_students")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/student-portal"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.resources.student_portal")}
                </Link>
              </li>
              <li>
                <Link
                  to="/parent-portal"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.resources.parent_portal")}
                </Link>
              </li>
              <li>
                <Link
                  to="/faculty-resources"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.resources.faculty_resources")}
                </Link>
              </li>
              <li>
                <Link
                  to="/school-calendar"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.resources.school_calendar")}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-200 hover:text-[#ef7822] transition-colors flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {t("footer.resources.news_events")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ef7822]">
              {t("footer.contact_us")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-300 mt-0.5" />
                <span className="text-gray-200">
                  {t("footer.contact.address")}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-200">
                  {t("footer.contact.phone")}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-200">
                  {t("footer.contact.email")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ffffff]/20 mt-8 pt-8 text-center text-gray-300">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
