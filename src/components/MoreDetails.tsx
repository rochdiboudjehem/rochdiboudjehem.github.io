import type { ReactNode } from "react";

interface MoreDetailsProps {
  label: string;
  className?: string;
  children: ReactNode;
}

/** Small nested toggle (native <details>), e.g. "Details" or "Abstract". Content stays in the HTML. */
const MoreDetails: React.FC<MoreDetailsProps> = ({ label, className, children }) => (
  <details className={`more${className ? ` ${className}` : ""}`}>
    <summary>
      <i className="fas fa-chevron-right chevron" aria-hidden="true" />
      {label}
    </summary>
    <div className="more__body">{children}</div>
  </details>
);

export default MoreDetails;
