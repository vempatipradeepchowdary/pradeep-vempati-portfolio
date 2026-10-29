import { useId } from 'react';

/**
 * Project image, or a generated cover: a browser window with a simple
 * illustration of that project's interface. Colours come from CSS custom
 * properties, so the cover follows the light/dark theme.
 * Always 16:10 so the grid stays aligned.
 */
export default function ProjectCover({ project, priority = false }) {
  const uid = useId().replace(/:/g, '');

  if (project.image) {
    return (
      <div className="cover">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width="1600"
          height="1000"
        />
      </div>
    );
  }

  const Scene = SCENES[project.id] ?? GenericScene;

  return (
    <div className={`cover cover--generated cover--${project.accent || 'brown'}`} aria-hidden="true">
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--cv-bg-a)' }} />
            <stop offset="1" style={{ stopColor: 'var(--cv-bg-b)' }} />
          </linearGradient>
          <radialGradient id={`${uid}-glow`} cx="0.85" cy="0.1" r="0.7">
            <stop offset="0" style={{ stopColor: 'var(--cv-accent)', stopOpacity: 0.28 }} />
            <stop offset="1" style={{ stopColor: 'var(--cv-accent)', stopOpacity: 0 }} />
          </radialGradient>
          <pattern id={`${uid}-dots`} width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.9" className="cv-dot" />
          </pattern>
        </defs>
        <rect width="320" height="200" fill={`url(#${uid}-bg)`} />
        <rect width="320" height="200" fill={`url(#${uid}-glow)`} />
        <rect width="320" height="200" fill={`url(#${uid}-dots)`} />

        <g transform="translate(30 22)">
          <rect width="260" height="156" rx="10" className="cv-window" />
          <path d="M0 10a10 10 0 0 1 10-10h240a10 10 0 0 1 10 10v10H0Z" className="cv-bar" />
          <circle cx="11" cy="10" r="2.6" className="cv-light" />
          <circle cx="20" cy="10" r="2.6" className="cv-light" />
          <circle cx="29" cy="10" r="2.6" className="cv-light" />
          <text x="130" y="12.4" textAnchor="middle" className="cv-muted cv-6">
            {project.title}
          </text>
          <Scene uid={uid} />
        </g>
      </svg>
    </div>
  );
}

/* ---------- Shared bits ---------- */

function SearchBar({ placeholder }) {
  return (
    <g>
      <rect x="14" y="30" width="232" height="18" rx="9" className="cv-block" />
      <circle cx="26" cy="38.5" r="3.4" className="cv-icon-line" />
      <path d="M28.5 41l2.6 2.6" className="cv-icon-line" />
      <text x="35" y="41.3" className="cv-muted cv-6">{placeholder}</text>
      <rect x="204" y="32" width="40" height="14" rx="7" className="cv-accent" />
      <text x="224" y="41.2" textAnchor="middle" className="cv-on-accent cv-6 cv-bold">Search</text>
    </g>
  );
}

/* ---------- Freelancer Management System: dashboard ---------- */

const SPARKS = [
  'M0 9 L8 7 L16 8 L24 4 L32 5 L40 1',
  'M0 6 L8 8 L16 4 L24 6 L32 2 L40 3',
  'M0 10 L8 9 L16 6 L24 7 L32 3 L40 2',
];

function FreelancerScene() {
  const tiles = ['Projects', 'Tasks', 'Invoices'];
  const tasks = [
    { w: 72, tag: 'Design', done: true },
    { w: 58, tag: 'Dev', done: true },
    { w: 84, tag: 'Billing', done: false },
  ];
  return (
    <g>
      {/* Sidebar */}
      <path d="M0 20H54V156H10A10 10 0 0 1 0 146Z" className="cv-bar" />
      <rect x="9" y="29" width="12" height="12" rx="3.5" className="cv-accent" />
      <text x="25" y="38" className="cv-text cv-7">FMS</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          {i === 0 && <rect x="6" y={50 + i * 15} width="42" height="11" rx="3" className="cv-accent-soft" />}
          <rect x="11" y={54 + i * 15} width="4" height="4" rx="1" className={i === 0 ? 'cv-accent' : 'cv-light'} />
          <rect x="19" y={54.5 + i * 15} width={[22, 18, 24, 16][i]} height="3" rx="1.5" className={i === 0 ? 'cv-accent' : 'cv-block'} />
        </g>
      ))}

      {/* Header */}
      <text x="64" y="38" className="cv-text cv-9">Dashboard</text>
      <rect x="184" y="28" width="66" height="15" rx="7.5" className="cv-accent" />
      <path d="M192 32.5v6l5-3z" className="cv-on-accent" />
      <text x="200" y="38.6" className="cv-on-accent cv-6 cv-mono">01:24:36</text>

      {/* Stat tiles with sparklines */}
      {tiles.map((label, i) => {
        const x = 64 + i * 63;
        return (
          <g key={label}>
            <rect x={x} y="50" width="58" height="36" rx="6" className="cv-panel" />
            <text x={x + 7} y="61" className="cv-muted cv-55">{label}</text>
            <path d={SPARKS[i]} transform={`translate(${x + 9} 68)`} className="cv-spark" />
          </g>
        );
      })}

      {/* Tagged task list */}
      <rect x="64" y="93" width="186" height="54" rx="6" className="cv-panel" />
      {tasks.map((t, i) => {
        const y = 104 + i * 15;
        return (
          <g key={t.tag}>
            <circle cx="75" cy={y} r="3.6" className={t.done ? 'cv-accent' : 'cv-ring'} />
            {t.done && <path d={`M73.3 ${y}l1.3 1.3 2.2-2.4`} className="cv-tick" />}
            <rect x="85" y={y - 2} width={t.w} height="4" rx="2" className="cv-block" />
            <rect x="204" y={y - 5} width="38" height="10" rx="5" className="cv-accent-soft" />
            <text x="223" y={y + 1.9} textAnchor="middle" className="cv-accent-text cv-5">{t.tag}</text>
          </g>
        );
      })}
    </g>
  );
}

