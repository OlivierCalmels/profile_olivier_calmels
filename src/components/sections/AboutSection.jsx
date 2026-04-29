import Section from "../ui/Section";
import CvActions from "../ui/CvActions";
import { BodyText, PageTitle, Subheading } from "../ui/Typography";

export default function AboutSection({ t, cvVariant }) {
  return (
    <Section id="about">
      <div className="flex min-h-screen flex-col justify-center">
      <img
        className="mb-6 block h-44 w-44 rounded-full border-8 border-[var(--color-primary)] object-cover lg:hidden"
        src={`${import.meta.env.BASE_URL}assets/img/portrait.jpg`}
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
      <div className="mt-8 flex flex-wrap gap-8">
        <a
          className="social-link-circle inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-social-bg)] text-2xl leading-none text-white no-underline transition-colors hover:bg-[var(--color-social-bg-hover)]"
          href="https://www.linkedin.com/in/olivier-calmels/?locale=fr_FR"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn — profil Olivier Calmels"
        >
          <i className="fab fa-linkedin-in" aria-hidden />
        </a>
        <a
          className="social-link-circle inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-social-bg)] text-2xl leading-none text-white no-underline transition-colors hover:bg-[var(--color-social-bg-hover)]"
          href="https://github.com/OlivierCalmels"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub — OlivierCalmels"
        >
          <i className="fab fa-github" aria-hidden />
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

