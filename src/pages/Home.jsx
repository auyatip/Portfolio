import { useLanguage } from "../language";
import { useState } from "react";
import {
  FiCode,
  FiMail,
  FiLayers,
  FiZap,
  FiExternalLink,
  FiMapPin,
  FiCheck,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiAmazonaws,
} from "react-icons/si";
import { projects } from "../projects";
import { roles } from "../experience";
import { Download, SocialLinks, ProjectCard, ProjectImage } from "../ui/shared";
import Contact from "../ui/Contact";
const tech = [
  [SiReact, "React", "#61dafb"],
  [SiNextdotjs, "Next.js", "var(--text)"],
  [SiTypescript, "TypeScript", "#60a5fa"],
  [SiNodedotjs, "Node.js", "#84c76b"],
  [SiNestjs, "NestJS", "#f65d83"],
  [SiMysql, "MySQL", "#67b8de"],
  [SiPostgresql, "PostgreSQL", "#8eafdc"],
  [SiMongodb, "MongoDB", "#68c77c"],
  [SiDocker, "Docker", "#48b5f6"],
  [SiGit, "Git", "#f07862"],
  [SiAmazonaws, "AWS", "#f5b75b"],
];
export default function Home() {
  const { t } = useLanguage();
  const [all, setAll] = useState(false);
  return (
    <>
      <section id="Home" className="hero">
        <div className="hero-copy">
          <span className="intro-label">
            <span />
            {t("Full-stack development \xB7 Backend focus")}
          </span>
          <h1>
            {t("Hi, I\u2019m Athip Thumakul.")}
            <br />
            <span>{t("Software Engineer")}</span>
          </h1>
          <p>
            {t(
              "I build reliable web applications that turn complex business workflows into simple, practical experiences.",
            )}
          </p>
          <div className="button-row">
            <a href="#Projects" className="button primary">
              {t("Explore my work")}
            </a>
            <a href="#Contact" className="button secondary">
              <FiMail />
              {t("Contact me")}
            </a>
          </div>
          <SocialLinks />
          <div className="location">
            <FiMapPin />
            {t("Bangkok, Thailand")}
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit" />
          <div className="browser-preview">
            <div className="browser-bar">
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>athiphousepai.com</span>
              <FiExternalLink />
            </div>
            <ProjectImage project={projects[0]} eager />
          </div>
          <div className="floating-note">
            <span className="note-icon">
              <FiCode />
            </span>
            <div>
              <strong>{t("From architecture to interface.")}</strong>
              <span>{t("Built with purpose, end to end.")}</span>
            </div>
          </div>
          <p className="preview-caption">
            {t("FEATURED BUILD")}
            <span>A-Thip House @ Pai</span>
          </p>
        </div>
      </section>
      <section id="About" className="section about-grid">
        <div>
          <p className="eyebrow">{t("About me")}</p>
          <h2>
            {t("A practical mindset.")}
            <br />
            {t("An engineer\u2019s curiosity.")}
          </h2>
        </div>
        <div>
          <p>
            {t(
              "I\u2019m a backend-focused Full-Stack Software Engineer with 3 years of experience building production CRM and business platforms. I work across APIs, data models, integrations, and responsive frontend delivery.",
            )}
          </p>
          <p>
            {t(
              "From aircraft engineering to software, I bring a careful approach to troubleshooting and a focus on how systems work in the real world.",
            )}
          </p>
          <div className="specialties">
            <span>
              <FiCode />
              {t("Full-stack")}
              <br />
              {t("development")}
            </span>
            <span>
              <FiLayers />
              {t("API & database")}
              <br />
              {t("architecture")}
            </span>
            <span>
              <FiZap />
              {t("Performance")}
              <br />
              {t("optimization")}
            </span>
          </div>
        </div>
      </section>
      <section id="Skills" className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">{t("Tech stack")}</p>
          <a href="#all-skills" className="text-link">
            {t("Explore the toolkit")}
          </a>
        </div>
        <div className="tech-grid">
          {tech.map(([Icon, name, color]) => (
            <div className="tech-card" key={String(name)}>
              {typeof Icon !== "string" && (
                <Icon
                  style={{
                    color: String(color),
                  }}
                />
              )}
              <span>{String(name)}</span>
            </div>
          ))}
        </div>
        <details id="all-skills" className="skills-details">
          <summary>{t("More tools I work with")}</summary>
          <p>
            JavaScript · SQL · Go · AdonisJS · Express · Material UI · Tailwind
            CSS · MongoDB · Redis · Postman · HTML · CSS
          </p>
        </details>
      </section>
      <section id="Projects" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("Featured projects")}</p>
            <h2>{t("Built to solve real problems.")}</h2>
          </div>
          <span className="section-note">{t("A selection of my work")}</span>
        </div>
        <div className="project-grid">
          {(all ? projects : projects.slice(0, 3)).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <button
          className="button secondary more-projects"
          onClick={() => setAll(!all)}
          aria-expanded={all}
        >
          {all
            ? t("Show featured projects")
            : t("View all {count} projects").replace("{count}", String(projects.length))}
        </button>
      </section>
      <section id="Experience" className="section experience-grid">
        <div>
          <p className="eyebrow">{t("Experience")}</p>
          <h2>
            {t("A journey of")}
            <br />
            {t("building & learning.")}
          </h2>
          <p>
            {t(
              "Production software, business workflows, and a foundation in engineering.",
            )}
          </p>
          <Download />
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <article className="timeline-item" key={role.company}>
              <div className="timeline-date">
                {t(role.period)}
                {index === 0 && (
                  <span className="current-badge">{t("Current")}</span>
                )}
              </div>
              <h3>{t(role.title)}</h3>
              <p className="company">{t(role.company)}</p>
              <p className="role-location">{t(role.location)}</p>
              <ul>
                {role.points.slice(0, 2).map((point) => (
                  <li key={point}>{t(point)}</li>
                ))}
              </ul>
              {role.points.length > 2 && (
                <details>
                  <summary>{t("More about this role")}</summary>
                  <ul>
                    {role.points.slice(2).map((point) => (
                      <li key={point}>{t(point)}</li>
                    ))}
                  </ul>
                </details>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="education section">
        <div>
          <p className="eyebrow">{t("Education")}</p>
          <h3>{t("Information & Communication Technology")}</h3>
          <p>
            {t("Sukhothai Thammathirat Open University")}
            <br />
            {t("Bachelor\u2019s degree \xB7 2022 \u2013 June 2025")}
          </p>
          <h3>{t("Aircraft Maintenance")}</h3>
          <p>
            {t(
              "Civil Aviation Training Center \xB7 Diploma \xB7 2018 \u2013 2021",
            )}
          </p>
        </div>
        <div>
          <p className="eyebrow">{t("Certification & languages")}</p>
          <h3>{t("Junior Software Developer Program")}</h3>
          <p>{t("Generation Thailand \xB7 Cohort 5 \xB7 2023")}</p>
          <p>
            {t("Thai \xB7 Native")}
            <br />
            {t("English \xB7 Intermediate working proficiency")}
          </p>
        </div>
      </section>
      <section id="Impact" className="section impact-grid">
        <div>
          <p className="eyebrow">{t("Engineering impact")}</p>
          <h2>
            {t("Real work.")}
            <br />
            {t("Tangible results.")}
          </h2>
        </div>
        <div className="impact-card">
          <FiZap />
          <strong>
            40<span>%</span>
          </strong>
          <h3>{t("Faster tracking queries")}</h3>
          <p>
            {t("API optimization, database improvements, and Redis caching.")}
          </p>
        </div>
        <div className="impact-card">
          <FiLayers />
          <strong>500</strong>
          <h3>{t("Records per operation")}</h3>
          <p>{t("Supported in bulk client-payment processing.")}</p>
        </div>
        <div className="impact-card">
          <FiCheck />
          <strong className="word-metric">{t("Production")}</strong>
          <h3>{t("Business workflows")}</h3>
          <p>{t("CRM, payments, claims, and LINE integrations.")}</p>
        </div>
      </section>
      <Contact />
    </>
  );
}
