import { useEffect } from "react";
import { LanguageContext } from "./language";
import thai from "./th.json";
/** @param {{language: string, path: string, children: import('react').ReactNode}} props */
export default function LanguageProvider({ language, path, children }) {
  /** @param {string} text */
  const t = (text) =>
    language === "th"
      ? /** @type {Record<string,string>} */ (thai)[text] || text
      : text;
  /** @param {string} url */
  const href = (url) =>
    language === "th" &&
    (url === "/" || url.startsWith("/#") || url.startsWith("/projects/"))
      ? "/th" + url
      : url;
  useEffect(() => {
    document.documentElement.lang = language;
    // A direct Thai URL always wins. Remember a Thai preference on a fresh home visit.
    try {
      if (
        language === "en" &&
        window.location.pathname === "/" &&
        localStorage.getItem("portfolio-language") === "th"
      )
        window.location.replace("/th/" + window.location.hash);
    } catch {
      /* Storage may be disabled. */
    }
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, path, t, href }}>
      {children}
    </LanguageContext.Provider>
  );
}
