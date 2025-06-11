import React from "react";
import '../styles/main.css';

interface SectionMenuProps {
  openSection: string | null;
  onSectionClick: (sectionId: string) => void;
}

const sections = [
  { id: "education", label: "Education", icon: "fa-graduation-cap" },
  { id: "experience", label: "Experience", icon: "fa-briefcase" },
  { id: "projects", label: "Projects", icon: "fa-diagram-project" },
  { id: "skills", label: "Skills", icon: "fa-code" },
  { id: "publications", label: "Publications", icon: "fa-book" },
  { id: "conferences", label: "Conferences", icon: "fa-chalkboard-teacher" },
  { id: "languages", label: "Languages", icon: "fa-language" },
  { id: "certificates", label: "Certificates", icon: "fa-certificate" },
  { id: "other", label: "Other", icon: "fa-ellipsis-h" }
];

const SectionMenu: React.FC<SectionMenuProps> = ({ openSection, onSectionClick }) => {
  // Helper to scroll with offset for sticky menu
  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      const menuBar = document.querySelector('.section-menu-bar') as HTMLElement;
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offset = menuBar ? menuBar.offsetHeight : 0;
        window.scrollTo({
          top: rect.top + scrollTop - offset - 4, // -4 for a little gap
          behavior: 'smooth',
        });
      }
    }, 0); // Wait for DOM update
  };

  return (
    <div className="section-menu-bar">
      <div className="section-menu-inner">
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={e => {
              e.preventDefault();
              handleSectionClick(section.id);
            }}
            className={
              'section-button' + (openSection === section.id ? ' section-button-active' : '')
            }
          >
            <span className="section-button-label">{section.label}</span>
            <i className={`fas ${section.icon} section-button-icon`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionMenu;