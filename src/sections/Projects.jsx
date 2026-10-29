import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';

export default function Projects() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], []);
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );
  // Filters only earn their place with more than one category.
  const showFilters = categories.length > 2;

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__head">
          <SectionHeading
            eyebrow="Projects"
            id="projects-title"
            title={<>Things I&rsquo;ve <em>built</em>, and how.</>}
          />
          {showFilters && (
            <div className="filters" role="group" aria-label="Filter projects by category">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`filter ${filter === c ? 'is-active' : ''}`}
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                >
                  {c}
                  <span className="filter__count">
                    {c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} project{visible.length === 1 ? '' : 's'}
        </p>

        <motion.ul role="list" className="projects-grid" layout={!reduce}>
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((p, i) => (
              <motion.li
                key={p.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={i === 0 && filter === 'All' ? 'projects-grid__feature' : ''}
              >
                <ProjectCard project={p} index={projects.indexOf(p)} onOpen={setOpenProject} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
