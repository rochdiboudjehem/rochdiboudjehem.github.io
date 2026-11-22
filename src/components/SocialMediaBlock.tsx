interface SocialMediaBlockProps {
  social: {
    telegram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    github?: string;
    discord?: string;
    reddit?: string;
  };
}

const socialIcons: Record<string, string> = {
  telegram: 'fa-telegram',
  linkedin: 'fa-linkedin',
  facebook: 'fa-facebook',
  twitter: 'fa-twitter',
  youtube: 'fa-youtube',
  instagram: 'fa-instagram',
  tiktok: 'fa-tiktok',
  github: 'fa-github',
  discord: 'fa-discord',
  reddit: 'fa-reddit',
};

/** Row of social network icons (monochrome, accent on hover). */
const SocialMediaBlock: React.FC<SocialMediaBlockProps> = ({ social }) => (
  <ul className="icon-links icon-links--small" aria-label="Social media">
    {Object.entries(social)
      .filter(([, url]) => url)
      .map(([platform, url]) => {
        const label = platform.charAt(0).toUpperCase() + platform.slice(1);
        return (
          <li key={platform}>
            <a href={url} target="_blank" rel="noopener noreferrer" title={label} aria-label={label}>
              <i className={`fab ${socialIcons[platform]}`} aria-hidden="true" />
            </a>
          </li>
        );
      })}
  </ul>
);

export default SocialMediaBlock;
