import type { ReactNode } from "react";
import { useState } from "react";

interface CVSectionProps {
  id?: string;
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: (id: string) => void;
}

const CVSection: React.FC<CVSectionProps> = ({ 
  id, 
  title, 
  children, 
  defaultOpen = false,
  isOpen,
  onToggle 
}) => {
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const isExpanded = isOpen ?? localOpen;

  const handleClick = () => {
    if (onToggle && id) {
      onToggle(id);
    } else {
      setLocalOpen(v => !v);
    }
  };

  return (
    <div id={id} className="cv-section">
      <div className="section-header" onClick={handleClick}>
        <span style={{ marginRight: 8 }}>{isExpanded ? "▼" : "►"}</span>
        {title}
      </div>
      {isExpanded && <div className="section-content">{children}</div>}
    </div>
  );
};

export default CVSection;