// import React from "react};
// import './tailwind.css';
import "./styles/main.css";
// import "./styles/icons.css";
// import './styles/css/academicons.min.css';
import { cvData } from "./cvData";
import PhotoPlaceholder from "./components/PhotoPlaceholder";
import CVSection from "./components/CVSection";
// import Navbar from "./components/Navbar";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import { useState, useEffect } from 'react';
import ConferenceItem from "./components/ConferenceItem";
import PublicationItem from "./components/PublicationItem";
import "./styles/css/academicons.min.css";
import SocialMediaBlock from './components/SocialMediaBlock';
import SectionMenu from './components/SectionMenu';
import AcademicContactsBar from './components/AcademicContactsBar';
import MobileContactsSection from './components/MobileContactsSection';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return isVisible ? (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                backgroundColor: '#1976d2',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                transition: 'background-color 0.2s',
                zIndex: 1000
            }}
            title="Scroll to top"
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#1565c0'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#1976d2'}
        >
            <i className="fas fa-arrow-up" />
        </button>
    ) : null;
};

function App() {
    const {
        personal,
        contacts,
        // academicAccounts,  // Add this line
        social,
        education,
        experience,
        projects,
        publications,
        conferences,
        languages,
        certificates,
        other
    } = cvData;
    const [openSection, setOpenSection] = useState<string | null>(null);  // Add this line

    const handleSectionClick = (sectionId: string) => {    // Add this function
        setOpenSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container my-0 mx-auto">
            {/* <Navbar /> */}
            {/* SectionMenu is now visually above the academic and social bars */}
            <SectionMenu openSection={openSection} onSectionClick={handleSectionClick} />
            {/* Hide floating bars on mobile */}
            <div className="d-none d-lg-block">
                <AcademicContactsBar />
            </div>
            <div className="d-none d-lg-block">
                <SocialMediaBlock social={social} />
            </div>
            <div className="cv-container bg-white rounded-4 shadow p-4">
                <div className="header d-flex flex-column flex-md-column flex-lg-row gap-3 mb-0">
                    <div className="w-100">
                        <div className="d-flex flex-row flex-wrap align-items-center mb-2 justify-content-center justify-content-lg-start text-center text-lg-start">
                            <div className="w-100 d-flex flex-column align-items-center align-items-lg-start">
                                <h1 className="mb-2" style={{ fontSize: '2.2rem' }}>{personal.name}</h1>
                                <h3 className="mb-0" style={{ fontSize: '1.3rem', color: '#1a2a3a' }}>{personal.title}</h3>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row w-100 align-items-center align-items-lg-start mt-3 mt-lg-0">
                            <div className="me-0 me-lg-4 mb-3 mb-lg-0 justify-content-center" style={{ minWidth: 180 }}>
                                <PhotoPlaceholder width={180} height={220} />
                            </div>
                            <div className="flex-grow-1 mt-3 mt-lg-0 ps-0 ps-lg-3" style={{ minWidth: 0 }}>
                                <div><b>Position:</b> {personal.position}</div>
                                <div><b>Department:</b> {personal.department}</div>
                                <div><b>Institution:</b> {personal.institution}</div>
                                <div>
                                    {contacts.website && (
                                        <a href={contacts.website} target="_blank" rel="noopener noreferrer" title="Website">
                                            <i className="fas fa-globe icon"></i>
                                            <span>{contacts.website}</span>
                                        </a>
                                    )}
                                </div>
                                <div>
                                    {contacts.email && (
                                        <a href={contacts.email} target="_blank" rel="noopener noreferrer" title="Email">
                                            <i className="fas fa-envelope icon"></i>
                                            <span>{contacts.email}</span>
                                        </a>
                                    )}
                                </div>
                                <hr style={{ margin: '3px 0', border: 0, borderTop: '1px solid #ccc' }} />
                                <div className="contact-section">
                                      {/* Social Accounts */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                                        {social.telegram && (
                                            <a href={social.telegram} target="_blank" rel="noopener noreferrer" title="Telegram">
                                                <i className="fab fa-telegram icon" />
                                            </a>
                                        )}
                                        {social.whatsapp && (
                                            <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                                                <i className="fab fa-whatsapp icon" />
                                            </a>
                                        )}
                                        <a href={`tel:${contacts.phone.replace(/[^\d+]/g, '')}`} target="_blank" rel="noopener noreferrer" title="Call">
                                            <i className="fa fa-phone icon" />
                                            <span>{contacts.phone}</span>
                                        </a>
                                        <span>&nbsp;|&nbsp;</span>
                                        <a href={`mailto:${contacts.gmail}`} target="_blank" rel="noopener noreferrer" title="Gmail">
                                            <i className="far fa-envelope icon-only" style={{ color: 'red' }}></i>
                                            <span>{contacts.gmail}</span>
                                        </a>
                                    </div>
                                    <hr style={{ margin: '3px 0', border: 0, borderTop: '1px solid #ccc' }} />

                                </div>
                                <div style={{ marginTop: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <hr style={{ margin: '3px 0', border: 0, borderTop: '1px solid #ccc' }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileContactsSection social={social} />
                        <CVSection id="education"
                            title={<><i className="fas fa-graduation-cap icon me-2" />Education</>}
                            isOpen={openSection === 'education'}
                            onToggle={handleSectionClick}>

                            <ul>
                                {education.map((e, i) => (
                                    <li key={i}>
                                        {/* <i className="fas fa-certificate icon" /> */}
                                        <i className="fas fa-scroll icon" title="Degree" style={{ color: '#8e44ad' }} />
                                        <b>{e.degree}</b> ({e.year})<br />
                                        {e.institution}
                                        {/* IF you want to add the thesis title activate the bellow section */}
                                        {/* {e.thesis && (
                  <div style={{ marginTop: 2 }}>
                    <i className="fas fa-certificate icon" title="Thesis/Dissertation"/>
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: '#1976d2', textDecoration: 'underline', fontStyle: 'italic' }}>
                        {e.thesis}
                      </a>
                    ) : (
                      <span style={{ fontStyle: 'italic', marginLeft: 8 }}>{e.thesis}</span>
                    )}
                  </div>
                )} */}
                                    </li>
                                ))}
                            </ul>
                        </CVSection>
                        <CVSection id="experience"
                            title={<><i className="fas fa-briefcase icon me-2" />Experience</>}
                            isOpen={openSection === 'experience'}
                            onToggle={handleSectionClick}>
                            <ul>
                                {experience.map((exp, i) => (
                                    <ExperienceItem key={i} exp={exp} />
                                ))}
                            </ul>
                        </CVSection>
                        <CVSection id="projects"
                            title={<><i className="fas fa-diagram-project icon me-2" />Projects and Works</>}
                            isOpen={openSection === 'projects'}
                            onToggle={handleSectionClick}>
                            <ul>
                                {projects.map((p, i) => (
                                    <ProjectItem key={i} project={p} />
                                ))}
                            </ul>
                        </CVSection>
                        <CVSection id="skills"
                            title={<><i className="fas fa-code icon me-2" />Skills</>}
                            isOpen={openSection === 'skills'}
                            onToggle={handleSectionClick}>
                            <ul>
                                <li>
                                    <i className="fas fa-terminal icon" />
                                    <b>Programming Languages:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fab fa-java icon" title="Java" style={{ color: '#007396' }} /> Java
                                        </li>
                                        <li>
                                            <i className="fas fa-c icon" title="C" style={{ color: '#555' }} /> C
                                        </li>
                                        <li>
                                            <i className="fab fa-python icon" title="Python" style={{ color: '#3776AB' }} /> Python
                                        </li>
                                        <li>
                                            <i className="fab fa-js-square icon" title="JavaScript" style={{ color: '#f7df1e' }} /> JavaScript
                                        </li>
                                        <li>
                                            <i className="fab fa-php icon" title="PHP" style={{ color: '#777bb4' }} /> PHP
                                        </li>
                                        <li>
                                            <i className="fas fa-copyright icon" title="C++" style={{ color: '#00599C' }} /> C++
                                        </li>
                                        <li>
                                            <i className="fas fa-code icon" title="TypeScript" style={{ color: '#3178c6' }} /> TypeScript
                                        </li>
                                        <li>
                                            <i className="fas fa-square-root-alt icon" title="MATLAB" style={{ color: '#e16737' }} /> MATLAB
                                        </li>
                                        <li>
                                            <i className="fas fa-microchip icon" title="Assembly 8086" style={{ color: '#6c3483' }} /> Assembly 8086
                                        </li>
                                        <li>
                                            <i className="fas fa-brain icon" title="Prolog" style={{ color: '#b22222' }} /> Prolog
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-file-alt icon" />
                                    <b>Academic & Markup Languages:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-file-code icon" title="LaTeX" style={{ color: '#008080' }} /> LaTeX
                                        </li>
                                        <li>
                                            <i className="fab fa-markdown icon" title="Markdown" style={{ color: '#083fa1' }} /> Markdown
                                        </li>
                                        <li>
                                            <i className="fab fa-html5 icon" title="HTML5" style={{ color: '#e34c26' }} /> HTML5
                                        </li>
                                        <li>
                                            <i className="fas fa-code icon" title="XML" style={{ color: '#f89820' }} /> XML
                                        </li>
                                        <li>
                                            <i className="fas fa-quote-left icon" title="BibTeX" style={{ color: '#6c757d' }} /> BibTeX
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-book icon" />
                                    <b>Bibliographic Software:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="ai ai-zotero icon" title="Zotero" style={{ color: '#b5351d' }} /> Zotero
                                        </li>
                                        <li>
                                            <i className="fas fa-bookmark icon" title="JabRef" style={{ color: '#1b6ac6' }} /> JabRef
                                        </li>
                                        <li>
                                            <i className="fas fa-book-medical icon" title="EndNote" style={{ color: '#c60c30' }} /> EndNote
                                        </li>
                                        <li>
                                            <i className="ai ai-mendeley icon" title="Mendeley" style={{ color: '#a61c30' }} /> Mendeley
                                        </li>
                                        <li>
                                            <i className="fas fa-book-open icon" title="KBibTeX" style={{ color: '#306998' }} /> KBibTeX
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-globe icon" />
                                    <b>Web Technologies:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fab fa-html5 icon" title="HTML5" style={{ color: '#e34c26' }} /> HTML5
                                        </li>
                                        <li>
                                            <i className="fab fa-css3-alt icon" title="CSS3" style={{ color: '#1572b6' }} /> CSS3
                                        </li>
                                        <li>
                                            <i className="fab fa-js-square icon" title="JavaScript" style={{ color: '#f7df1e' }} /> JavaScript
                                        </li>
                                        <li>
                                            <i className="fab fa-react icon" title="React" style={{ color: '#61dafb' }} /> React
                                        </li>
                                        <li>
                                            <i className="fab fa-vuejs icon" title="Vue.js" style={{ color: '#42b883' }} /> Vue.js
                                        </li>
                                        <li>
                                            <i className="fab fa-node-js icon" title="Node.js" style={{ color: '#68a063' }} /> Node.js
                                        </li>
                                        <li>
                                            <i className="fab fa-bootstrap icon" title="Bootstrap" style={{ color: '#563d7c' }} /> Bootstrap
                                        </li>
                                        <li>
                                            <i className="fas fa-dollar-sign icon" title="jQuery" style={{ color: '#0769ad' }} /> jQuery
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-database icon" />
                                    <b>Databases:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-database icon" title="MySQL" style={{ color: '#4479A1' }} /> MySQL
                                        </li>
                                        <li>
                                            <i className="fas fa-feather-alt icon" title="SQLite" style={{ color: '#003B57' }} /> SQLite
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-cogs icon" />
                                    <b>Frameworks & Libraries:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-dollar-sign icon" title="jQuery" style={{ color: '#0769ad' }} /> jQuery
                                        </li>
                                        <li>
                                            <i className="fab fa-bootstrap icon" title="Bootstrap" style={{ color: '#563d7c' }} /> Bootstrap
                                        </li>
                                        <li>
                                            <i className="fas fa-shipping-fast icon" title="Express.js" style={{ color: '#68a063' }} /> Express.js
                                        </li>
                                        <li>
                                            <i className="fab fa-react icon" title="React" style={{ color: '#61dafb' }} /> React
                                        </li>
                                        <li>
                                            <i className="fab fa-angular icon" title="Angular" style={{ color: '#dd0031' }} /> Angular
                                        </li>
                                        <li>
                                            <i className="fas fa-paw icon" title="Pandas" style={{ color: '#150458' }} /> Pandas
                                        </li>
                                        <li>
                                            <i className="fas fa-calculator icon" title="NumPy" style={{ color: '#013243' }} /> NumPy
                                        </li>
                                        <li>
                                            <i className="fas fa-atom icon" title="Scikit-learn" style={{ color: '#F7931E' }} /> Scikit-learn
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-paint-brush icon" />
                                    <b>Graphic Design:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <img src="/vite-cv/images/brand/photoshop.svg" alt="Adobe Photoshop" title="Adobe Photoshop" style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 6 }} /> Adobe Photoshop
                                        </li>
                                        <li>
                                            <img src="/vite-cv/images/brand/audacity.png" alt="Audacity" title="Audacity" style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 6 }} /> Audacity
                                        </li>
                                        <li>
                                            <img src="/vite-cv/images/brand/gimp.png" alt="GIMP" title="GIMP" style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 6 }} /> GIMP
                                        </li>
                                        <li>
                                            <img src="/vite-cv/images/brand/3dsmax.png" alt="3DS Max" title="3DS Max" style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 6 }} /> 3D Studio Max
                                        </li>
                                        <li>
                                            <img src="/vite-cv/images/brand/blender.png" alt="Blender" title="Blender" style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 6 }} /> Blender
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-video icon" />
                                    <b>Video & Audio Editing:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-video icon" title="Adobe Premiere Pro" style={{ color: '#a259ff' }} /> Adobe Premiere Pro
                                        </li>
                                        <li>
                                            <i className="fas fa-waveform icon" title="Adobe Audition" style={{ color: '#00e4bb' }} /> Adobe Audition
                                        </li>
                                        <li>
                                            <i className="fas fa-film icon" title="Magix Video Deluxe" style={{ color: '#222' }} /> Magix Video Deluxe
                                        </li>
                                        <li>
                                            <i className="fas fa-volume-up icon" title="Audacity" style={{ color: '#1e72b8' }} /> Audacity
                                        </li>
                                        <li>
                                            <i className="fas fa-camera icon" title="Camtasia" style={{ color: '#5cb85c' }} /> Camtasia
                                        </li>
                                        <li>
                                            <i className="fas fa-play-circle icon" title="Filmora" style={{ color: '#2c3e50' }} /> Filmora
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-cube icon" />
                                    <b>CAD & 3D:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-drafting-compass icon" title="AutoCAD" style={{ color: '#e60026' }} /> AutoCAD
                                        </li>
                                        <li>
                                            <i className="fas fa-home icon" title="SketchUp" style={{ color: '#e67e22' }} /> SketchUp
                                        </li>
                                        <li>
                                            <i className="fas fa-cubes icon" title="3DS Max" style={{ color: '#f5792a' }} /> 3D Studio Max
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-chalkboard-teacher icon" />
                                    <b>CMS & LMS Platforms:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fab fa-wordpress icon" title="WordPress" style={{ color: '#21759b' }} /> WordPress
                                        </li>
                                        <li>
                                            <i className="fab fa-drupal icon" title="Drupal" style={{ color: '#0678be' }} /> Drupal
                                        </li>
                                        <li>
                                            <i className="fab fa-joomla icon" title="Joomla" style={{ color: '#5091cd' }} /> Joomla
                                        </li>
                                        <li>
                                            <i className="ai ai-moodle icon" title="Moodle" style={{ color: '#f98012' }} /> Moodle
                                        </li>
                                        <li>
                                            <i className="fab fa-google icon" title="Google Classroom" style={{ color: '#25a667' }} /> Google Classroom
                                        </li>
                                        <li>
                                            <i className="fas fa-chalkboard icon" title="Blackboard" style={{ color: '#222' }} /> Blackboard
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-terminal icon" />
                                    <b>Command Line:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-window-maximize icon" title="CMD" style={{ color: '#222' }} /> CMD
                                        </li>
                                        <li>
                                            <i className="fas fa-terminal icon" title="Bash" style={{ color: '#4EAA25' }} /> Bash
                                        </li>
                                        <li>
                                            <i className="fas fa-power-off icon" title="PowerShell" style={{ color: '#012456' }} /> PowerShell
                                        </li>
                                        <li>
                                            <i className="fab fa-android icon" title="ADB" style={{ color: '#3ddc84' }} /> Android Debug Bridge (ADB)
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-network-wired icon" />
                                    <b>Networking & Administration:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-network-wired icon" title="Network Administration" /> Network Administration
                                        </li>
                                        <li>
                                            <i className="fas fa-tools icon" title="System Maintenance" /> System Maintenance
                                        </li>
                                        <li>
                                            <i className="fab fa-linux icon" title="Linux Server Management" style={{ color: '#333' }} /> Linux Server Management
                                        </li>
                                        <li>
                                            <i className="fas fa-shield-alt icon" title="Firewall Configuration" /> Firewall Configuration
                                        </li>
                                        <li>
                                            <i className="fas fa-lock icon" title="VPN Setup" /> VPN Setup
                                        </li>
                                        <li>
                                            <i className="fas fa-user-shield icon" title="Network Security" /> Network Security
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-tools icon" />
                                    <b>Maintenance & IT Support:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-screwdriver-wrench icon" title="Hardware Troubleshooting" /> Hardware Troubleshooting
                                        </li>
                                        <li>
                                            <i className="fas fa-download icon" title="Software Installation" /> Software Installation
                                        </li>
                                        <li>
                                            <i className="fas fa-desktop icon" title="PC Assembly" /> PC Assembly
                                        </li>
                                        <li>
                                            <i className="fas fa-headset icon" title="Technical Support" /> Technical Support
                                        </li>
                                        <li>
                                            <i className="fas fa-sync-alt icon" title="Backup & Recovery" /> Backup & Recovery
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-desktop icon" />
                                    <b>Operating Systems:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fab fa-windows icon" title="Windows" style={{ color: '#0078d6' }} /> Windows
                                        </li>
                                        <li>
                                            <i className="fab fa-linux icon" title="Linux" style={{ color: '#333' }} /> Linux (Ubuntu, CentOS)
                                        </li>
                                        <li>
                                            <i className="fab fa-apple icon" title="macOS" style={{ color: '#333' }} /> macOS
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-cubes icon" />
                                    <b>Software & Tools:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fab fa-git-alt icon" title="Git" style={{ color: '#f34f29' }} /> Git
                                        </li>
                                        <li>
                                            <i className="fas fa-exchange-alt icon" title="Pandoc" style={{ color: '#0277bd' }} /> Pandoc
                                        </li>
                                        <li>
                                            <i className="fas fa-code icon" title="VS Code" style={{ color: '#007acc' }} /> VS Code
                                        </li>
                                        <li>
                                            <i className="fas fa-book icon" title="Jupyter" style={{ color: '#f37626' }} /> Jupyter
                                        </li>
                                        <li>
                                            <i className="fas fa-lightbulb icon" title="IntelliJ IDEA" style={{ color: '#000' }} /> IntelliJ IDEA
                                        </li>
                                        <li>
                                            <i className="fas fa-circle icon" title="Eclipse" style={{ color: '#2c2255' }} /> Eclipse
                                        </li>
                                        <li>
                                            <i className="ai ai-overleaf icon" title="Overleaf" style={{ color: '#47A141' }} /> Overleaf
                                        </li>
                                        <li>
                                            <i className="fas fa-book-medical icon" title="EndNote" style={{ color: '#c60c30' }} /> EndNote
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-cloud icon" />
                                    <b>Cloud & DevOps:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="ai ai-overleaf icon" title="Overleaf" style={{ color: '#47A141' }} /> Overleaf
                                        </li>
                                        <li>
                                            <i className="fas fa-book-medical icon" title="EndNote" style={{ color: '#c60c30' }} /> EndNote
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-cloud icon" />
                                    <b>Cloud & DevOps:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fab fa-aws icon" title="AWS" style={{ color: '#FF9900' }} /> AWS
                                        </li>
                                        <li>
                                            <i className="fab fa-microsoft icon" title="Azure" style={{ color: '#0078d4' }} /> Azure
                                        </li>
                                        <li>
                                            <i className="fab fa-google icon" title="Google Cloud" style={{ color: '#4285F4' }} /> Google Cloud
                                        </li>
                                        <li>
                                            <i className="fas fa-hammer icon" title="Jenkins" style={{ color: '#d33833' }} /> Jenkins
                                        </li>
                                        <li>
                                            <i className="fab fa-github icon" title="GitHub Actions" style={{ color: '#181717' }} /> GitHub Actions
                                        </li>
                                        <li>
                                            <i className="fas fa-sync-alt icon" title="CI/CD" /> CI/CD
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-project-diagram icon" />
                                    <b>Project Management:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fab fa-jira icon" title="Jira" style={{ color: '#0052cc' }} /> Jira
                                        </li>
                                        <li>
                                            <i className="fab fa-trello icon" title="Trello" style={{ color: '#0079bf' }} /> Trello
                                        </li>
                                        <li>
                                            <i className="fas fa-om icon" title="Asana" style={{ color: '#273347' }} /> Asana
                                        </li>
                                        <li>
                                            <i className="fas fa-users icon" title="Agile/Scrum" /> Agile/Scrum
                                        </li>
                                        <li>
                                            <i className="fas fa-columns icon" title="Kanban" /> Kanban
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="fas fa-language icon" />
                                    <b>Other Skills:</b>
                                    <ul style={{ marginLeft: 20 }}>
                                        <li>
                                            <i className="fas fa-pen-nib icon" title="Technical Writing" /> Technical Writing
                                        </li>
                                        <li>
                                            <i className="fas fa-microphone icon" title="Public Speaking" /> Public Speaking
                                        </li>
                                        <li>
                                            <i className="fas fa-users-cog icon" title="Team Leadership" /> Team Leadership
                                        </li>
                                        <li>
                                            <i className="fas fa-lightbulb icon" title="Problem Solving" /> Problem Solving
                                        </li>
                                        <li>
                                            <i className="fas fa-search icon" title="Research" /> Research
                                        </li>
                                        <li>
                                            <i className="fas fa-comments icon" title="Scientific Communication" /> Scientific Communication
                                        </li>
                                        <li>
                                            <i className="fas fa-user-check icon" title="Peer Review" /> Peer Review
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </CVSection>
                        <CVSection id="publications"
                            title={<><i className="fas fa-book icon me-2" />Publications</>}
                            isOpen={openSection === 'publications'}
                            onToggle={handleSectionClick}
                        >
                            {publications.map((pub, i) => (
                                <div key={i}>
                                    <b>{pub.type}</b>
                                    <ul>
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
                                </div>
                            ))}
                        </CVSection>
                        <CVSection id="conferences"
                            title={<><i className="fas fa-users icon me-2" />Conferences</>}
                            isOpen={openSection === 'conferences'}
                            onToggle={handleSectionClick}>
                            <ul>
                                {conferences.map((c, i) => (
                                    <ConferenceItem
                                        key={i}
                                        year={c.year}
                                        title={c.title}
                                        event={c.event}
                                        link={c.link}
                                        participation={c.participation}
                                    />
                                ))}
                            </ul>
                        </CVSection>
                        <CVSection id="languages"
                            title={<><i className="fas fa-language icon me-2" />Languages</>}
                            isOpen={openSection === 'languages'}
                            onToggle={handleSectionClick}
                        >
                            <div className="section-scroll-buffer">
                                <ul>
                                    {languages.map((l, i) => <li key={i}><i className="fas fa-flag icon" />{l}</li>)}
                                </ul>
                            </div>
                        </CVSection>
                        <CVSection id="certificates"
                            title={<><i className="fas fa-certificate icon me-2" />Certificates</>}
                            isOpen={openSection === 'certificates'}
                            onToggle={handleSectionClick}
                        >
                            <div className="section-scroll-buffer">
                                <ul>
                                    {certificates.map((c, i) => <li key={i}><i className="fas fa-award icon" />{c}</li>)}
                                </ul>
                            </div>
                        </CVSection>
                        <CVSection id="other"
                            title={<><i className="fas fa-ellipsis-h icon me-2" />Other</>}
                            isOpen={openSection === 'other'}
                            onToggle={handleSectionClick}
                        >
                            <div className="section-scroll-buffer">
                                <ul>
                                    {other.map((o, i) => <li key={i}><i className="fas fa-star icon" />{o}</li>)}
                                </ul>
                            </div>
                        </CVSection>
                {/* Hide floating bars on mobile */}
                <div className="d-none d-lg-block">
                    <SocialMediaBlock social={social} />
                </div>
                <ScrollToTop />
            </div>
        </div>
        );
}

                export default App;
