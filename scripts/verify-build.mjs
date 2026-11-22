import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
const routes = [
  "",
  "projects/athip-house/",
  "projects/eduflow/",
  "projects/doctor-schedule/",
  "projects/web-ordering/",
  "projects/nestjs-postgresql/",
];
for (const language of ["en", "th"]) {
  for (const route of routes) {
    const prefix = language === "th" ? "th/" : "";
    const html = await readFile(`dist/${prefix}${route}index.html`, "utf8");
    assert.equal(
      (html.match(/<h1[ >]/g) || []).length,
      1,
      `${prefix}${route}: one heading`,
    );
    assert(html.includes(`<html lang="${language}"`), "Correct page language");
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta\s+name="description"\s+content="[^"]+"/);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(ids.length, new Set(ids).size, "Unique IDs");
    for (const [, asset] of html.matchAll(
      /(?:src|href)="(\/assets\/[^"#]+|\/CV_Athip.pdf|\/favicon.svg)"/g,
    ))
      await access(`dist${asset}`);
    for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g))
      assert(ids.includes(anchor), `Missing #${anchor}`);
    for (const id of route
      ? [
          "Problem",
          "Solution",
          "Architecture",
          "Tech-Stack",
          "My-Role",
          "Results",
        ]
      : [
          "Home",
          "About",
          "Skills",
          "Projects",
          "Experience",
          "Impact",
          "Contact",
        ])
      assert(ids.includes(id), `Missing section ${id}`);
    const switchUrl = language === "th" ? `/${route}` : `/th/${route}`;
    assert(
      html.includes(`class="language-toggle" href="${switchUrl}"`),
      "Switch retains current project",
    );
    assert(
      html.includes(`href="/${prefix}#Projects"`),
      "Navigation retains language",
    );
    const labels =
      language === "th"
        ? [
            "เกี่ยวกับผม",
            "ดาวน์โหลด CV",
            route ? "สถาปัตยกรรมระบบ" : "ผลลัพธ์จากงานวิศวกรรม",
          ]
        : [
            "About",
            "Download CV",
            route ? "Architecture" : "Engineering impact",
          ];
    for (const label of labels)
      assert(html.includes(label), `Missing translation: ${label}`);
    const meta = html.match(
      /<meta\s+name="description"\s+content="([^"]+)"/,
    )[1];
    assert.equal(
      /[\u0e00-\u0e7f]/.test(meta),
      language === "th",
      "Localized SEO description",
    );
    for (const [, target] of html.matchAll(
      /href="(\/(?:th\/)?projects\/[^"#]+)"/g,
    ))
      await access(`dist${target}index.html`);
    console.log(
      `Verified /${prefix}${route}: language, switch, content, metadata, links, anchors, assets`,
    );
  }
}
const response = await readFile("dist/404.html", "utf8");
assert.match(response, /Page not found/);
