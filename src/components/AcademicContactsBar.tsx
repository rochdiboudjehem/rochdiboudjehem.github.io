import React from 'react';
import { cvData } from '../cvData';

const links = cvData.academicAccounts;

// URLs come from cvData.academicAccounts (single source of truth).
const academicAccounts = [
  { label: 'Web of Science', url: links.webOfScience, iconClass: 'ai ai-clarivate' },
  { label: 'Scopus', url: links.scopus, iconClass: 'ai ai-scopus' },
  { label: 'Google Scholar', url: links.googleScholar, iconClass: 'ai ai-google-scholar-square' },
  { label: 'ORCID', url: links.orcid, iconClass: 'ai ai-orcid' },
  { label: 'ResearchGate', url: links.researchGate, iconClass: 'ai ai-researchgate-square' },
  { label: 'Semantic Scholar', url: links.semanticScholar, iconClass: 'ai ai-semantic-scholar' },
  { label: 'Academia.edu', url: links.academia, iconClass: 'ai ai-academia' },
  { label: 'DBLP', url: links.dblp, iconClass: 'ai ai-dblp' },
].filter(acc => acc.url);

const academicColors: Record<string, string> = {
  'Web of Science': '#e6b800', // Clarivate yellow
  'Scopus': '#ff8300',         // Scopus orange
  'Google Scholar': '#4285f4', // Google blue
  'ORCID': '#3ac03a',          // ORCID green
  'ResearchGate': '#00d0af',   // ResearchGate teal
  'Semantic Scholar': '#f6c700', // Semantic Scholar yellow
  'Academia.edu': '#414141',   // Academia dark gray
  'DBLP': '#0077cc',           // DBLP blue
};

const AcademicContactsBar: React.FC<{ mode?: 'row' }> = ({ mode }) => (
  <div
    className={
      mode === 'row'
        ? 'd-flex flex-row gap-3 ml-3 pl-5 p-0 align-items-center justify-content-center w-100'
        : 'position-fixed start-10 top-50 translate-middle-y d-flex flex-column gap-2 bg-light mt-2 p-2 rounded shadow border border-primary min-vw-38 align-items-top'
    }
    style={mode === 'row' ? { zIndex: 1 } : { zIndex: 1 }}
  >
    {academicAccounts.map(acc => (
      <a
        key={acc.label}
        href={acc.url}
        target="_blank"
        rel="noopener noreferrer"
        title={acc.label}
        className="fs-5 d-flex align-items-center gap-1 text-decoration-none py-1"
        style={{ transition: 'color 0.2s' }}
      >
        <i className={acc.iconClass + ' icon-only'} style={{ color: academicColors[acc.label] || '#1976d2' }} />
      </a>
    ))}
  </div>
);

export default AcademicContactsBar;
