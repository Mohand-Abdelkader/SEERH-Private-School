import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

function ContactSection() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#f8f9fa] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0d4c83]/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef7822]/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-sm font-bold text-[#ef7822] uppercase tracking-wider mb-2 block">
            {t("contact.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d4c83]">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 bg-[#ef7822] mx-auto mb-8"></div>
          <p className="text-[#606060] text-lg leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-5">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-[#0d4c83] border-b border-gray-100 pb-3">
                {t("contact.info.title")}
              </h3>

              <div className="flex items-start mb-6">
                <div className="bg-[#0d4c83]/10 p-3 rounded-full  flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#0d4c83]" />
                </div>
                <div className="px-4">
                  <h4 className="font-semibold text-[#040706] mb-1">
                    {t("contact.info.location.title")}
                  </h4>
                  <p className="text-[#606060] leading-relaxed">
                    {t("contact.info.location.address")}
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-[#0d4c83]/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-5 w-5  text-[#0d4c83]" />
                </div>
                <div className="px-4">
                  <h4 className="font-semibold text-[#040706] mb-1">
                    {t("contact.info.phone.title")}
                  </h4>

                  <p className="text-[#606060]">+966 50 291 5613</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-[#0d4c83]/10 p-3 rounded-full  flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#0d4c83]" />
                </div>
                <div className="px-4">
                  <h4 className="font-semibold text-[#040706] mb-1">
                    {t("contact.info.email.title")}
                  </h4>
                  <p className="text-[#606060]">mohamd.rashed@seerah.sa</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-[#0d4c83] border-b border-gray-100 pb-3">
                {t("contact.hours.title")}
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-gray-50">
                  <div className="flex items-center">
                    <div className="bg-[#ef7822]/10 p-2 rounded-full mr-3">
                      <Clock className="h-4 w-4 text-[#ef7822]" />
                    </div>
                    <span className="text-[#606060] font-medium">
                      {t("contact.hours.weekdays")}
                    </span>
                  </div>
                  <span className="text-[#040706] font-semibold">
                    8:00 AM - 4:00 PM
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-[#040706] mb-2">
                  {t("contact.hours.connect")}
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/seerah.sch.sa/"
                    target="_blank"
                    className="bg-[#0d4c83]/10 p-2 rounded-full hover:bg-[#0d4c83] hover:text-white transition-colors duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.instagram.com/sis.schools?igsh=MXBsbjBsdzVrYXd2Zw%3D%3D&utm_source=qr"
                    className="bg-[#0d4c83]/10 p-2 rounded-full hover:bg-[#0d4c83] hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/101282297/admin/dashboard/"
                    className="bg-[#0d4c83]/10 p-2 rounded-full hover:bg-[#0d4c83] hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.snapchat.com/add/sisschools"
                    className="bg-[#0d4c83]/10 p-2 rounded-full hover:bg-[#0d4c83] hover:text-white transition-colors duration-300"
                  >
                    <i className="bi bi-snapchat h-5 w-5 font-bold"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/sis.schools?igsh=MXBsbjBsdzVrYXd2Zw%3D%3D&utm_source=qr"
                    className="bg-[#0d4c83]/10 p-2 rounded-full hover:bg-[#0d4c83] hover:text-white transition-colors duration-300"
                  >
                    <i className="bi bi-tiktok h-5 w-5 font-bold"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-[#0d4c83]">
                {t("contact.form.title")}
              </h3>
              <ContactForm handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3710.4816943302303!2d39.155777675271544!3d21.56711278022033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM0JzAxLjYiTiAzOcKwMDknMzAuMSJF!5e0!3m2!1sen!2seg!4v1751291354788!5m2!1sen!2seg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="School Location Map"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
