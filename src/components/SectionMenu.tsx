import { useEffect, useRef, useState } from "react";
import { sections, openSection } from "../sections";

const logoUnivGuelma = "/images/logo-univ-guelma No Text White Strike.svg";

/** Sticky top menu: highlights the section currently in view and opens sections on click. */
const SectionMenu: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // mobile drop-down menu
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const lastClicked = useRef<string | null>(null);

  // Scroll-spy: the active section is the last one whose top has passed under the menu.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = (navRef.current?.offsetHeight ?? 0) + 24;
      let current: string | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = s.id;
      }
      // At the very bottom a short last section can never reach the top: keep the clicked one.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && lastClicked.current) {
        const el = document.getElementById(lastClicked.current);
        if (el && el.getBoundingClientRect().top < window.innerHeight) current = lastClicked.current;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("toggle", schedule, true); // <details> open/close changes layout
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("toggle", schedule, true);
    };
  }, []);

  // Mobile menu: close on Escape, on a tap outside, or when the screen becomes wide.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const wide = window.matchMedia("(min-width: 769px)");
    const onWide = () => wide.matches && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      wide.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  // Keep the active link visible when the menu scrolls horizontally.
  useEffect(() => {
    const box = linksRef.current;
    const link = active ? box?.querySelector<HTMLElement>(`[data-section="${active}"]`) : null;
    if (!box || !link) return;
    const left = link.offsetLeft;
    const right = left + link.offsetWidth;
    if (left < box.scrollLeft || right > box.scrollLeft + box.clientWidth) {
      box.scrollTo({ left: left - (box.clientWidth - link.offsetWidth) / 2, behavior: "smooth" });
    }
  }, [active]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    lastClicked.current = id;
    setMenuOpen(false);
    if (openSection(id)) {
      history.replaceState(null, "", `#${id}`);
      setActive(id);
    }
  };

  return (
    <nav ref={navRef} className="site-nav" aria-label="CV sections">
      <div className="site-nav__inner">
        <a
          className="site-nav__brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            lastClicked.current = null;
            history.replaceState(null, "", location.pathname + location.search);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Back to top"
        >
          <img src={logoUnivGuelma} alt="University of Guelma Logo" />
        </a>
        <span className="site-nav__current" aria-hidden="true">
          {sections.find((s) => s.id === active)?.label ?? "Curriculum Vitae"}
        </span>
        <div id="site-nav-links" className={`site-nav__links${menuOpen ? " is-open" : ""}`} ref={linksRef}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-section={s.id}
              className="site-nav__link"
              aria-current={active === s.id ? "location" : undefined}
              onClick={(e) => go(e, s.id)}
            >
              {s.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="icon-btn site-nav__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default SectionMenu;
