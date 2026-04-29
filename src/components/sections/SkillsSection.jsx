import Section from "../ui/Section";
import { CardTitle, SectionTitle } from "../ui/Typography";

const linkCls =
  "text-[var(--color-primary)] underline decoration-[var(--color-primary)]/50 underline-offset-2 transition hover:decoration-[var(--color-primary)]";

export default function SkillsSection({ t }) {
  const s = t.skills;
  return (
    <Section id="skills">
      <SectionTitle>{t.sectionTitles.skills}</SectionTitle>
      <p className="mb-2 uppercase tracking-[0.06em] text-slate-500">{s.technicalTitle}</p>
      <ul className="mb-8 ml-4 list-disc space-y-1">
        <li>{s.technical1}</li>
        <li>
          {s.technicalContractsIntro}{" "}
          <a className={linkCls} href="https://github.com/rswag/rswag" target="_blank" rel="noreferrer">
            rswag
          </a>
          {", "}
          <a className={linkCls} href="https://swagger.io/" target="_blank" rel="noreferrer">
            Swagger
          </a>
          {", "}
          <a className={linkCls} href="https://spec.openapis.org/oas/latest.html" target="_blank" rel="noreferrer">
            OpenAPI
          </a>
        </li>
        <li>{s.technical3}</li>
        <li>{s.technical4}</li>
        <li>{s.technicalVersioning}</li>
      </ul>
      <p className="mb-2 uppercase tracking-[0.06em] text-slate-500">{s.toolsTitle2}</p>
      <ul className="mb-8 ml-4 list-disc space-y-1">
        <li>
          <a className={linkCls} href="https://hanakai.org/dry" target="_blank" rel="noreferrer">
            dry-rb
          </a>
          {s.toolDryTail}
        </li>
        <li>
          <a className={linkCls} href="https://hanakai.org/rom" target="_blank" rel="noreferrer">
            rom-rb
          </a>
          {s.toolRomTail}
        </li>
        <li>
          <a className={linkCls} href="https://cursor.com/" target="_blank" rel="noreferrer">
            Cursor
          </a>
          {s.toolCursorTail}
        </li>
      </ul>
      <CardTitle>{s.methodsTitle}</CardTitle>
      <ul className="ml-4 mt-4 list-disc space-y-1">
        <li>{s.method1}</li>
        <li>{s.method2}</li>
        <li>{s.method3}</li>
        <li>{s.method4}</li>
      </ul>
    </Section>
  );
}
