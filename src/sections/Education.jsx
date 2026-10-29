import { education } from '../data/education.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          id="education-title"
          title={<>A steady path into <em>computer science.</em></>}
        />

        <ol role="list" className="timeline">
          {education.map((item, i) => (
            <Reveal as="li" key={item.qualification} delay={i * 0.05} className={`timeline__item ${i === 0 ? 'timeline__item--current' : ''}`}>
              <div className="timeline__when">
                <span className="timeline__period">{item.period}</span>
                <span className="track-badge track-badge--accent">{item.level}</span>
              </div>
              <span className="timeline__node" aria-hidden="true" />
              <div className="timeline__card">
                <h3 className="timeline__role">{item.qualification}</h3>
                <p className="timeline__company">
                  {item.institution}
                  {item.location && <span> · {item.location}</span>}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
