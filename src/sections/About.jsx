import { Award, Download, FolderGit2, GraduationCap, Lightbulb, MessagesSquare, Target } from 'lucide-react';
import { site } from '../data/site.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import StatValue from '../components/StatValue.jsx';
import { useFileExists } from '../hooks/useFileExists.js';

const STAT_ICONS = { projects: FolderGit2, certs: Award, degree: GraduationCap };
const PRINCIPLE_ICONS = [Target, Lightbulb, MessagesSquare];

export default function About() {
  const { about } = site;
  const stats = site.stats.filter((s) => s.value !== null && s.value !== '');
  const hasResume = useFileExists(site.resumeUrl);

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading eyebrow="About" id="about-title" title={<>A developer at the <em>start</em> of the journey.</>} />

        <div className="about">
          <Reveal className="about__portrait">
            <aside className="profile" aria-label="Profile summary">
              <div className="profile__head">
                {site.avatar ? (
                  <img
                    className="profile__mono profile__avatar"
                    src={site.avatar}
                    alt={`Portrait of ${site.name}`}
                    width="148"
                    height="148"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="profile__mono" aria-hidden="true">{site.monogram}</span>
                )}
                <div>
                  <p className="profile__name">{site.name}</p>
                  <p className="profile__role">{site.role}</p>
                </div>
              </div>
              <dl className="profile__facts">
                {site.facts.map((f) => (
                  <div key={f.label} className="profile__fact">
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              {hasResume && (
                <Button href={site.resumeUrl} variant="ghost" icon={Download} download external={false} className="profile__cta">
                  Download résumé
                </Button>
              )}
            </aside>
          </Reveal>

          <div className="about__body">
            <Reveal>
              {about.summary.map((p, i) => (
                <p key={i} className={i === 0 ? 'about__lead' : 'about__text'}>
                  {p}
                </p>
              ))}
            </Reveal>

            <ol role="list" className="principles">
              {about.philosophy.map((item, i) => {
                const Icon = PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length];
                return (
                <Reveal as="li" key={item.title} delay={i * 0.06} className="principle">
                  <span className="principle__n" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
                );
              })}
            </ol>

            {about.goals && (
              <Reveal as="p" className="about__goal">
                <span className="about__goal-label">Career goal</span>
                {about.goals}
              </Reveal>
            )}

            {stats.length > 0 && (
              <Reveal as="dl" className="stats">
                {stats.map((s) => {
                  const Icon = STAT_ICONS[s.icon];
                  return (
                    <div key={s.label} className="stat">
                      <dt>
                        {Icon && (
                          <span className="stat__icon" aria-hidden="true">
                            <Icon size={16} />
                          </span>
                        )}
                        {s.label}
                      </dt>
                      <dd>
                        <StatValue value={s.value} still={s.still} />
                      </dd>
                    </div>
                  );
                })}
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
