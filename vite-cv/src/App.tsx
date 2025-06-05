// import React from "react";
import "./styles/main.css";
import "./styles/icons.css";
import { cvData } from "./cvData";
import PhotoPlaceholder from "./components/PhotoPlaceholder";
import CVSection from "./components/CVSection";
import Navbar from "./components/Navbar";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";

function App() {
  const { personal, education, experience, projects, skills, publications, conferences, languages, certificates, other } = cvData;

  return (
    <>
      <Navbar />
      <div className="cv-container">
        <div className="header">
          <PhotoPlaceholder />
          <div>
            <h1>{personal.name}</h1>
            <h3>{personal.title}</h3>
            <div>
              <div><b>Born:</b> {personal.born}</div>
              <div><b>Status:</b> {personal.status}</div>
              <div><b>Position:</b> {personal.position}</div>
              <div><b>Department:</b> {personal.department}</div>
              <div><b>Institution:</b> {personal.institution}</div>
            </div>
          </div>
        </div>
        <CVSection title={<><i className="fas fa-graduation-cap icon" />Education</>} defaultOpen>
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
        <CVSection title={<><i className="fas fa-briefcase icon" />Professional Experience</>}>
          <ul>
            {experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </ul>
        </CVSection>
        <CVSection title={<><i className="fas fa-diagram-project icon" />Projects and Works</>}>
          <ul>
            {projects.map((p, i) => (
              <ProjectItem key={i} project={p} />
            ))}
          </ul>
        </CVSection>
        <CVSection title={<><i className="fas fa-code icon" />Skills</>}>
          <ul>
            <li><i className="fas fa-terminal icon" /><b>Programming:</b> {skills.programming.join(", ")}</li>
            <li><i className="fas fa-globe icon" /><b>Web:</b> {skills.web.join(", ")}</li>
            <li><i className="fas fa-desktop icon" /><b>Operating Systems:</b> {skills.os.join(", ")}</li>
            <li><i className="fas fa-cubes icon" /><b>Software:</b> {skills.software.join(", ")}</li>
          </ul>
        </CVSection>
        <CVSection title={<><i className="fas fa-book icon" />Publications</>}>
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
        <CVSection title={<><i className="fas fa-chalkboard-teacher icon" />Conferences</>}>
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
        <CVSection title={<><i className="fas fa-language icon" />Languages</>}>
          <ul>
            {languages.map((l, i) => <li key={i}><i className="fas fa-flag icon" />{l}</li>)}
          </ul>
        </CVSection>
        <CVSection title={<><i className="fas fa-certificate icon" />Certificates</>}>
          <ul>
            {certificates.map((c, i) => <li key={i}><i className="fas fa-award icon" />{c}</li>)}
          </ul>
        </CVSection>
        <CVSection title={<><i className="fas fa-ellipsis-h icon" />Other</>}>
          <ul>
            {other.map((o, i) => <li key={i}><i className="fas fa-star icon" />{o}</li>)}
          </ul>
        </CVSection>
      </div>
    </>
  );
}

export default App;
