/**
 * ─────────────────────────────────────────────────────────────
 *  PERSONAL DETAILS — edit this file first.
 *  Anything left as an empty string or null is hidden on the
 *  page instead of showing a placeholder or a dead link.
 *  Source of truth: Pradeep's résumé.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Pradeep Vempati',
  shortName: 'Pradeep',
  monogram: 'PV',
  // Hero photo in public/ (4:5). Leave '' to show the monogram.
  portrait: 'portrait.webp',
  // Square photo for the About card. Leave '' to show the monogram.
  avatar: 'avatar.webp',
  role: 'Entry-Level Software Developer · Front-End',
  location: 'Hyderabad, Telangana',

  // Hero
  intro:
    'I’m a Computer Science graduate who builds web applications with React, JavaScript, HTML and CSS — from API-driven front ends to a full-stack MERN project.',

  // Core technologies shown under the hero intro — résumé skills only.
  heroStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  // Small cards pinned to the hero photo. icon: 'degree' | 'projects' | 'certs'
  heroBadges: [
    { icon: 'degree', value: 'B.Tech CSE', label: 'Class of 2026' },
    { icon: 'projects', value: '3+', label: 'Projects built' },
  ],

  availability: {
    open: true,
    label: 'Open to entry-level roles & internships',
  },

  // Put the PDF at public/resume.pdf. The buttons stay hidden until the file exists.
  resumeUrl: 'resume.pdf',

  email: 'pradeepvempati602@gmail.com',
  // Shown in the contact section when filled in, e.g. '+91 91828 81734'. Left empty so the number isn't published by default.
  phone: '',
  social: {
    github: '', // e.g. 'https://github.com/username'
    linkedin: '', // e.g. 'https://www.linkedin.com/in/username'
    instagram: '',
    twitter: '',
  },

  // About
  about: {
    summary: [
      'I’m a Computer Science and Engineering graduate focused on front-end web development. I like turning an idea into an interface that is clear, responsive and pleasant to use — and understanding how the data behind it flows.',
      'My path started with a Diploma in Computer Engineering before my B.Tech at Malla Reddy College of Engineering and Technology. Along the way I’ve built a full-stack MERN freelancer management system, a movie search app on the OMDb API and a weather forecast site on the OpenWeatherMap API, and earned certifications in Advanced SQL, Python, JavaScript and React.',
    ],
    philosophy: [
      { title: 'Break the problem down', text: 'Understand what the user needs first, then split the work into small steps — from fetching data to validating input and handling errors.' },
      { title: 'Learn by building', text: 'Each project pushed me further: DOM manipulation and the Fetch API first, then React, Node.js, Express and MongoDB on a full-stack build.' },
      { title: 'Communicate and collaborate', text: 'Readable code, a sensible structure and clear explanations make it easier to work with a team — and to learn from one.' },
    ],
    goals:
      'An entry-level role or internship where I can contribute to real-world projects, learn from an experienced team and keep growing as a developer.',
  },

  // Quick facts beside the About text.
  facts: [
    { label: 'Based in', value: 'Hyderabad, Telangana' },
    { label: 'Education', value: 'B.Tech, Computer Science & Engineering' },
    { label: 'Focus', value: 'Front-end · React.js · JavaScript' },
    { label: 'Looking for', value: 'Entry-level roles & internships' },
  ],

  /**
   * Only numbers that come straight from the résumé.
   * Set value to null to hide a stat. If all are null the row is hidden.
   */
  stats: [
    { label: 'Projects built', value: '3+', icon: 'projects' },
    { label: 'Certifications', value: '4+', icon: 'certs' },
    { label: 'B.Tech completion', value: '2026', icon: 'degree', still: true },
  ],

  /**
   * Contact form. Create a free form at https://formspree.io and put its
   * endpoint in a .env file:  VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxx
   * Without it, the form opens the visitor's email app instead — it never
   * pretends to have sent anything.
   */
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};
