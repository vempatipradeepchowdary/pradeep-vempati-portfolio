import { Award, ArrowUpRight } from 'lucide-react';
import { certifications } from '../data/education.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Certifications() {
  if (!certifications.length) return null;

  return (
    <section id="certifications" className="section section--alt" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          id="certifications-title"
          title={<>Learning beyond the <em>classroom.</em></>}
          lede="Courses I completed to strengthen the skills I use in my projects."
        />

        <ul role="list" className="certs">
          {certifications.map((c, i) => {
            const body = (
              <>
                <span className="cert__icon" aria-hidden="true">
                  <Award size={20} />
                </span>
                <span className="cert__skill">{c.skill}</span>
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__issuer">
                  {c.issuer}
                  {c.url && <ArrowUpRight size={14} aria-hidden="true" />}
                </p>
              </>
            );
            return (
              <Reveal as="li" key={c.title} delay={i * 0.05} className="cert">
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer noopener" className="cert__inner cert__inner--link">
                    {body}
                  </a>
                ) : (
                  <div className="cert__inner">{body}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
