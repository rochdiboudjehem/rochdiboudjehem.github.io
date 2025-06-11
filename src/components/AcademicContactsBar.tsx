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

const AcademicContactsBar: React.FC = () => (
  <div style={{
    position: 'fixed',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    background: 'linear-gradient(135deg, #e3f2fd 60%, #bbdefb 100%)',
    padding: '10px 8px',
    borderRadius: '14px',
    boxShadow: '0 4px 18px 0 rgba(25, 118, 210, 0.10)',
    zIndex: 1000,
    border: '2px solid #1976d2',
    minWidth: '38px',
    alignItems: 'center',
  }}>
    {academicAccounts.map(acc => (
      <a
        key={acc.label}
        href={acc.url}
        target="_blank"
        rel="noopener noreferrer"
        title={acc.label}
        style={{
          color: '#1976d2',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          textDecoration: 'none',
          transition: 'color 0.2s',
          padding: '4px 0',
        }}
        onMouseOver={e => (e.currentTarget.style.color = '#1565c0')}
        onMouseOut={e => (e.currentTarget.style.color = '#1976d2')}
      >
        <i className={acc.iconClass + ' icon'} style={{ fontSize: '18px' }} />
      </a>
    ))}
  </div>
);

export default AcademicContactsBar;
