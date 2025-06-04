import React, { useState, type ReactNode } from "react";

interface CVSectionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

const CVSection: React.FC<CVSectionProps> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="cv-section">
      <div className="section-header" onClick={() => setOpen((v) => !v)}>
        <span style={{ marginRight: 8 }}>{open ? "▼" : "►"}</span>
        {title}
      </div>
      {open && <div className="section-content">{children}</div>}
    </div>
  );
};

export default CVSection;
