import MoreDetails from "./MoreDetails";

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

const OWN_NAME = "Boudjehem, R.";

/** Renders the author list with the CV owner's name in bold. */
const Authors: React.FC<{ authors: string }> = ({ authors }) => {
  const parts = authors.split(OWN_NAME);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <strong>{OWN_NAME}</strong>}
          {part}
        </span>
      ))}
    </>
  );
};

const PublicationItem: React.FC<PublicationItemProps> = ({
  authors,
  year,
  title,
  journal,
  volume,
  issue,
  pages,
  link,
  abstract,
}) => (
  <li>
    <div className="tl-date">{year}</div>
    <div>
      <h3 className="tl-title">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="tl-meta pub-authors">
        <Authors authors={authors} />
      </p>
      <p className="tl-meta">
        <em>{journal}</em>
        {volume && (
          <>
            , <b>{volume}</b>
          </>
        )}
        {issue && <>({issue})</>}
        {pages && <>, {pages}</>}
      </p>
      {abstract && (
        <MoreDetails label="Abstract" className="abstract-toggle">
          <p className="abstract">{abstract}</p>
        </MoreDetails>
      )}
    </div>
  </li>
);

export default PublicationItem;
