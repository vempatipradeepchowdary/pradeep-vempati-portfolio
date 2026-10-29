import { useState } from 'react';
import { processSteps } from '../data/process.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

/**
 * Six-step process. On desktop, hovering or focusing a step fills the
 * progress rail up to it — a quiet interaction that explains sequence.
 */
export default function Process() {
  const [active, setActive] = useState(0);
  const pct = ((active + 1) / processSteps.length) * 100;

  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          eyebrow="Approach"
          id="process-title"
          title={<>How I take a project from <em>idea</em> to working app.</>}
        />

        <div className="process" style={{ '--progress': `${pct}%` }}>
          <div className="process__rail" aria-hidden="true">
            <span className="process__fill" />
          </div>
          <ol role="list" className="process__list">
            {processSteps.map((s, i) => (
              <Reveal
                as="li"
                key={s.n}
                delay={i * 0.04}
                className={`process__step ${i <= active ? 'is-reached' : ''} ${i === active ? 'is-current' : ''}`}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
              >
                <span className="process__n">{s.n}</span>
                <h3 className="process__title">{s.title}</h3>
                <p className="process__text">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
