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
    discord?: string;
    reddit?: string;
  };
  mode?: 'row';
}

const SocialMediaBlock: React.FC<SocialMediaBlockProps> = ({ social, mode }) => {
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

  const socialColors: Record<string, string> = {
    telegram: '#229ED9',
    linkedin: '#0077b5',
    facebook: '#1877f3',
    twitter: '#1da1f2',
    youtube: '#ff0000',
    instagram: '#e4405f',
    tiktok: '#010101',
    github: '#333',
    whatsapp: '#25d366',
  discord: '#5662f6',
    reddit: '#ff4500',
  };

  return (
    <div
      className={
        mode === 'row'
                  ? 'd-flex flex-row gap-2 pl-5 rounded align-items-center justify-content-center w-100'
          : 'position-fixed end-0 top-50 translate-middle-y d-flex flex-column gap-2 bg-light p-2 rounded shadow border border-primary min-vw-38 align-items-center'
      }
      style={mode === 'row' ? { zIndex: 1 } : { zIndex: 1 }}
    >
      {Object.entries(social)
        .filter(([_, value]) => value)
        .map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={platform.charAt(0).toUpperCase() + platform.slice(1)}
            className="fs-5 d-flex align-items-center text-decoration-none py-1"
            style={{ transition: 'color 0.2s' }}
          >
            <i
              className={`fab ${socialIcons[platform as keyof typeof socialIcons]}`}
              style={{ color: socialColors[platform] || '#1976d2' }}
            />
          </a>
        ))}
    </div>
  );
};

export default SocialMediaBlock;