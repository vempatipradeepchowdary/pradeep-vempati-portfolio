import { CodeXml, Database, LayoutTemplate, Users, Wrench } from 'lucide-react';

const ICONS = { frontend: LayoutTemplate, languages: CodeXml, database: Database, tools: Wrench, soft: Users };

/** One skill group: icon, title, summary and the skills with a short note each. */
export default function SkillCard({ group }) {
  const Icon = ICONS[group.id];
  return (
    <article className={`skill-card skill-card--${group.id}`}>
      <header className="skill-card__head">
        {Icon && (
          <span className="skill-card__icon" aria-hidden="true">
            <Icon size={20} />
          </span>
        )}
        <div>
          <h3 className="skill-card__title">{group.label}</h3>
          <p className="skill-card__summary">{group.summary}</p>
        </div>
      </header>
      <ul role="list" className="skill-card__list">
        {group.skills.map((s) => (
          <li key={s.name} className="skill-chip">
            <span className="skill-chip__name">{s.name}</span>
            <span className="skill-chip__note">{s.note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
