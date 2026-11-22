import { useEffect, useState } from "react";
import { cvData } from "./cvData";
import { skillGroups } from "./skillsData";
import { sections, openSection, setAllSections } from "./sections";
import PhotoPlaceholder from "./components/PhotoPlaceholder";
import CVSection from "./components/CVSection";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import ConferenceItem from "./components/ConferenceItem";
import PublicationItem from "./components/PublicationItem";
import SocialMediaBlock from "./components/SocialMediaBlock";
import SectionMenu from "./components/SectionMenu";
import AcademicContactsBar from "./components/AcademicContactsBar";
import ViewSwitch from "./components/ViewSwitch";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return isVisible ? (
        <button
            type="button"
            className="icon-btn to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Scroll to top"
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up" aria-hidden="true" />
        </button>
    ) : null;
};

/** Opens the section named in the URL hash (on load and when the hash changes). */
function useHashSection() {
    useEffect(() => {
        const fromHash = (scroll: "smooth" | "jump") => {
            const id = decodeURIComponent(location.hash.slice(1));
            if (id) requestAnimationFrame(() => openSection(id, scroll));
        };
        const onHashChange = () => fromHash("smooth");
        fromHash("jump");
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);
}

/** Print → everything expanded (except abstracts), then restore the previous state. */
function usePrintExpand() {
    useEffect(() => {
        let closed: HTMLDetailsElement[] = [];
        const before = () => {
            const toOpen = Array.from(
                document.querySelectorAll<HTMLDetailsElement>("details.cv-section:not([open]), details.more:not(.abstract-toggle):not([open])")
            );
            toOpen.forEach((d) => (d.open = true));
            closed.push(...toOpen); // accumulate: browsers may fire beforeprint more than once
        };
        const after = () => {
            closed.forEach((d) => (d.open = false));
            closed = [];
        };
        window.addEventListener("beforeprint", before);
        window.addEventListener("afterprint", after);
        return () => {
            window.removeEventListener("beforeprint", before);
            window.removeEventListener("afterprint", after);
        };
    }, []);
}

const icon = (id: (typeof sections)[number]["id"]) => sections.find((s) => s.id === id)!.icon;

function App() {
    const { personal, contacts, social, education, experience, projects, publications, conferences, languages, certificates, other } = cvData;

    useHashSection();
    usePrintExpand();

    return (
        <>
            <SectionMenu />

            <div className="page" id="top">
                <header className="card profile">
                    <div className="profile__aside">
                        <PhotoPlaceholder />
                        <ViewSwitch current="academic" />
                    </div>
                    <div>
                        <h1 className="profile__name">{personal.name}</h1>
                        <p className="profile__title">{personal.title}</p>

                        <ul className="profile__facts">
                            <li><i className="fas fa-user-tie" aria-hidden="true" /><span>{personal.position}</span></li>
                            <li><i className="fas fa-building-columns" aria-hidden="true" /><span>{personal.department}</span></li>
                            <li><i className="fas fa-location-dot" aria-hidden="true" /><span>{personal.institution}</span></li>
                        </ul>

                        <ul className="profile__contacts">
                            {contacts.website && (
                                <li>
                                    <i className="fas fa-globe" aria-hidden="true" />
                                    <a href={contacts.website} target="_blank" rel="noopener noreferrer" title="Website">{contacts.website}</a>
                                </li>
                            )}
                            {contacts.email && (
                                <li>
                                    <i className="fas fa-envelope" aria-hidden="true" />
                                    <a href={`mailto:${contacts.email}`} title="Email">{contacts.email}</a>
                                </li>
                            )}
                            {contacts.gmail && (
                                <li>
                                    <i className="far fa-envelope" aria-hidden="true" />
                                    <a href={`mailto:${contacts.gmail}`} title="Gmail">{contacts.gmail}</a>
                                </li>
                            )}
                            {contacts.phone && (
                                <li>
                                    <i className="fas fa-phone" aria-hidden="true" />
                                    <a href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`} title="Call">{contacts.phone}</a>
                                </li>
                            )}
                        </ul>

                        <div className="profile__links">
                            <AcademicContactsBar />
                            <SocialMediaBlock social={social} />
                        </div>
                    </div>
                </header>

                <div className="toolbar">
                    <button type="button" className="btn" onClick={() => setAllSections(true)}>
                        <i className="fas fa-angles-down" aria-hidden="true" /> Expand all
                    </button>
                    <button type="button" className="btn" onClick={() => setAllSections(false)}>
                        <i className="fas fa-angles-up" aria-hidden="true" /> Collapse all
                    </button>
                </div>

                <main className="sections">
                    <CVSection id="education" icon={icon("education")} title="Education">
                        <ul className="timeline">
                            {education.map((e, i) => (
                                <li key={i}>
                                    <div className="tl-date">{e.year}</div>
                                    <div>
                                        <h3 className="tl-title">{e.degree}</h3>
                                        <p className="tl-meta">{e.institution}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CVSection>

                    <CVSection id="experience" icon={icon("experience")} title="Experience">
                        <ul className="timeline">
                            {experience.map((exp, i) => (
                                <ExperienceItem key={i} exp={exp} />
                            ))}
                        </ul>
                    </CVSection>

                    <CVSection id="projects" icon={icon("projects")} title="Projects and Works">
                        <ul className="timeline">
                            {projects.map((p, i) => (
                                <ProjectItem key={i} project={p} />
                            ))}
                        </ul>
                    </CVSection>

                    <CVSection id="skills" icon={icon("skills")} title="Skills">
                        <div className="skill-groups">
                            {skillGroups.map((group) => (
                                <section key={group.title} className="skill-group">
                                    <h3 className="skill-group__title">
                                        <i className={group.icon} aria-hidden="true" />
                                        {group.title}
                                    </h3>
                                    <ul className="chips">
                                        {group.items.map((item) => (
                                            <li key={item.name} className="chip">
                                                <i className={item.icon} aria-hidden="true" />
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                    </CVSection>

                    <CVSection id="publications" icon={icon("publications")} title="Publications">
                        {publications.map((pub, i) => (
                            <section key={i} className="pub-group">
                                <h3 className="subheading">{pub.type}</h3>
                                <ul className="timeline">
                                    {pub.items.map((item, j) => (
                                        <PublicationItem
                                            key={j}
                                            authors={item.authors}
                                            year={item.year}
                                            title={item.title}
                                            journal={item.journal}
                                            volume={item.volume}
                                            issue={item.issue}
                                            pages={item.pages}
                                            link={item.link}
                                            abstract={Array.isArray(item.abstract) ? item.abstract.join(" ") : item.abstract}
                                        />
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </CVSection>

                    <CVSection id="conferences" icon={icon("conferences")} title="Conferences">
                        <ul className="timeline">
                            {conferences.map((c, i) => (
                                <ConferenceItem
                                    key={i}
                                    year={c.year}
                                    authors={c.authors}
                                    title={c.title}
                                    event={c.event}
                                    place={c.place}
                                    link={c.link}
                                    participation={c.participation}
                                />
                            ))}
                        </ul>
                    </CVSection>

                    <CVSection id="languages" icon={icon("languages")} title="Languages">
                        <ul className="chips">
                            {languages.map((l, i) => (
                                <li key={i} className="chip">{l}</li>
                            ))}
                        </ul>
                    </CVSection>

                    <CVSection id="certificates" icon={icon("certificates")} title="Certificates">
                        <ul className="plain-list">
                            {certificates.map((c, i) => (
                                <li key={i}><i className="fas fa-award" aria-hidden="true" /><span>{c}</span></li>
                            ))}
                        </ul>
                    </CVSection>

                    <CVSection id="other" icon={icon("other")} title="Other">
                        <ul className="plain-list">
                            {other.map((o, i) => (
                                <li key={i}>
                                    <i className="fas fa-star" aria-hidden="true" />
                                    {typeof o === "string" ? <span>{o}</span> : <a href={o.href}>{o.text}</a>}
                                </li>
                            ))}
                        </ul>
                    </CVSection>
                </main>
            </div>

            <ScrollToTop />
        </>
    );
}

export default App;
