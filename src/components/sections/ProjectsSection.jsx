import ResumeCard from "../ui/ResumeCard";
import Section from "../ui/Section";
import { AccentText, CardTitle, SectionTitle } from "../ui/Typography";

export default function ProjectsSection({ t }) {
  return (
    <Section id="projects">
      <SectionTitle>{t.sectionTitles.projects}</SectionTitle>

      <ResumeCard date={t.projects.card1Date}>
        <CardTitle>{t.projects.card1Title}</CardTitle>
        <AccentText className="mt-2 text-lg">
          <a href="http://www.iiep.unesco.org/en/making-new-tools-part-plan-meet-winners-hacking-edplanning-13615" target="_blank" rel="noreferrer">
            {t.projects.card1Link}
          </a>
        </AccentText>
        <p className="mt-3">{t.projects.card1Line1}</p>
        <p>{t.projects.card1Line2}</p>
      </ResumeCard>

      <ResumeCard date={t.projects.card2Date}>
        <CardTitle>{t.projects.card2Title}</CardTitle>
        <AccentText className="mt-2 text-lg">
          <a href="https://nameless-waters-84271.herokuapp.com/" target="_blank" rel="noreferrer">
            {t.projects.card2Link}
          </a>
        </AccentText>
        <p className="mt-3">{t.projects.card2Line1}</p>
        <p>{t.projects.card2Line2}</p>
        <p>{t.projects.card2Line3}</p>
      </ResumeCard>

      <ResumeCard date={t.projects.card3Date} compact>
        <CardTitle>{t.projects.card3Title}</CardTitle>
        <p className="mt-2 text-lg text-[var(--color-primary)]">
          {t.projects.card3Prefix}{" "}
          <a className="underline" href="https://youtu.be/BKkxUFBYtVU?t=1243" target="_blank" rel="noreferrer">
            {t.projects.card3Link}
          </a>{" "}
          {t.projects.card3Suffix}
        </p>
        <p className="mt-3">{t.projects.card3Line1}</p>
        <p>{t.projects.card3Line2}</p>
        <p>{t.projects.card3Line3}</p>
      </ResumeCard>
    </Section>
  );
}

