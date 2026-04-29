import { useEffect, useState } from "react";
import SideNav from "./components/layout/SideNav";
import AboutSection from "./components/sections/AboutSection";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import InterestsSection from "./components/sections/InterestsSection";
import SkillsSection from "./components/sections/SkillsSection";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

const navItems = ["about", "experience", "education", "skills", "interests"];
const messages = { fr, en };
const CV_ACTIONS_VARIANT = "A";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [language, setLanguage] = useState("fr");
  const t = messages[language];

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

  useEffect(() => {
    document.documentElement.lang = t.lang;
  }, [t.lang]);

  return (
    <div id="page-top" className="min-h-screen bg-white text-[var(--color-body-text)]">
      <SideNav
        navItems={navItems}
        navLabels={t.nav}
        activeSection={activeSection}
        onItemClick={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
        cvVariant={CV_ACTIONS_VARIANT}
        cvLabels={{ short: t.about.downloadShort, long: t.about.downloadLong }}
        cvMenuAria={t.about.cvDownloadMenuAria}
      />

      <main className="mx-auto w-full max-w-6xl px-6 py-10 lg:ml-72 lg:px-14">
        <AboutSection t={t} cvVariant={CV_ACTIONS_VARIANT} />
        <ExperienceSection t={t} />
        <EducationSection t={t} />
        <SkillsSection t={t} />
        <InterestsSection t={t} />
      </main>
    </div>
  );
}

export default App;
