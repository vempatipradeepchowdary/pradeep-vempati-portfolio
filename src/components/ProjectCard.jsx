import { ArrowUpRight } from 'lucide-react';
import ProjectCover from './ProjectCover.jsx';

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="project-card">
      <button
        type="button"
        className="project-card__hit"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
        aria-label={`Open project details: ${project.title}`}
      />
      <div className="project-card__media">
        <ProjectCover project={project} priority={index === 0} />
      </div>
      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span className="dot" aria-hidden="true" />
          <span>{project.category}</span>
          {project.year && (
            <>
              <span className="dot" aria-hidden="true" />
              <span>{project.year}</span>
            </>
          )}
        </p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__overview">{project.overview}</p>
        <ul role="list" className="tags">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <span className="project-card__cta" aria-hidden="true">
          View project details <ArrowUpRight size={16} />
        </span>
      </div>
    </article>
  );
}
