import ResumeCard from "../ui/ResumeCard";
import Section from "../ui/Section";
import { AccentText, CardTitle, SectionTitle } from "../ui/Typography";

export default function ExperienceSection({ t }) {
  return (
    <Section id="experience">
      <SectionTitle>{t.sectionTitles.experience}</SectionTitle>

      <ResumeCard date={t.experience.card1Date}>
        <CardTitle>{t.experience.card1Title}</CardTitle>
        <AccentText>
          <a href={t.experience.card1OrgUrl} target="_blank" rel="noreferrer">
            {t.experience.card1Org}
          </a>
        </AccentText>
        <p className="mt-3">{t.experience.stack}</p>
        <ul className="ml-4 mt-2 list-disc space-y-1">
          <li>{t.experience.stack1}</li>
          <li>{t.experience.stack2}</li>
          <li>{t.experience.stack3}</li>
        </ul>
        <p className="mt-3">{t.experience.card1Line1}</p>
        <p>{t.experience.card1Line2}</p>
        <p>{t.experience.card1Line3}</p>
      </ResumeCard>

      <ResumeCard date={t.experience.card2Date}>
        <CardTitle>{t.experience.card2Title}</CardTitle>
        <AccentText>{t.experience.card2Org}</AccentText>
        <p className="mt-3">{t.experience.card2Line1}</p>
        <p>{t.experience.card2Line2}</p>
        <p>{t.experience.card2Line3}</p>
      </ResumeCard>

      <ResumeCard date={t.experience.card3Date} compact>
        <CardTitle>{t.experience.card3Title}</CardTitle>
        <AccentText>{t.experience.card3Org}</AccentText>
        <p className="mt-3">
          {t.experience.card3Line1Prefix} <a className="text-[var(--color-primary)] hover:underline" href="https://www.ixblue.com/application/test-simulations" target="_blank" rel="noreferrer">iXBlue</a> {t.experience.card3Line1Suffix}
        </p>
        <p>
          {t.experience.card3Line2Prefix} <a className="text-[var(--color-primary)] hover:underline" href="https://www.valeo.com/fr/recherche-developpement/" target="_blank" rel="noreferrer">Valeo</a> {t.experience.card3Line2Suffix}
        </p>
        <p>
          {t.experience.card3Line2PatentPrefix}{" "}
          <a className="text-[var(--color-primary)] hover:underline" href={t.experience.card3Line2PatentUrl} target="_blank" rel="noreferrer">
            {t.experience.card3Line2PatentLabel}
          </a>
        </p>
        <p>
          {t.experience.card3Line3Prefix}{" "}
          <a className="text-[var(--color-primary)] hover:underline" href="https://www.valeo.com/fr/recherche-developpement/" target="_blank" rel="noreferrer">
            Centre Efficacité Energétique
          </a>{" "}
          {t.experience.card3Line3Suffix}
        </p>
        <p>
          {t.experience.card3Line4Prefix}{" "}
          <a className="text-[var(--color-primary)] hover:underline" href="https://www.valeo.com/fr/recherche-developpement/" target="_blank" rel="noreferrer">
            Centre Efficacité Energétique
          </a>{" "}
          {t.experience.card3Line4Suffix}
        </p>
      </ResumeCard>

      <ResumeCard date={t.experience.card4Date} compact>
        <CardTitle>{t.experience.card4Title}</CardTitle>
        <AccentText>
          <a href={t.experience.card1OrgUrl} target="_blank" rel="noreferrer">
            {t.experience.card1Org}
          </a>
        </AccentText>
        <p className="mt-3">{t.experience.card4Line1}</p>
        <p className="mt-2 font-semibold">
          <a
            className="text-[var(--color-primary)] underline-offset-4 transition hover:underline"
            href={t.experience.card4Url}
            target="_blank"
            rel="noreferrer"
          >
            {t.experience.card4Link}
          </a>
        </p>
      </ResumeCard>
    </Section>
  );
}

