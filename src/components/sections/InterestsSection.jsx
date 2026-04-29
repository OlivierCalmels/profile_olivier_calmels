import Section from "../ui/Section";
import { SectionTitle } from "../ui/Typography";

const PSC_RED_CROSS_URL =
  "https://www.croix-rouge.fr/formation/prevention-et-secours-civique-de-niveau-1-psc1";

const linkCls =
  "text-[var(--color-primary)] underline decoration-[var(--color-primary)]/50 underline-offset-2 transition hover:decoration-[var(--color-primary)]";

export default function InterestsSection({ t }) {
  const i = t.interests;
  return (
    <Section id="interests" withBorder={false}>
      <SectionTitle>{t.sectionTitles.interests}</SectionTitle>
      <p className="mb-4 leading-normal">
        {i.p1before}
        <strong>{i.p1hobby}</strong>
        {i.p1after}
      </p>
      <p className="mb-4 leading-normal">
        {i.p2before}
        <strong>{i.p2hobby}</strong>
        {i.p2after}
      </p>
      <p className="mb-4 leading-normal">
        {i.p3before}
        <strong>{i.p3hobby}</strong>
        {i.p3between}
        <a className={linkCls} href={PSC_RED_CROSS_URL} target="_blank" rel="noreferrer">
          {i.pscLinkLabel}
        </a>
        .
      </p>
      <p className="leading-normal">
        {i.p4before}
        <strong>{i.p4hobby}</strong>
        {i.p4after}
      </p>
    </Section>
  );
}
