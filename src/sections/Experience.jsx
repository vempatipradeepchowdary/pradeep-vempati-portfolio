import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Experience() {
  if (!experience.length) return null;

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          id="experience-title"
          title={<>Hands-on work with <em>real-world</em> data.</>}
        />

        <ol role="list" className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.role}`} delay={i * 0.05} className={`timeline__item ${i === 0 ? 'timeline__item--current' : ''}`}>
              <div className="timeline__when">
                <span className="timeline__period">{job.period}</span>
                <span className="track-badge track-badge--accent">{job.type}</span>
              </div>
              <span className="timeline__node" aria-hidden="true" />
              <article className="timeline__card job">
                <header className="job__head">
                  <span className="job__icon" aria-hidden="true">
                    <Briefcase size={20} />
                  </span>
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">
                      {job.company}
                      {job.via && <span> · {job.via}</span>}
                    </p>
                  </div>
                </header>
                {job.summary && <p className="job__summary">{job.summary}</p>}
                <ul role="list" className="job__points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {job.tags?.length > 0 && (
                  <ul role="list" className="tags">
                    {job.tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
