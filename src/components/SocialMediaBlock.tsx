import React from 'react';

interface SocialMediaBlockProps {
  social: {
    telegram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    whatsapp?: string;
    github?: string;

  }
}

const SocialMediaBlock: React.FC<SocialMediaBlockProps> = ({ social }) => {
  const socialIcons = {
      telegram: 'fa-telegram',
      linkedin: 'fa-linkedin',
      facebook: 'fa-facebook',
      twitter: 'fa-twitter',
      youtube: 'fa-youtube',
      instagram: 'fa-instagram',
      tiktok: 'fa-tiktok',
      github: 'fa-github',
      whatsapp: 'fa-whatsapp',
      discord: 'fa-discord',
      reddit: 'fa-reddit',

  };

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      background: 'linear-gradient(135deg, #e3f0fd 60%, #90caf9 100%)', // blue gradient
      padding: '10px 8px',
      borderRadius: '14px',
      boxShadow: '0 4px 18px 0 rgba(25, 118, 210, 0.10)',
      zIndex: 1000,
      border: '2px solid #1976d2',
      minWidth: '38px',
      alignItems: 'center',
    }}>
      {Object.entries(social)
        .filter(([_, value]) => value)
        .map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={platform.charAt(0).toUpperCase() + platform.slice(1)}
            style={{
              color: '#1976d2', // blue icon
              fontSize: '18px',
              transition: 'color 0.2s',
              padding: '4px 0',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#0d47a1'} // darker blue on hover
            onMouseOut={e => e.currentTarget.style.color = '#1976d2'}
          >
            <i className={`fab ${socialIcons[platform as keyof typeof socialIcons]}`} style={{ fontSize: '18px' }} />
          </a>
        ))}
    </div>
  );
};

export default SocialMediaBlock;