import type { ReactNode } from "react";

interface CVSectionProps {
  id: string;
  icon: string;
  title: string;
  children: ReactNode;
}

/**
 * Collapsible CV section built on native <details>/<summary>.
 * The content is always present in the HTML (indexable), only visually collapsed.
 */
const CVSection: React.FC<CVSectionProps> = ({ id, icon, title, children }) => (
  <details id={id} className="cv-section">
    <summary>
      <i className={`fas ${icon} cv-section__icon`} aria-hidden="true" />
      <h2 className="cv-section__title">{title}</h2>
      <i className="fas fa-chevron-right chevron" aria-hidden="true" />
    </summary>
    <div className="cv-section__body">{children}</div>
  </details>
);

export default CVSection;
