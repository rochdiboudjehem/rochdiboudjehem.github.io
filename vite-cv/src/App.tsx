// import React from "react};
import "./styles/main.css";
import "./styles/icons.css";
import 'academicons/css/academicons.min.css';
import { cvData } from "./cvData";
import PhotoPlaceholder from "./components/PhotoPlaceholder";
import CVSection from "./components/CVSection";
import Navbar from "./components/Navbar";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import React, { useState } from 'react';

function App() {
  const { personal, contacts, academicAccounts, social, education, experience, projects, skills, publications, conferences, languages, certificates, other } = cvData;
  const [openSection, setOpenSection] = useState<string | null>(null);  // Add this line
  
  const handleSectionClick = (sectionId: string) => {    // Add this function
    setOpenSection(sectionId);
  };  

  return (
    <>
      <Navbar />
      <div className="section-menu-container" style={{ background: "#f8f8f8", padding: "8px 0", borderBottom: "1px solid #ddd" }}>
        <nav className="section-menu" style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          <a href="#education"          onClick={() => handleSectionClick('education')} className="section-link"><i className="fas fa-graduation-cap icon" /> Education</a>
          <a href="#experience"         onClick={() => handleSectionClick('experience')} className="section-link"><i className="fas fa-briefcase icon" /> Experience</a>
          <a href="#projects"           onClick={() => handleSectionClick('projects')} className="section-link"><i className="fas fa-diagram-project icon" /> Projects</a>
          <a href="#skills"             onClick={() => handleSectionClick('skills')} className="section-link"><i className="fas fa-code icon" /> Skills</a>
          <a href="#publications"       onClick={() => handleSectionClick('publications')} className="section-link"><i className="fas fa-book icon" /> Publications</a>
          <a href="#conferences"        onClick={() => handleSectionClick('conferences')} className="section-link"><i className="fas fa-chalkboard-teacher icon" /> Conferences</a>
          <a href="#languages"          onClick={() => handleSectionClick('languages')} className="section-link"><i className="fas fa-language icon" /> Languages</a>
          <a href="#certificates"       onClick={() => handleSectionClick('certificates')} className="section-link"><i className="fas fa-certificate icon" /> Certificates</a>
          <a href="#other"              onClick={() => handleSectionClick('other')} className="section-link"><i className="fas fa-ellipsis-h icon" /> Other</a>
        </nav>
      </div>
      <div className="cv-container">

        <div className="header">
          <PhotoPlaceholder />
          <div>
            <h1>{personal.name}</h1>
            <h3>{personal.title}</h3>
            <div>
              {/* <div><b>Born:</b> {personal.born}</div> */}
              {/* <div><b>Status:</b> {personal.status}</div> */}
              <div><b>Position:</b> {personal.position}</div>
              <div><b>Department:</b> {personal.department}</div>
              <div><b>Institution:</b> {personal.institution}</div>
                <div>
                  <i className="fas fa-phone icon" /> {contacts.phone}
                  &nbsp; | &nbsp;&nbsp;<i className="fas fa-map-marker-alt icon" /> {contacts.address}
                </div>
              <hr style={{ margin: '3px 0', border: 0, borderTop: '1px solid #ccc' }} />
              <div className="contact-section" >
                {/* <div>
                  <i className="fas fa-envelope icon" /> <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </div> */}
                {/* Academic Accounts */}
                <div style={{ display: 'flex', flexWrap: 'wrap',}}>
                  {contacts.email && (
                  <a href={contacts.email} target="_blank" rel="noopener noreferrer" title="Email">
                    <i className="fas fa-envelope icon" />
                  </a>
                  )}

                  {academicAccounts.googleScholar && (
                  <a href={academicAccounts.googleScholar} target="_blank" rel="noopener noreferrer" title="Google Scholar">
                    <i className="ai ai-google-scholar icon" />
                  </a>
                  )}
                  {academicAccounts.orcid && (
                  <a href={academicAccounts.orcid} target="_blank" rel="noopener noreferrer" title="ORCID">
                    <i className="ai ai-orcid icon" />
                  </a>
                  )}
                  {academicAccounts.scopus && (
                  <a href={academicAccounts.scopus} target="_blank" rel="noopener noreferrer" title="Scopus">
                    <i className="ai ai-scopus icon" />
                  </a>
                  )}
                  {academicAccounts.webOfScience && (
                  <a href={academicAccounts.webOfScience} target="_blank" rel="noopener noreferrer" title="Web of Science">
                    <i className="ai ai-webofscience icon" />
                  </a>
                  )}
                  {academicAccounts.researchGate && (
                  <a href={academicAccounts.researchGate} target="_blank" rel="noopener noreferrer" title="ResearchGate">
                    <i className="ai ai-researchgate icon" />
                  </a>
                  )}
                  {academicAccounts.semanticScholar && (
                  <a href={academicAccounts.semanticScholar} target="_blank" rel="noopener noreferrer" title="Semantic Scholar">
                    <i className="ai ai-semantic-scholar icon" />
                  </a>
                  )}
                                    {academicAccounts.academia && (
                  <a href={academicAccounts.academia} target="_blank" rel="noopener noreferrer" title="Academia.edu">
                    <i className="ai ai-academia icon" />
                  </a>
                  )}
                </div>
                {/* Social Accounts */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                  {social.linkedin && (
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin icon" />
                  </a>
                  )}
                  {social.github && (
                  <a href={social.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fab fa-github icon" />
                  </a>
                  )}
                  {social.twitter && (
                  <a href={social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                    <i className="fab fa-twitter icon" />
                  </a>
                  )}
                  {social.instagram && (
                  <a href={social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="fab fa-instagram icon" />
                  </a>
                  )}
                  {social.facebook && (
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                    <i className="fab fa-facebook icon" />
                  </a>
                  )}
                  {social.youtube && (
                  <a href={social.youtube} target="_blank" rel="noopener noreferrer" title="YouTube">
                    <i className="fab fa-youtube icon" />
                  </a>
                  )}
                  {social.tiktok && (
                  <a href={social.tiktok} target="_blank" rel="noopener noreferrer" title="TikTok">
                    <i className="fab fa-tiktok icon" />
                  </a>
                  )}
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
                  {social.discord && (
                  <a href={social.discord} target="_blank" rel="noopener noreferrer" title="Discord">
                    <i className="fab fa-discord icon" />
                  </a>
                  )}
                  {social.reddit && (
                  <a href={social.reddit} target="_blank" rel="noopener noreferrer" title="Reddit">
                    <i className="fab fa-reddit icon" />
                  </a>
                  )}
                </div>




              </div>
                            {/* <div style={{ marginTop: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src="../images/logo-univ-guelma Full Text Dark.svg"
                alt="University of Guelma Logo"
                style={{ height: 80, display: 'block' }}
                />  
        </div> */}
            </div>
          </div>
        </div>
        <CVSection id="education" 
        title={<><i className="fas fa-graduation-cap icon" />Education</>}
        isOpen={openSection === 'education'}
        onToggle={handleSectionClick}>
        
          <ul>
            {education.map((e, i) => (
              <li key={i}>
                <i className="fas fa-certificate icon" />
                <b>{e.degree}</b> ({e.year})<br />
                {e.institution}
                {e.thesis && (
                  <div style={{ marginTop: 2 }}>
                    <i className="fas fa-scroll icon" title="Thesis/Dissertation" style={{ color: '#8e44ad' }} />
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: '#1976d2', textDecoration: 'underline', fontStyle: 'italic' }}>
                        {e.thesis}
                      </a>
                    ) : (
                      <span style={{ fontStyle: 'italic', marginLeft: 8 }}>{e.thesis}</span>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </CVSection>
        <CVSection id="experience" 
            title={<><i className="fas fa-briefcase icon" />Experience</>}
            isOpen={openSection === 'experience'}
            onToggle={handleSectionClick}>
          <ul>
            {experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </ul>
        </CVSection>
        <CVSection id="projects" 
            title={<><i className="fas fa-diagram-project icon" />Projects and Works</>}
            isOpen={openSection === 'projects'}
            onToggle={handleSectionClick}>
          <ul>
            {projects.map((p, i) => (
              <ProjectItem key={i} project={p} />
            ))}
          </ul>
        </CVSection>
        <CVSection id="skills" 
            title={<><i className="fas fa-code icon" />Skills</>}
            isOpen={openSection === 'skills'}
            onToggle={handleSectionClick}>
          <ul>
            <li><i className="fas fa-terminal icon" /><b>Programming:</b> {skills.programming.join(", ")}</li>
            <li><i className="fas fa-globe icon" /><b>Web:</b> {skills.web.join(", ")}</li>
            <li><i className="fas fa-desktop icon" /><b>Operating Systems:</b> {skills.os.join(", ")}</li>
            <li><i className="fas fa-cubes icon" /><b>Software:</b> {skills.software.join(", ")}</li>
          </ul>
        </CVSection>
        <CVSection id="publications" 
            title={<><i className="fas fa-book icon" />Publications</>} 
            isOpen={openSection === 'publications'}
            onToggle={handleSectionClick} >
          {publications.map((pub, i) => (
            <div key={i}>
              <b>{pub.type}</b>
              <ul>
                {pub.items.map((item, j) => (
                  <li key={j}>
                    <i className="fas fa-file-alt icon" />
                    {item.authors} ({item.year}).{' '}
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontStyle: 'italic' }}>{item.title}</a>
                    ) : (
                      <span style={{ fontStyle: 'italic' }}>{item.title}</span>
                    )}
                    . <span style={{ fontStyle: 'italic' }}>{item.journal}</span>
                    {item.volume && (
                      <span>, <b>{item.volume}</b></span>
                    )}
                    {item.issue && (
                      <span>({item.issue})</span>
                    )}
                    {item.pages && (
                      <span>, {item.pages}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CVSection>
        <CVSection id="conferences" 
            title={<><i className="fas fa-chalkboard-teacher icon" />Conferences</>} 
            isOpen={openSection === 'conferences'}
            onToggle={handleSectionClick}>
          <ul>
            {conferences.map((c, i) => (
              <li key={i}>
                <i className="fas fa-microphone icon" />
                {c.year}. {c.title}. 
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontStyle: 'italic' }}>{c.event}</a>
                ) : (
                  <span style={{ fontStyle: 'italic' }}>{c.event}</span>
                )}
              </li>
            ))}
          </ul>
        </CVSection>
        <CVSection id="languages" 
            title={<><i className="fas fa-language icon" />Languages</>} 
            isOpen={openSection === 'languages'}
            onToggle={handleSectionClick}>
          <ul>
            {languages.map((l, i) => <li key={i}><i className="fas fa-flag icon" />{l}</li>)}
          </ul>
        </CVSection>
        <CVSection id="certificates" 
            title={<><i className="fas fa-certificate icon" />Certificates</>} 
            isOpen={openSection === 'certificates'}
            onToggle={handleSectionClick}>
          <ul>
            {certificates.map((c, i) => <li key={i}><i className="fas fa-award icon" />{c}</li>)}
          </ul>
        </CVSection>
        <CVSection id="other" 
            title={<><i className="fas fa-ellipsis-h icon" />Other</>} 
            isOpen={openSection === 'other'}
            onToggle={handleSectionClick}>
          <ul>
            {other.map((o, i) => <li key={i}><i className="fas fa-star icon" />{o}</li>)}
          </ul>
        </CVSection>
      </div>
    </>
  );
}

export default App;
