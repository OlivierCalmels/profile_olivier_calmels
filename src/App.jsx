import { useEffect, useState } from "react";
import SideNav from "./components/layout/SideNav";
import Section from "./components/ui/Section";
import ResumeCard from "./components/ui/ResumeCard";
import { AccentText, BodyText, CardTitle, PageTitle, SectionTitle } from "./components/ui/Typography";

const navItems = ["about", "experience", "education", "skills", "projects", "interests"];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[data-nav-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="page-top" className="min-h-screen bg-white text-slate-700">
      <SideNav navItems={navItems} activeSection={activeSection} onItemClick={setActiveSection} />

      <main className="mx-auto w-full max-w-6xl px-6 py-10 lg:ml-72 lg:px-14">
        <Section id="about">
          <PageTitle>
            Olivier <span className="text-[#ad0c42]">Calmels</span>
          </PageTitle>
          <p className="mt-4 text-lg font-semibold uppercase tracking-[0.06em] text-slate-500">
            Paris · 06 32 39 35 33 · <a className="text-[#ad0c42] hover:underline" href="mailto:olivier.calmels.dev@gmail.com">olivier.calmels.dev@gmail.com</a>
          </p>
          <BodyText className="mt-10 max-w-4xl">
            I am a junior fullstack developper and an experienced worker (I am 34 and I have been working for more than 10 years). I like smart and well tested code.
          </BodyText>
          <BodyText className="mt-5 max-w-4xl">
            I am looking for new challenges, so <a className="text-[#ad0c42] hover:underline" href="mailto:olivier.calmels.dev@gmail.com">contact me</a> if you are looking for a developper with an inquiring mind and always in a good mood!
          </BodyText>
          <div className="mt-8 flex gap-4 text-2xl">
            <a className="rounded-full bg-slate-700 p-3 text-white hover:bg-slate-800" href="https://www.linkedin.com/in/olivier-calmels/?locale=fr_FR" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
            <a className="rounded-full bg-slate-700 p-3 text-white hover:bg-slate-800" href="https://github.com/OlivierCalmels" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
          </div>
        </Section>

        <Section id="experience">
          <SectionTitle>Experience</SectionTitle>
          <ResumeCard date="Jul 2021 - today">
            <CardTitle>Fullstack web developer</CardTitle>
            <AccentText><a href="https://www.goodmeal.fr/" target="_blank" rel="noreferrer">Good Meal</a></AccentText>
              <p className="mt-3">Stack:</p>
              <ul className="ml-4 mt-2 list-disc space-y-1">
                <li>Back: Ruby on Rails 5</li>
                <li>Front: JavaScript, CSS3, Bootstrap, HML5</li>
                <li>Database: PostgreSQL / Redis</li>
              </ul>
              <p className="mt-3">Working in a 4 members dev team.</p>
              <p>Create new features (back & front) and maintaining and improving the existing features.</p>
          </ResumeCard>

          <ResumeCard date="2017 - 2020">
              <CardTitle>Expertise Engineer</CardTitle>
              <AccentText>Cemafroid</AccentText>
              <p className="mt-3">Drafting commercial proposals to meet customer&apos;s needs.</p>
              <p>Advising customers in various sectors (mass distribution, logistics, controlled temperature transport, pharmaceutical industry) on industrial refrigeration issues.</p>
              <p>Managing a team to perform more than 700 audits all over France.</p>
          </ResumeCard>

          <ResumeCard date="2008 - 2017" compact>
              <CardTitle>R&amp;D Engineer</CardTitle>
              <AccentText>Several Companies</AccentText>
              <p className="mt-3">R&amp;D engineer as a consultant at <a className="text-[#ad0c42] hover:underline" href="https://www.ixblue.com/application/test-simulations" target="_blank" rel="noreferrer">iXBlue</a> / 2017</p>
              <p>R&amp;D engineer as a consultant at <a className="text-[#ad0c42] hover:underline" href="https://www.valeo.com/fr/recherche-developpement/" target="_blank" rel="noreferrer">Valeo</a> / 2015-2016</p>
              <p>R&amp;D engineer at <a className="text-[#ad0c42] hover:underline" href="https://www.valeo.com/fr/recherche-developpement/" target="_blank" rel="noreferrer">Centre Efficacité Energétique</a> (Ecole des Mines de Paris) / 2013-2015</p>
              <p>R&amp;D technician at <a className="text-[#ad0c42] hover:underline" href="https://www.valeo.com/fr/recherche-developpement/" target="_blank" rel="noreferrer">Centre Efficacité Energétique</a> (Ecole des Mines de Paris) / 2008-2013</p>
          </ResumeCard>
        </Section>

        <Section id="education">
          <SectionTitle>Education</SectionTitle>
          <ResumeCard date="2021">
              <CardTitle>Simplon · Paris</CardTitle>
              <AccentText>Apple Foundaction Program</AccentText>
              <p className="mt-3">1 month full-time intensive coding bootcamp learning Swift, SwiftUI, and mobile app design. I did it as first step in the mobile development and to improve my UX skills.</p>
          </ResumeCard>
          <ResumeCard date="2020">
              <CardTitle>Le Wagon · Paris</CardTitle>
              <AccentText>Full-Stack Web Developper</AccentText>
              <p className="mt-3">9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails. Designing, implementation and shipping to production a clone of AirBnB and a Rails prototype of ----- takEateasy -----.</p>
          </ResumeCard>
          <ResumeCard date="2009-2013" compact>
              <CardTitle>Conservatoire National des Arts et Métiers (CNAM) · Paris</CardTitle>
              <AccentText>Energy Engineer, spec. Industrial Refrigeration</AccentText>
              <p className="mt-3">Conception of industrial refrigeration, climatisation, heat pump, air treatment and renewable energy systems.</p>
          </ResumeCard>
        </Section>

        <Section id="skills">
          <SectionTitle>Skills</SectionTitle>
          <CardTitle>Programming Languages &amp; Tools</CardTitle>
          <div className="my-6 flex flex-wrap gap-6 text-5xl text-slate-600">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"><i className="fab fa-html5" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"><i className="fab fa-css3-alt" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><i className="fab fa-js-square" /></a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><i className="fab fa-sass" /></a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><i className="fab fa-git-square" /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><i className="fab fa-github-square" /></a>
            <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer"><i className="fas fa-gem" /></a>
          </div>
          <p className="mb-2 uppercase tracking-[0.06em] text-slate-500">And also</p>
          <ul className="mb-8 ml-4 list-disc space-y-1">
            <li>Ruby on Rails</li>
            <li>Database: SQL · PostgreSQL</li>
            <li>Deployement: Heroku</li>
            <li>Other tools: Cloudinary · Hotjar · Amazon S3</li>
          </ul>
          <CardTitle>Other skills</CardTitle>
          <ul className="ml-4 mt-4 list-disc space-y-1">
            <li>English (professional)</li>
            <li>French (native)</li>
            <li>Cross Functional Teams</li>
            <li>Project management</li>
          </ul>
        </Section>

        <Section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <ResumeCard date="Feb 2021">
              <CardTitle>Hacking Educational Planning - IIPE-UNESCO x Latitudes</CardTitle>
              <AccentText className="mt-2 text-lg"><a href="http://www.iiep.unesco.org/en/making-new-tools-part-plan-meet-winners-hacking-edplanning-13615" target="_blank" rel="noreferrer">More informations here</a></AccentText>
              <p className="mt-3">48 hours to prototype digital solutions to the challenges of educational planning with IIEP-UNESCO!</p>
              <p>My first hackathon, with some friends from Le Wagon!</p>
          </ResumeCard>
          <ResumeCard date="Jan-Feb 2021">
              <CardTitle>Sample App</CardTitle>
              <AccentText className="mt-2 text-lg"><a href="https://nameless-waters-84271.herokuapp.com/" target="_blank" rel="noreferrer">Visit</a></AccentText>
              <p className="mt-3">This app was designed by Olivier Calmels for training purposes, following the Ruby on Rails Tutorial: Learn Web Development with Rails (6th Edition) by Michael Hartl.</p>
              <p>A fonctionnal Tweeter-like app allowing you to register, edit your profile, publish and edit posts. You can also follow and be followed by other users.</p>
              <p>A well tested code with more than 450 units and integration tests.</p>
          </ResumeCard>
          <ResumeCard date="Nov-Dec 2020" compact>
              <CardTitle>takEateasy</CardTitle>
              <p className="mt-2 text-lg text-[#ad0c42]">See <a className="underline" href="https://youtu.be/BKkxUFBYtVU?t=1243" target="_blank" rel="noreferrer">demo</a> between 20&apos;40&apos;&apos;&apos; and 25&apos;20&apos;&apos;.</p>
              <p className="mt-3">App developped in a 2 weeks sprint by a team of 4 junior developpers during le Wagon bootcamp.</p>
              <p>The demo was recorded during the bootcamp demoday in Autumn 2020.</p>
              <p>This app is designed for mobile. The application creates menus, provide recipes and automatically generates an interactive and customizable shopping list.</p>
          </ResumeCard>
        </Section>

        <Section id="interests" withBorder={false}>
          <SectionTitle>Interests</SectionTitle>
          <p className="mb-4">Apart from coding, I love martial arts (I am a black belt in judo and ju-jitsu). I taught Judo to children and adults. I love transmission and pedagogy.</p>
          <p>I also studied Ericksonian communication. I am a certified practicioner. It improved a lot my professional and personal relationships.</p>
        </Section>
      </main>
    </div>
  );
}

export default App;
