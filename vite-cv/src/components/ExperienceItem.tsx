import React, { useState } from "react";

interface ExperienceItemProps {
  exp: {
    period: string;
    title: string;
    place?: string;
    placeDetails?: string;
    details?: string[];
  };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  const [open, setOpen] = useState(false);
  const hasDetails = exp.details && exp.details.length > 0;

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
        <i className="fas fa-user-tie icon" />
        <b>{exp.period}</b>
        <span>{exp.title}</span>
        {exp.place && (
          <span style={{ marginLeft: 4, marginRight: 4 }}>at</span>
        )}
        {exp.place && (
          <span className="place-with-hover" style={{ fontStyle: 'italic', marginLeft: 0, position: 'relative', cursor: exp.placeDetails ? 'pointer' : 'default' }}>
            {exp.place}
            {exp.placeDetails && (
              <span className="place-details-tooltip">{exp.placeDetails}</span>
            )}
          </span>
        )}
      </div>
      {open && hasDetails && (
        <ul style={{ fontStyle: 'italic', fontSize: '0.97em', marginLeft: 32, marginTop: 4 }}>
          {exp.details!.map((d, i) => (
            <li key={i}><i className="fas fa-angle-right icon" />{d}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ExperienceItem;
