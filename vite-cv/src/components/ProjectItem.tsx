import React, { useState } from "react";

interface ProjectItemProps {
  project: {
    period: string;
    title: string;
    details?: string[];
  };
}

function isUrl(text: string) {
  return /^https?:\/\//i.test(text);
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const hasDetails = project.details && project.details.length > 0;

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
          {project.details!.map((d, i) => (
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
};

export default ProjectItem;
