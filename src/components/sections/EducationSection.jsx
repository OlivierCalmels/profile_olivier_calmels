import ResumeCard from "../ui/ResumeCard";
import Section from "../ui/Section";
import { AccentText, CardTitle, SectionTitle } from "../ui/Typography";

export default function EducationSection({ t }) {
  return (
    <Section id="education">
      <SectionTitle>{t.sectionTitles.education}</SectionTitle>

      <ResumeCard date={t.education.card1Date}>
        <CardTitle>{t.education.card1Title}</CardTitle>
        <AccentText>{t.education.card1Org}</AccentText>
        <p className="mt-3">{t.education.card1Line1}</p>
      </ResumeCard>

      <ResumeCard date={t.education.card2Date}>
        <CardTitle>{t.education.card2Title}</CardTitle>
        <AccentText>{t.education.card2Org}</AccentText>
        <p className="mt-3">{t.education.card2Line1}</p>
      </ResumeCard>

      <ResumeCard date={t.education.card3Date} compact>
        <CardTitle>{t.education.card3Title}</CardTitle>
        <AccentText>{t.education.card3Org}</AccentText>
        <p className="mt-3">{t.education.card3Line1}</p>
      </ResumeCard>
    </Section>
  );
}

