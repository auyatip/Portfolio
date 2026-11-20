import { useLanguage } from "../language";
import { FiLayers, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../projects";
import { ProjectImage } from "../ui/shared";
/** @param {{project: typeof projects[number]}} props */
export default function CaseStudy({ project }) {
  const { href, t } = useLanguage();
  return (
    <article className="case-study">
      <a className="text-link" href={href("/#Projects")}>
        {t("Back to all projects")}
      </a>
      <header className="case-header">
        <p className="eyebrow">
          {t("Project case study \xB7")}
          {t(project.category)}
        </p>
        <h1>{t(project.title)}</h1>
        <p>{t(project.description)}</p>
        <div className="button-row">
          <a
            className="button secondary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            {t("View source")}
          </a>
          {project.demo && (
            <a
              className="button primary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              {t("Visit project")}
              <FiExternalLink />
            </a>
          )}
        </div>
      </header>
      <div className="case-image">
        <ProjectImage project={project} eager />
      </div>
      <div className="case-content">
        <aside>
          <p className="eyebrow">{t("Inside the project")}</p>
          {[
            "Problem",
            "Solution",
            "Architecture",
            "Tech Stack",
            "My Role",
            "Results",
          ].map((label) => (
            <a key={label} href={`#${label.replaceAll(" ", "-")}`}>
              {t(label)}
            </a>
          ))}
        </aside>
        <div>
          {[
            ["Problem", project.problem],
            ["Solution", project.solution],
          ].map(([title, content]) => (
            <section id={title} key={title}>
              <h2>{t(title)}</h2>
              <p>{t(content)}</p>
            </section>
          ))}
          <section id="Architecture">
            <h2>{t("Architecture")}</h2>
            <p>{t("A high-level view of the documented implementation.")}</p>
            <ol className="architecture">
              {project.architecture.map((item) => (
                <li key={item}>
                  <FiLayers />
                  {t(item)}
                </li>
              ))}
            </ol>
          </section>
          <section id="Tech-Stack">
            <h2>{t("Tech Stack")}</h2>
            <div className="tags">
              {project.stack.map((item) => (
                <span key={item}>{t(item)}</span>
              ))}
            </div>
          </section>
          <section id="My-Role">
            <h2>{t("My Role")}</h2>
            <p>{t(project.role)}</p>
          </section>
          <section id="Results">
            <h2>{t("Results")}</h2>
            <p>{t(project.results)}</p>
            <p className="result-note">
              {t(
                "Project-specific metrics are included only when documented. Professional performance results appear separately in the portfolio\u2019s Engineering Impact section.",
              )}
            </p>
          </section>
        </div>
      </div>
      <div className="section">
        <p className="eyebrow">{t("Keep exploring")}</p>
        <div className="related-projects">
          {projects
            .filter((item) => item.slug !== project.slug)
            .map((item) => (
              <a
                className="button secondary"
                key={item.slug}
                href={href(`/projects/${item.slug}/`)}
              >
                {item.title}
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
