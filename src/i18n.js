import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../src/locales/en.json";
import ar from "../src/locales/ar.json";
// Define translations

i18n
  // detect user language
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // Language detection options
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Function to set document direction based on language
export const setDocumentDirection = (language) => {
  console.log(language);
  const effectiveLang = language || "en";
  document.documentElement.dir = effectiveLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = effectiveLang;
};

// Set initial direction
setDocumentDirection(i18n.language);

// Listen for language changes
i18n.on("languageChanged", (lng) => {
  setDocumentDirection(lng);
});

export default i18n;
