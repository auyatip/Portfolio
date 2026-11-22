import { useLanguage } from "../language";
import { motion, useReducedMotion } from "framer-motion";
import { FiMail, FiDownload, FiExternalLink, FiDatabase } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { email } from "../profile";
/** @param {{children: import('react').ReactNode, className?: string}} props */
export function Reveal({ children, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduced
          ? undefined
          : {
              opacity: [0.85, 1],
              y: [8, 0],
            }
      }
      viewport={{
        once: true,
      }}
      transition={{
        duration: reduced ? 0 : 0.4,
      }}
      whileHover={
        reduced
          ? undefined
          : {
              y: -2,
            }
      }
    >
      {children}
    </motion.div>
  );
}
export function SocialLinks() {
  const { t } = useLanguage();
  return (
    <div className="socials">
      <a
        href="https://github.com/auyatip?tab=repositories"
        aria-label={t("GitHub")}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/athip-thumakul/"
        aria-label={t("LinkedIn")}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href={`mailto:${email}`} aria-label={t("Email Athip")}>
        <FiMail />
      </a>
    </div>
  );
}
export function Download() {
  const { t } = useLanguage();
  return (
    <a
      className="button secondary cv"
      href="/CV_Athip.pdf"
      download="Athip-Thumakul-Resume.pdf"
    >
      <FiDownload />
      {t("Download CV")}
    </a>
  );
}
export function ApiVisual() {
  const { t } = useLanguage();
  return (
    <div className="api-visual">
      <FiDatabase />
      <span>{t("API / SERVICE / DATA")}</span>
      <strong>
        NestJS <span>+</span> PostgreSQL
      </strong>
      <div className="api-flow">
        <span>{t("Request")}</span>
        <span>{t("Service")}</span>
        <span>{t("Database")}</span>
      </div>
    </div>
  );
}
/** @param {{project: typeof import("../projects").projects[number], eager?: boolean}} props */
export function ProjectImage({ project, eager = false }) {
  const { t } = useLanguage();
  return project.image ? (
    <img
      src={project.image}
      alt={`${project.title} — ${t("Project interface")}`}
      loading={eager ? "eager" : "lazy"}
      width="1200"
      height="750"
    />
  ) : (
    <ApiVisual />
  );
}
/** @param {{project: typeof import("../projects").projects[number]}} props */
export function ProjectCard({ project }) {
  const { href, t } = useLanguage();
  return (
    <Reveal className="project-card">
      <a
        className="project-image"
        href={href(`/projects/${project.slug}/`)}
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectImage project={project} />
      </a>
      <div className="project-body">
        <p className="eyebrow muted">{t(project.category)}</p>
        <h3>
          <a href={href(`/projects/${project.slug}/`)}>{t(project.title)}</a>
        </h3>
        <p>{t(project.description)}</p>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{t(item)}</span>
          ))}
        </div>
        <a className="text-link" href={href(`/projects/${project.slug}/`)}>
          {t("Read case study")}
          <FiExternalLink />
        </a>
      </div>
    </Reveal>
  );
}
