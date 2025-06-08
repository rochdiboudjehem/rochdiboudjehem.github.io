import React, { useState } from 'react';

interface PublicationItemProps {
  authors: string;
  year: string;
  title: string;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  link?: string;
  abstract?: string;
}

const PublicationItem: React.FC<PublicationItemProps> = ({
  authors,
  year,
  title,
  journal,
  volume,
  issue,
  pages,
  link,
  abstract
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
        <i className="fas fa-file-alt icon" />
        <div style={{ flex: 1 }}>
          {authors} ({year}).{' '}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontStyle: 'italic' }}>
              {title}
            </a>
          ) : (
            <span style={{ fontStyle: 'italic' }}>{title}</span>
          )}
          . <span style={{ fontStyle: 'italic' }}>{journal}</span>
          {volume && <span>, <b>{volume}</b></span>}
          {issue && <span>({issue})</span>}
          {pages && <span>, {pages}</span>}
          
          {abstract && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ 
                background: 'none',
                border: 'none',
                padding: '4px 8px',
                cursor: 'pointer',
                color: '#666',
                marginLeft: '8px',
                transition: 'transform 0.2s'
              }}
              title={isExpanded ? "Hide abstract" : "Show abstract"}
            >
              <i style={{ color: 'red' }} className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`} />
            </button>
          )}
        </div>
      </div>
      
      {isExpanded && abstract && (
        <div style={{ 
          marginTop: '8px',
          marginBottom: '8px',
          marginLeft: '32px',
          paddingLeft: '16px',
          borderLeft: '2px solid #e0e0e0',
          color: '#666',
          fontSize: '0.95em',
          lineHeight: '1.5'
        }}>
          <strong style={{ color: '#444', display: 'block', marginBottom: '4px' }}>Abstract:</strong>
          {abstract}
        </div>
      )}
    </li>
  );
};

export default PublicationItem;