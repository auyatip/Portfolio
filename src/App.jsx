import { useLanguage } from "./language";
import LanguageProvider from "./LanguageProvider";
import { MotionConfig } from "framer-motion";
import { projects } from "./projects";
import Header from "./ui/Header";
import { SocialLinks } from "./ui/shared";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

/** @param {{path?: string}} props */
function Page({
  path = typeof window === "undefined" ? "/" : window.location.pathname,
}) {
  const { t, href } = useLanguage();
  const project = projects.find(
    (item) => path.replace(/\/$/, "") === `/projects/${item.slug}`,
  );
  const notFound = path !== "/" && !project;
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        {t("Skip to content")}
      </a>
      <Header />
      <main id="main" className="container">
        {project ? (
          <CaseStudy project={project} />
        ) : notFound ? (
          <section className="case-header">
            <h1>{t("Page not found")}</h1>
            <a className="button primary" href={href("/")}>
              {t("Return home")}
            </a>
          </section>
        ) : (
          <Home />
        )}
      </main>
      <footer className="container footer">
        <a href={href("/#Home")} className="logo" aria-label={t("Return home")}>
          AT<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Athip Thumakul. {t("Built with care.")}
        </p>
        <SocialLinks />
        <a className="back-top" href="#main">
          {t("Back to top")}
        </a>
      </footer>
    </MotionConfig>
  );
}
export default function App({
  path = typeof window === "undefined" ? "/" : window.location.pathname,
}) {
  const language = /^\/th(?:\/|$)/.test(path) ? "th" : "en";
  const normalized =
    language === "th" ? path.replace(/^\/th/, "") || "/" : path;
  return (
    <LanguageProvider language={language} path={path}>
      <Page path={normalized} />
    </LanguageProvider>
  );
}
