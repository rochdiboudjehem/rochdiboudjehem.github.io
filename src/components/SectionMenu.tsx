import React from "react";
import logoUnivGuelma from "/images/logo-univ-guelma No Text White Strike.svg";

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

const sectionColors: Record<string, string> = {
  education: '#8e44ad', // purple (matches section title icon)
  experience: '#1976d2', // blue
  projects: '#16a085', // teal
  skills: '#e67e22', // orange
  publications: '#c0392b', // red
  conferences: '#2980b9', // dark blue
  languages: '#27ae60', // green
  certificates: '#f1c40f', // yellow
  other: '#7f8c8d', // gray
};

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

  // Responsive: show horizontal menu on desktop, top navbar on mobile
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 992 : false
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    // Mobile: Top collapsible menu, vertical stack, 30px left margin for each button
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm border-bottom section-menu-bar">
        <div className="container-fluid" >
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ minWidth: 120 }}>
            <img src={logoUnivGuelma} alt="University of Guelma Logo" style={{ height: 40, marginRight: 8 }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sectionMenuCollapse" aria-controls="sectionMenuCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="sectionMenuCollapse">
            <ul className="navbar-nav w-100 flex-column align-items-stretch">
              {sections.map(section => (
                <li className="nav-item w-100" key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={e => {
                      e.preventDefault();
                      handleSectionClick(section.id);
                      // Close the menu on mobile after click
                      const menu = document.getElementById('sectionMenuCollapse');
                      if (menu && window.innerWidth < 992) {
                        menu.classList.remove('show');
                      }
                    }}
                    className={`nav-link d-flex align-items-center px-3 py-2${openSection === section.id ? ' active fw-bold' : ''}`}
                    style={{
                      minWidth: 0,
                      marginLeft: 50,
                      color: sectionColors[section.id],
                      fontWeight: openSection === section.id ? 'bold' : undefined,
                    }}
                  >
                    <span className="flex-grow-1 text-end me-3" style={{ color: sectionColors[section.id] }}>{section.label}</span>
                    <i className={`fas ${section.icon} mb-0 fs-5`} style={{ color: sectionColors[section.id] }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  // Desktop: Top horizontal menu (not floating sidebar)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm border-bottom section-menu-bar">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ minWidth: 120 }}>
          <img src={logoUnivGuelma} alt="University of Guelma Logo" style={{ height: 40, marginRight: 8 }} />
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row flex-wrap w-100 justify-content-center">
          {sections.map(section => (
            <li className="nav-item mx-1" key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={e => {
                  e.preventDefault();
                  handleSectionClick(section.id);
                }}
                className={`nav-link d-flex flex-column align-items-center${openSection === section.id ? ' active fw-bold' : ''}`}
                style={{
                  minWidth: 80,
                  color: sectionColors[section.id],
                  fontWeight: openSection === section.id ? 'bold' : undefined,
                }}
              >
                <i className={`fas ${section.icon} fs-4 mb-1`} style={{ color: sectionColors[section.id] }} />
                <span className="small" style={{ color: sectionColors[section.id] }}>{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SectionMenu;