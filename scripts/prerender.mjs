import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { render, projects } from "../.prerender/prerender.js";
const thai = JSON.parse(
  (await readFile("src/th.json", "utf8")).replace(/^\uFEFF/, ""),
);
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
for (const language of ["en", "th"]) {
  for (const project of [null, ...projects]) {
    const base = project ? `/projects/${project.slug}/` : "/";
    const path = (language === "th" ? "/th" : "") + base;
    const title = project
      ? `${project.title} | Athip Thumakul`
      : `Athip Thumakul | ${language === "th" ? "วิศวกรซอฟต์แวร์" : "Software Engineer"}`;
    const description = project
      ? language === "th"
        ? thai[project.description]
        : project.description
      : language === "th"
        ? "วิศวกรซอฟต์แวร์ Full-stack ที่เน้น Backend พัฒนา API ระบบ CRM และเว็บแอปพลิเคชัน ดูผลงาน ประสบการณ์ และช่องทางติดต่อ"
        : "Backend-focused Full-Stack Software Engineer building reliable APIs, CRM platforms, and responsive web applications. Explore projects and engineering experience.";
    const html = template
      .replace('<html lang="en"', `<html lang="${language}"`)
      .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
      .replace(
        /(<meta\s+name="description"\s+content=")[^"]*/,
        `$1${escape(description)}`,
      )
      .replace(
        /(<meta\s+property="og:title"\s+content=")[^"]*/,
        `$1${escape(title)}`,
      )
      .replace(
        /(<meta\s+property="og:description"\s+content=")[^"]*/,
        `$1${escape(description)}`,
      )
      .replace(
        "</head>",
        `<link rel="alternate" hreflang="en" href="${base}" /><link rel="alternate" hreflang="th" href="/th${base}" /></head>`,
      );
    await mkdir(`dist${path}`, { recursive: true });
    await writeFile(`dist${path}index.html`, html);
  }
}
await writeFile(
  "dist/404.html",
  template
    .replace('<div id="root"></div>', `<div id="root">${render("/404")}</div>`)
    .replace(
      /<title>.*?<\/title>/,
      "<title>Page not found | Athip Thumakul</title>",
    ),
);
const temporaryBuild = resolve(process.cwd(), ".prerender");
if (dirname(temporaryBuild) !== resolve(process.cwd()))
  throw new Error("Temporary build must stay inside the workspace");
await rm(temporaryBuild, { recursive: true, force: true });
console.log(`Prerendered ${(projects.length + 1) * 2} English/Thai pages and the 404 page.`);
