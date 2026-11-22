import { cvData } from '../cvData';

const links = cvData.academicAccounts;

// URLs come from cvData.academicAccounts (single source of truth).
const academicAccounts = [
  { label: 'Web of Science', url: links.webOfScience, iconClass: 'ai ai-clarivate' },
  { label: 'Scopus', url: links.scopus, iconClass: 'ai ai-scopus' },
  { label: 'Google Scholar', url: links.googleScholar, iconClass: 'ai ai-google-scholar' },
  { label: 'ORCID', url: links.orcid, iconClass: 'ai ai-orcid' },
  { label: 'ResearchGate', url: links.researchGate, iconClass: 'ai ai-researchgate' },
  { label: 'Semantic Scholar', url: links.semanticScholar, iconClass: 'ai ai-semantic-scholar' },
  { label: 'Academia.edu', url: links.academia, iconClass: 'ai ai-academia' },
  { label: 'DBLP', url: links.dblp, iconClass: 'ai ai-dblp' },
].filter(acc => acc.url);

/** Row of academic profile icons (monochrome, accent on hover). */
const AcademicContactsBar: React.FC = () => (
  <ul className="icon-links" aria-label="Academic profiles">
    {academicAccounts.map(acc => (
      <li key={acc.label}>
        <a href={acc.url} target="_blank" rel="noopener noreferrer" title={acc.label} aria-label={acc.label}>
          <i className={acc.iconClass} aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default AcademicContactsBar;
