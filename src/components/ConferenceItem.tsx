interface ConferenceItemProps {
  year: string;
  authors: string;
  title: string;
  event: string;
  place?: string;
  link?: string;
  participation?: string[];
}

const ConferenceItem: React.FC<ConferenceItemProps> = ({ year, authors, title, event, place, link, participation }) => {
  const eventNode = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {event}
    </a>
  ) : (
    event
  );

  return (
    <li>
      <div className="tl-date">{year}</div>
      <div>
        {title ? (
          <>
            <h3 className="tl-title">{title}</h3>
            {authors && <p className="tl-meta">{authors}</p>}
            <p className="tl-meta">
              <em>{eventNode}</em>
              {place && <> · {place}</>}
            </p>
          </>
        ) : (
          <>
            <h3 className="tl-title">{eventNode}</h3>
            {authors && <p className="tl-meta">{authors}</p>}
            {place && <p className="tl-meta">{place}</p>}
          </>
        )}
        {participation && participation.length > 0 && (
          <ul className="chips chips--roles" aria-label="Participation">
            {participation.map((role, i) => (
              <li key={i} className="chip">
                {role}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default ConferenceItem;