/* ---------- Movie Search Application: search + poster grid ---------- */

const POSTER_HUES = [
  ['#84532e', '#2a190e'],
  ['#7f4634', '#22100b'],
  ['#b07f50', '#4f3019'],
  ['#57534e', '#1c1917'],
];

function MovieScene({ uid }) {
  return (
    <g>
      <defs>
        {POSTER_HUES.map(([a, b], i) => (
          <linearGradient key={i} id={`${uid}-p${i}`} x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor={a} />
            <stop offset="1" stopColor={b} />
          </linearGradient>
        ))}
      </defs>
      <SearchBar placeholder="Search movies…" />
      {POSTER_HUES.map((_, i) => {
        const x = 14 + i * 59;
        return (
          <g key={i}>
            <rect x={x} y="57" width="53" height="68" rx="5" fill={`url(#${uid}-p${i})`} />
            {i === 0 && <rect x={x - 1.5} y="55.5" width="56" height="71" rx="6" className="cv-select" />}
            <circle cx={x + 26.5} cy="91" r="8" className="cv-play-bg" />
            <path d={`M${x + 24} 87.2v7.6l6.2-3.8z`} className="cv-play" />
            <rect x={x} y="131" width={[40, 34, 44, 30][i]} height="4" rx="2" className="cv-block-strong" />
            <rect x={x} y="139" width="20" height="3" rx="1.5" className="cv-block" />
            <path d={`M${x + 45} 138.2l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z`} className="cv-star" />
          </g>
        );
      })}
    </g>
  );
}

/* ---------- Weather Forecast Website: search + conditions ---------- */

function WeatherScene({ uid }) {
  const metrics = [
    { label: 'Temperature', value: '24 °C', icon: 'temp' },
    { label: 'Humidity', value: '62 %', icon: 'drop' },
    { label: 'Wind speed', value: '12 km/h', icon: 'wind' },
  ];
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-sun`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b07a4b" />
          <stop offset="1" stopColor="#5a3818" />
        </linearGradient>
      </defs>
      <SearchBar placeholder="Search city…" />

      {/* Current conditions */}
      <rect x="14" y="56" width="108" height="88" rx="8" fill={`url(#${uid}-sun)`} />
      <g transform="translate(42 82)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <rect key={a} x="-1" y="-15" width="2" height="5" rx="1" className="cv-sun" transform={`rotate(${a})`} />
        ))}
        <circle r="8" className="cv-sun" />
      </g>
      <path d="M70 92a7 7 0 0 1 13.4-2.6A6 6 0 1 1 86 101H72a5 5 0 0 1-2-9.6z" className="cv-cloud" />
      <text x="24" y="124" className="cv-white cv-20 cv-bold">24°</text>
      <text x="24" y="135" className="cv-white-soft cv-6">Partly cloudy</text>

      {/* Metrics */}
      {metrics.map((m, i) => {
        const y = 56 + i * 31;
        return (
          <g key={m.label}>
            <rect x="130" y={y} width="116" height="26" rx="6" className="cv-panel" />
            <circle cx="144" cy={y + 13} r="7" className="cv-accent-soft" />
            <MetricIcon kind={m.icon} cx={144} cy={y + 13} />
            <text x="156" y={y + 10.5} className="cv-muted cv-55">{m.label}</text>
            <text x="156" y={y + 20} className="cv-text cv-75">{m.value}</text>
          </g>
        );
      })}
    </g>
  );
}

function MetricIcon({ kind, cx, cy }) {
  if (kind === 'temp')
    return (
      <g className="cv-icon-accent">
        <path d={`M${cx - 1} ${cy - 4}a1 1 0 0 1 2 0v4.6a2.2 2.2 0 1 1-2 0z`} />
      </g>
    );
  if (kind === 'drop') return <path d={`M${cx} ${cy - 4.2}c2.4 2.8 3.2 4.2 3.2 5.4a3.2 3.2 0 0 1-6.4 0c0-1.2.8-2.6 3.2-5.4z`} className="cv-icon-accent" />;
  return <path d={`M${cx - 4} ${cy - 1.6}h5.2a1.6 1.6 0 1 0-1.6-1.6M${cx - 4} ${cy + 1}h7a1.6 1.6 0 1 1-1.6 1.6`} className="cv-icon-accent-line" />;
}

/* ---------- Fallback for projects without a custom scene ---------- */

function GenericScene() {
  return (
    <g>
      <rect x="14" y="32" width="120" height="8" rx="4" className="cv-block-strong" />
      <rect x="14" y="46" width="80" height="5" rx="2.5" className="cv-block" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={14 + i * 79} y="64" width="73" height="78" rx="6" className="cv-panel" />
          <rect x={22 + i * 79} y="72" width="20" height="20" rx="5" className={i === 0 ? 'cv-accent' : 'cv-accent-soft'} />
          <rect x={22 + i * 79} y="102" width="50" height="4" rx="2" className="cv-block-strong" />
          <rect x={22 + i * 79} y="112" width="38" height="3" rx="1.5" className="cv-block" />
        </g>
      ))}
    </g>
  );
}

const SCENES = {
  freelancer: FreelancerScene,
  movies: MovieScene,
  weather: WeatherScene,
};
