import { useLanguage } from "../language";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Download } from "./shared";
const navigation = ["Home", "About", "Projects", "Experience", "Contact"];
export default function Header() {
  const { href, language, path, t } = useLanguage();
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: "-15% 0px -60% 0px",
      },
    );
    navigation.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (/** @type {KeyboardEvent} */ event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Theme still works without storage. */
    }
  }
  return (
    <header className="site-header">
      <div className="container nav-row">
        <a
          className="logo"
          href={href("/#Home")}
          aria-label={t("Athip Thumakul home")}
        >
          AT<span>.</span>
        </a>
        <nav
          id="main-navigation"
          aria-label={t("Main navigation")}
          className={open ? "navigation open" : "navigation"}
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={href(`/#${item}`)}
              aria-current={active === item ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {t(item)}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            className="language-toggle"
            href={
              language === "th"
                ? path.replace(/^\/th/, "") || "/"
                : "/th" + path
            }
            lang={language === "th" ? "en" : "th"}
            aria-label={
              language === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"
            }
            onClick={(event) => {
              const next = language === "th" ? "en" : "th";
              try {
                localStorage.setItem("portfolio-language", next);
              } catch {
                /* Language URLs work without storage. */
              }
              const destination = new URL(event.currentTarget.href);
              destination.hash = window.location.hash;
              event.currentTarget.href = destination.href;
            }}
          >
            <span className={language === "en" ? "selected" : ""}>EN</span>
            <span aria-hidden="true">/</span>
            <span className={language === "th" ? "selected" : ""}>TH</span>
          </a>
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={t(
              `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
            )}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <Download />
          <button
            className="icon-button menu-toggle"
            aria-label={t(open ? "Close navigation" : "Open navigation")}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
