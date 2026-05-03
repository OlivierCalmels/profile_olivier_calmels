const LANG_STORAGE_KEY = "profile_olivier_calmels.lang";

/** @returns {"fr" | "en" | null} */
export function readStoredLanguage() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (raw === "fr" || raw === "en") return raw;
  } catch {
    /* private mode or blocked storage */
  }
  return null;
}

/** @param {"fr" | "en"} lang */
export function writeStoredLanguage(lang) {
  if (lang !== "fr" && lang !== "en") return;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}
