/**
 * Skills grouped exactly as in the résumé's Technical Skills section —
 * add a skill here only once it is on the résumé. `note` is one short line
 * on where the skill was used, taken from the résumé's projects and certifications.
 */
export const skillGroups = [
  {
    id: 'frontend',
    label: 'Front-End',
    index: '01',
    summary: 'Where most of my project work lives.',
    skills: [
      { name: 'React.js', note: 'Modular UI and dashboard · React certification' },
      { name: 'HTML5', note: 'Page structure for the Movie Search and Weather apps' },
      { name: 'CSS3', note: 'Layout and styling for clean, readable interfaces' },
      { name: 'DOM Manipulation', note: 'Dynamic client-side rendering and event handling' },
      { name: 'Responsive Design', note: 'Layouts that adapt across screen sizes' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    index: '02',
    summary: 'The foundations I build on.',
    skills: [
      { name: 'JavaScript', note: 'ES6+ and ES Modules · certified' },
      { name: 'Python', note: 'Certified · used in the Freelancer MS stack' },
      { name: 'C', note: 'Programming fundamentals' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    index: '03',
    summary: 'Querying the data behind an application.',
    skills: [{ name: 'SQL', note: 'Advanced SQL certification · Oracle Academy' }],
  },
  {
    id: 'tools',
    label: 'Tools & APIs',
    index: '04',
    summary: 'Version control, AI-assisted coding and live data.',
    skills: [
      { name: 'Git', note: 'Version control for my projects' },
      { name: 'GitHub', note: 'Hosting and managing repositories' },
      { name: 'VS Code', note: 'Code editor for my projects' },
      { name: 'Claude', note: 'AI-assisted coding, testing and learning' },
      { name: 'Fetch API', note: 'Asynchronous requests to REST APIs' },
      { name: 'OpenWeatherMap API', note: 'Live weather metrics in the Weather Forecast site' },
      { name: 'OMDb API', note: 'Movie search and details in the Movie Search app' },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    index: '05',
    summary: 'How I work with problems and people.',
    skills: [
      { name: 'Problem Solving', note: 'Breaking features into clear, testable steps' },
      { name: 'Team Collaboration', note: 'Working effectively towards a shared goal' },
      { name: 'Technical Communication', note: 'Explaining technical ideas clearly' },
    ],
  },
];
