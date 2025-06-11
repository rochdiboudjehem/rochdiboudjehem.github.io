const academicAccounts = [
  {
    label: "Academia.edu",
    url: "https://guelma.academia.edu/RochdiBoudjehem",
  },
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=CXoCLWIAAAAJ&hl=en",
  },
  {
    label: "ORCID",
    url: "https://orcid.org/0000-0002-9998-4833",
  },
  {
    label: "Scopus",
    url: "http://scopus.com/authid/detail.uri?authorId=57468903100",
  },
  {
    label: "Web of Science",
    url: "https://www.webofscience.com/wos/author/record/ABC-4157-2021",
  },
  {
    label: "ResearchGate",
    url: "https://www.researchgate.net/profile/Rochdi-Boudjehem",
  },
];

const ContactSidebar = () => (
  <div style={{ width: '100%', padding: '16px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '32px' }}>
    <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#2a3a4a' }}>Academic Accounts</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {academicAccounts.map((acc) => (
        <a
          key={acc.label}
          href={acc.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#374151',
            fontWeight: '500',
            textDecoration: 'none'
          }}
        >
          <i className="ai ai-academia" style={{ marginRight: '8px', color: '#1976d2' }} />
          <span>{acc.label}</span>
        </a>
      ))}
    </div>
    <hr style={{ margin: '16px 0', border: 0, borderTop: '1px solid #ccc' }} />
    {/* Social and Other sections can be added here */}
  </div>
);

export default ContactSidebar;