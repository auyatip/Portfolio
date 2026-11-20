import { createContext, useContext } from "react";
/** @type {import('react').Context<{language: string, path: string, t: (text: string) => string, href: (url: string) => string}>} */
export const LanguageContext = createContext({
  language: "en",
  path: "/",
  t: (text) => text,
  href: (url) => url,
});
export const useLanguage = () => useContext(LanguageContext);
