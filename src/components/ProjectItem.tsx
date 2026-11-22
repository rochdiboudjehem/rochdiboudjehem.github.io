import MoreDetails from "./MoreDetails";

interface ProjectItemProps {
  project: {
    period: string;
    elapsedTime?: string;
    title: string;
    details?: string[];
  };
}

function isUrl(text: string) {
  return /^https?:\/\//i.test(text);
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
  <li>
    <div className="tl-date">{project.period}</div>
    <div>
      <h3 className="tl-title">{project.title}</h3>
      {project.details && project.details.length > 0 && (
        <MoreDetails label="Details">
          <ul className="bullets">
            {project.details.map((d, i) => (
              <li key={i}>
                {isUrl(d) ? (
                  <a href={d} target="_blank" rel="noopener noreferrer">
                    {d}
                  </a>
                ) : (
                  d
                )}
              </li>
            ))}
          </ul>
        </MoreDetails>
      )}
    </div>
  </li>
);

export default ProjectItem;
