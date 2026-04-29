import { useState } from "react";
import CvActions from "../ui/CvActions";

export default function SideNav({
  navItems,
  navLabels,
  activeSection,
  onItemClick,
  language,
  onLanguageChange,
  cvVariant,
  cvLabels,
  cvMenuAria,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (item) => {
    onItemClick(item);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (nextLanguage) => {
    onLanguageChange(nextLanguage);
    setIsMenuOpen(false);
  };

  return (
    <aside className="sticky top-0 z-20 border-b border-slate-200 bg-[var(--color-primary)] px-4 py-3 text-white lg:fixed lg:bottom-0 lg:left-0 lg:top-0 lg:flex lg:w-72 lg:border-b-0 lg:px-8 lg:py-8">
      <div className="w-full lg:flex lg:h-full lg:flex-col lg:items-center lg:justify-center lg:gap-10">
        <div className="flex items-center justify-between lg:hidden">
          <p className="text-xl leading-none">Olivier Calmels</p>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="rounded border border-white/60 px-3 py-2 opacity-70 transition hover:opacity-100"
          >
            <span className="block h-0.5 w-6 bg-white/80" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white/80" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white/80" />
          </button>
        </div>

        <img
          className="hidden h-40 w-40 rounded-full border-8 border-[var(--color-profile-ring)] object-cover lg:block"
          src="assets/img/portrait.jpg"
          alt="Profile picture of Olivier Calmels"
        />

        <div
          className={`mt-0 overflow-hidden transition-all duration-300 ease-in-out lg:mt-0 lg:w-full lg:overflow-visible ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <nav className="flex w-full justify-center">
            <ul className="flex w-full flex-col items-start gap-y-3 text-left text-sm font-semibold uppercase tracking-[0.08em] lg:items-center lg:text-center">
            {navItems.map((item) => {
              const isActive = activeSection === item;
              return (
                <li key={item}>
                  <a
                    className={`transition ${isActive ? "opacity-100 decoration-2" : "opacity-60 hover:opacity-80"}`}
                    href={`#${item}`}
                    onClick={() => handleNavClick(item)}
                  >
                    {navLabels[item]}
                  </a>
                </li>
              );
            })}
            </ul>
          </nav>
          <div className="mt-6 flex w-full flex-col gap-2 lg:items-center">
            <CvActions
              variant={cvVariant}
              context="navbar"
              shortLabel={cvLabels.short}
              longLabel={cvLabels.long}
              menuAriaLabel={cvMenuAria}
              onShortClick={() => setIsMenuOpen(false)}
              onLongClick={() => {
                window.print();
                setIsMenuOpen(false);
              }}
            />
          </div>
          <div className="pt-10 flex justify-start gap-1.5 lg:mt-0 lg:justify-center">
            <button
              type="button"
              onClick={() => handleLanguageChange("fr")}
              className={`rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.12em] transition ${language === "fr" ? "bg-white text-[var(--color-primary)]" : "bg-white/15 text-white hover:bg-white/25"}`}
              aria-label="Passer en francais"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.12em] transition ${language === "en" ? "bg-white text-[var(--color-primary)]" : "bg-white/15 text-white hover:bg-white/25"}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

