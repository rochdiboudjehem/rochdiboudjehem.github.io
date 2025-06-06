import React, { useState } from 'react';

interface ConferenceItemProps {
  year: string;
  title: string;
  event: string;
  link?: string;
  participation?: string[];
}

const ConferenceItem: React.FC<ConferenceItemProps> = ({ year, title, event, link, participation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
        <i className="fas fa-chalkboard-teacher icon" />
        <div style={{ flex: 1 }}>
          {year}. {title}.{' '}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontStyle: 'italic' }}>
              {event}
            </a>
          ) : (
            <span style={{ fontStyle: 'italic' }}>{event}</span>
          )}
          
          {participation && participation.length > 0 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ 
                background: 'none',
                border: 'none',
                padding: '4px 8px',
                cursor: 'pointer',
                color: '#666',
                marginLeft: '8px'
              }}
            >
              <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`} />
            </button>
          )}
        </div>
      </div>
      
      {isExpanded && participation && (
        <ul style={{ 
          marginTop: '8px',
          marginBottom: '8px',
          marginLeft: '32px',
          paddingLeft: '16px',
          borderLeft: '2px solid #e0e0e0',
          listStyle: 'none'
        }}>
          {participation.map((item, index) => (
            <li key={index} style={{ marginBottom: '4px', color: '#666' }}>
              <i className="fas fa-caret-right" style={{ marginRight: '8px' }} />
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ConferenceItem;