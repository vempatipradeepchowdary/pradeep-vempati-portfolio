import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Award, Download, FolderGit2, GraduationCap, Mail, MapPin } from 'lucide-react';
import { site } from '../data/site.js';
import Button from '../components/Button.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { useFileExists } from '../hooks/useFileExists.js';

const ease = [0.22, 1, 0.36, 1];
const BADGE_ICONS = { degree: GraduationCap, projects: FolderGit2, certs: Award };

export default function Hero() {
  const reduce = useReducedMotion();
  const hasResume = useFileExists(site.resumeUrl);

  const rise = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease, delay } };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          {site.availability?.open && (
            <motion.p className="status" {...rise(0)}>
              <span className="status__dot" aria-hidden="true" />
              {site.availability.label}
            </motion.p>
          )}

          <motion.h1 id="hero-title" className="hero__title" {...rise(0.06)}>
            <span className="hero__hello">Hi, I&rsquo;m</span> <span className="hero__name">{site.name}</span>
          </motion.h1>

          <motion.p className="hero__role" {...rise(0.12)}>
            {site.role}
          </motion.p>

          <motion.p className="hero__intro" {...rise(0.18)}>
            {site.intro}
          </motion.p>

          {site.heroStack?.length > 0 && (
            <motion.div className="hero__stack" {...rise(0.24)}>
              <span className="hero__stack-label">Core stack</span>
              <ul role="list" className="tags">
                {site.heroStack.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div className="hero__actions" {...rise(0.3)}>
            <Button href="#projects" size="lg" icon={ArrowRight}>
              View my projects
            </Button>
            {hasResume ? (
              <Button href={site.resumeUrl} variant="ghost" size="lg" icon={Download} download external={false}>
                Download résumé
              </Button>
            ) : (
              <Button href="#contact" variant="ghost" size="lg" icon={Mail}>
                Contact me
              </Button>
            )}
          </motion.div>

          <motion.div className="hero__foot" {...rise(0.36)}>
            <SocialLinks withEmail />
            {site.location && (
              <span className="hero__loc">
                <MapPin size={15} aria-hidden="true" /> {site.location}
              </span>
            )}
          </motion.div>
        </div>

        <motion.div className="hero__visual" {...rise(0.15)}>
          <div className="hero-photo">
            {site.portrait ? (
              <img src={site.portrait} alt={`Portrait of ${site.name}`} width="640" height="800" fetchpriority="high" decoding="async" />
            ) : (
              <span className="hero-photo__mono" aria-hidden="true">
                {site.monogram}
              </span>
            )}
          </div>
          {site.heroBadges?.map((b, i) => {
            const Icon = BADGE_ICONS[b.icon];
            return (
              <div key={b.label} className={`hero-badge hero-badge--${i + 1}`}>
                {Icon && (
                  <span className="hero-badge__icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                )}
                <span>
                  <strong>{b.value}</strong>
                  <span>{b.label}</span>
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
