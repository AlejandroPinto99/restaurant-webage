import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Permite cargar traducciones desde archivos
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Inicializa la integración con React
    .init({
    fallbackLng: "en", // Idioma por defecto si no se encuentra una traducción
    debug: true,
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
});

export default i18n;
