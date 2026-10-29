import { useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons.jsx';
import ProjectCover from './ProjectCover.jsx';
import Button from './Button.jsx';

/**
 * Case-study view built on the native <dialog> element:
 * focus trapping, Escape-to-close and the top layer come for free.
 */
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!project && dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const onBackdrop = (e) => {
    if (e.target === ref.current) onClose();
  };

  return (
    <dialog
      ref={ref}
      className="modal"
      onClose={onClose}
      onClick={onBackdrop}
      aria-labelledby="modal-title"
    >
      {project && (
        <div className="modal__panel">
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close project details">
            <X size={20} />
          </button>

          <div className="modal__media">
            <ProjectCover project={project} priority />
          </div>

          <div className="modal__content">
            <p className="eyebrow">
              <span>{project.category}</span>
              {project.year && <span>· {project.year}</span>}
            </p>
            <h2 id="modal-title" className="modal__title">
              {project.title}
            </h2>
            <p className="modal__overview">{project.overview}</p>

            <div className="modal__grid">
              <section>
                <h3 className="modal__label">Challenge</h3>
                <p>{project.problem}</p>
              </section>
              <section>
                <h3 className="modal__label">Solution</h3>
                <p>{project.solution}</p>
              </section>
              <section>
                <h3 className="modal__label">My role</h3>
                <p>{project.role}</p>
              </section>
              <section>
                <h3 className="modal__label">Stack</h3>
                <ul role="list" className="tags">
                  {project.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {project.contributions?.length > 0 && (
              <section className="modal__contrib">
                <h3 className="modal__label">Key contributions</h3>
                <ul role="list">
                  {project.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            )}

            {(project.live || project.github) && (
              <div className="modal__actions">
                {project.live && (
                  <Button href={project.live} icon={ExternalLink}>
                    Live demo
                  </Button>
                )}
                {project.github && (
                  <Button href={project.github} variant="ghost" icon={GithubIcon}>
                    Source code
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
