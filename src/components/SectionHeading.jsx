import Reveal from './Reveal.jsx';

/** Section header: small accent label, bold title, optional lede. */
export default function SectionHeading({ eyebrow, title, lede, id, align = 'left' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  );
}
