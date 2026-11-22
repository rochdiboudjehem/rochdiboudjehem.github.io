// Section ids, menu labels and header icons, shared by the menu and the page.
export const sections = [
  { id: "education", label: "Education", icon: "fa-graduation-cap" },
  { id: "experience", label: "Experience", icon: "fa-briefcase" },
  { id: "projects", label: "Projects", icon: "fa-diagram-project" },
  { id: "skills", label: "Skills", icon: "fa-code" },
  { id: "publications", label: "Publications", icon: "fa-book" },
  { id: "conferences", label: "Conferences", icon: "fa-users" },
  { id: "languages", label: "Languages", icon: "fa-language" },
  { id: "certificates", label: "Certificates", icon: "fa-certificate" },
  { id: "other", label: "Other", icon: "fa-ellipsis-h" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Open a collapsible section and scroll it into view ("jump" = no animation, e.g. on page load). */
export function openSection(id: string, scroll: "smooth" | "jump" | "none" = "smooth"): boolean {
  const el = document.getElementById(id);
  if (!(el instanceof HTMLDetailsElement)) return false;
  if (!el.open) {
    // Open at full height at once so the page is tall enough to scroll to the section.
    el.classList.add("instant-open");
    el.open = true;
    void el.offsetHeight;
    requestAnimationFrame(() => el.classList.remove("instant-open"));
  }
  if (scroll !== "none") {
    const smooth = scroll === "smooth" && !prefersReducedMotion();
    el.scrollIntoView({ behavior: smooth ? "smooth" : "instant", block: "start" });
  }
  return true;
}

/** Open or close every top-level section. */
export function setAllSections(open: boolean) {
  document.querySelectorAll<HTMLDetailsElement>("details.cv-section").forEach((d) => {
    d.open = open;
  });
}
