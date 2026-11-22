import MoreDetails from "./MoreDetails";

interface ExperienceItemProps {
  exp: {
    period: string;
    title: string;
    place?: string;
    placeDetails?: string;
    details?: string[];
    elapsedTime?: string;
  };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => (
  <li>
    <div className="tl-date">
      {exp.period}
      {exp.elapsedTime && <small>{exp.elapsedTime}</small>}
    </div>
    <div>
      <h3 className="tl-title">{exp.title}</h3>
      {exp.place && (
        <p className="tl-meta">
          {exp.place}
          {exp.placeDetails && <> · {exp.placeDetails}</>}
        </p>
      )}
      {exp.details && exp.details.length > 0 && (
        <MoreDetails label="Details">
          <ul className="bullets">
            {exp.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </MoreDetails>
      )}
    </div>
  </li>
);

export default ExperienceItem;
