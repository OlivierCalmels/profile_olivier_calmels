import Section from "../ui/Section";
import CvActions from "../ui/CvActions";
import { BodyText, PageTitle, Subheading } from "../ui/Typography";

export default function AboutSection({ t, cvVariant }) {
  return (
    <Section id="about">
      <div className="flex min-h-screen flex-col justify-center">
      <img
        className="mb-6 block h-44 w-44 rounded-full border-8 border-[var(--color-primary)] object-cover lg:hidden"
        src="assets/img/portrait.jpg"
        alt="Profile picture of Olivier Calmels"
      />
      <PageTitle>
        Olivier <span className="text-[var(--color-primary)]">Calmels</span>
      </PageTitle>
      <Subheading>
        {t.about.location} ·{" "}
        <a className="text-[var(--color-primary)] hover:underline" href="mailto:olivier.calmels.dev@gmail.com">
          olivier.calmels.dev@gmail.com
        </a>
      </Subheading>
      <BodyText className="mt-10 max-w-4xl">{t.about.intro1}</BodyText>
      <BodyText className="mt-5 max-w-4xl">
        {t.about.intro2a}{" "}
        <a className="text-[var(--color-primary)] hover:underline" href="mailto:olivier.calmels.dev@gmail.com">
          {t.about.contact}
        </a>{" "}
        {t.about.intro2b}
      </BodyText>
      <div className="mt-8 flex gap-8">
        <a
          className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-700 text-4xl text-white transition hover:bg-slate-800"
          href="https://www.linkedin.com/in/olivier-calmels/?locale=fr_FR"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-700 text-4xl text-white transition hover:bg-slate-800"
          href="https://github.com/OlivierCalmels"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />
        </a>
      </div>
      <div className="mt-8">
        <CvActions
          variant={cvVariant}
          shortLabel={t.about.downloadShort}
          longLabel={t.about.downloadLong}
          menuAriaLabel={t.about.cvDownloadMenuAria}
          onLongClick={() => window.print()}
        />
      </div>
      </div>
    </Section>
  );
}

