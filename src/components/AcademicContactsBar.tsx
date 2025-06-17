import React from 'react';

const academicAccounts = [
  {
    label: 'Web of Science',
    url: 'https://www.webofscience.com/wos/author/record/ABC-4157-2021',
    iconClass: 'ai ai-clarivate',
  },
  {
    label: 'Scopus',
    url: 'http://scopus.com/authid/detail.uri?authorId=57468903100',
    iconClass: 'ai ai-scopus',
  },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=CXoCLWIAAAAJ&hl=en',
    iconClass: 'ai ai-google-scholar-square',
  },
  {
    label: 'ORCID',
    url: 'https://orcid.org/0000-0002-9998-4833',
    iconClass: 'ai ai-orcid',
  },
  {
    label: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Rochdi-Boudjehem',
    iconClass: 'ai ai-researchgate-square',
  },
  {
    label: 'Semantic Scholar',
    url: 'https://www.semanticscholar.org/author/Rochdi-Boudjehem/2110328372',
    iconClass: 'ai ai-semantic-scholar',
  },
  {
    label: 'Academia.edu',
    url: 'https://guelma.academia.edu/RochdiBoudjehem',
    iconClass: 'ai ai-academia',
  },
  {
    label: 'DBLP',
    url: 'https://dblp.org/pid/123/4567.html', // Replace with actual DBLP link if available
    iconClass: 'ai ai-dblp',
  },
];

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
