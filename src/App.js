import React from "react";
import "./styles/main.css";
import { cvData } from "./cvData";
import PhotoPlaceholder from "./components/PhotoPlaceholder";
import CVSection from "./components/CVSection";
import Navbar from "./components/Navbar";

function App() {
  const { personal, education, experience, projects, skills, publications, conferences, languages, certificates, other } = cvData;

  function isUrl(text) {
    return /^https?:\/\//i.test(text);
  }

  function ProjectItem({ project }) {
    const [open, setOpen] = React.useState(false);
    const hasDetails = Array.isArray(project.details) && project.details.length > 0;

    return (
      <li>
        <div
          className="section-header"
          style={{ cursor: hasDetails ? "pointer" : "default", display: "flex", alignItems: "center", gap: 8 }}
          onClick={hasDetails ? () => setOpen((v) => !v) : undefined}
        >
          {hasDetails && (
            <span style={{ marginRight: 8 }}>{open ? "▼" : "►"}</span>
          )}
          <i className="fas fa-lightbulb icon" />
          <b>{project.period}</b>
          <span>{project.title}</span>
        </div>
        {open && hasDetails && (
          <ul style={{ fontStyle: 'italic', fontSize: '0.97em', marginLeft: 32, marginTop: 4 }}>
            {project.details.map((d, i) => (
              <li key={i}>
                <i className="fas fa-angle-right icon" />
                {isUrl(d) ? (
                  <a href={d} target="_blank" rel="noopener noreferrer">{d}</a>
                ) : (
                  d
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

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
            <CVSection title="Education" defaultOpen>
                <ul>
                    {education.map((e, i) => (
                        <li key={i}><b>{e.degree}</b> ({e.year})<br />{e.institution}</li>
                    ))}
                </ul>
            </CVSection>
            <CVSection title="Professional Experience">
                <ul>
                    {experience.map((exp, i) => (
                        <li key={i}>
                            <b>{exp.period}:</b> {exp.title}<br />
                            <i>{exp.place}</i>
                            {exp.details && (
                                <ul>
                                    {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </CVSection>
            <CVSection title="Projects and Works">
              <ul>
                {projects.map((p, i) => (
                  <ProjectItem key={i} project={p} />
                ))}
              </ul>
            </CVSection>
            <CVSection title="Skills">
                <div><b>Programming:</b> {skills.programming.join(", ")}</div>
                <div><b>Web:</b> {skills.web.join(", ")}</div>
                <div><b>Operating Systems:</b> {skills.os.join(", ")}</div>
                <div><b>Software:</b> {skills.software.join(", ")}</div>
            </CVSection>
            <CVSection title="Publications">
                {publications.map((pub, i) => (
                    <div key={i}>
                        <b>{pub.type}</b>
                        <ul>
                            {pub.items.map((item, j) => (
                                <li key={j}>
                                    {item.authors} ({item.year}). <i>{item.title}</i>. <b>{item.journal}</b>. <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </CVSection>
            <CVSection title="Conferences">
                <ul>
                    {conferences.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
            </CVSection>
            <CVSection title="Languages">
                <ul>
                    {languages.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
            </CVSection>
            <CVSection title="Certificates">
                <ul>
                    {certificates.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
            </CVSection>
            <CVSection title="Other">
                <ul>
                    {other.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
            </CVSection>
        </div>
    </>
);
}

export default App;
