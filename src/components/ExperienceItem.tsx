import React, { useState } from "react";

interface ExperienceItemProps {
  exp: {
    period: string;
    title: string;
    place?: string;
    placeDetails?: string;
    details?: string[];
    elapsedTime?: string; // Added elapsedTime here
  };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  const [open, setOpen] = useState(false);
  const hasDetails = exp.details && exp.details.length > 0;

  return (
    <li>
      {/* Desktop View: all left-aligned in a single row */}
      <div
        className="section-header d-none d-md-flex"
        style={{ cursor: hasDetails ? "pointer" : "default", display: "flex", alignItems: "center", gap: 8 }}
        onClick={hasDetails ? () => setOpen((v) => !v) : undefined}
      >
        {hasDetails && (
          <span style={{ marginRight: 8 }}>{open ? "▼" : "►"}</span>
        )}
        <i className="fas fa-user-tie icon" />
        <b>{exp.period}{exp.elapsedTime ? ` (${exp.elapsedTime})` : ''}</b>
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
      {/* Mobile View: two-row layout as before */}
      <div
        className="section-header flex-column flex-md-row align-items-start align-items-md-center d-flex d-md-none"
        style={{ cursor: hasDetails ? "pointer" : "default", gap: 8 }}
        onClick={hasDetails ? () => setOpen((v) => !v) : undefined}
      >
        {/* First row: chevron + period (left), elapsedTime (right) */}
        <div className="d-flex flex-row flex-wrap w-100 align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <i className="fas fa-chevron-right icon" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s ease-in-out" }} />
            <span><i className="fas fa-user-tie icon" />{exp.period}</span>
          </div>
          {exp.elapsedTime && <span className="text-muted text-end" style={{ fontWeight: 400, fontSize: '0.97em' }}>{exp.elapsedTime}</span>}
        </div>
        {/* Second row: title (left), place (right) */}
        <div className="d-flex flex-row flex-wrap w-100 align-items-center justify-content-between mt-1">
          <span>{exp.title}</span>
          {exp.place && (
            <span className="d-flex align-items-center" style={{ fontStyle: 'italic', marginLeft: 4, marginRight: 0, position: 'relative', cursor: exp.placeDetails ? 'pointer' : 'default' }}>
              <span style={{ margin: '0 4px' }}>at</span>
              <span className="place-with-hover">
                {exp.place}
                {exp.placeDetails && (
                  <span className="place-details-tooltip">{exp.placeDetails}</span>
                )}
              </span>
            </span>
          )}
        </div>
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
