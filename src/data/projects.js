/**
 * Projects from the résumé.
 *
 * image:  put screenshots in /public/projects/ and reference them as
 *         'projects/freelancer.webp' (16:10 ratio looks best). Leave '' to use
 *         the built-in abstract cover.
 * github / live: leave '' to hide that button — no dead links.
 * category: used by the filter bar.
 */
export const projects = [
  {
    id: 'freelancer',
    title: 'Freelancer Management System',
    category: 'Full stack',
    year: '',
    overview:
      'A full-stack MERN web application that brings freelancer project management, task tracking and invoicing together in one platform.',
    problem:
      'Freelancers often juggle projects, tasks, time logs and invoices across separate tools, which makes billing slow and easy to get wrong.',
    solution:
      'One web platform with secure accounts, a real-time time-tracking engine with task tagging, and automated receipt and invoice generation — reducing billing processing effort by approximately 60%.',
    role: 'Developer across the stack: authentication, time tracking and invoicing, the React interface and the Express/MongoDB back end.',
    contributions: [
      'Implemented JWT-based authentication and user profile management to protect user data and control access',
      'Built a real-time time-tracking engine with task tagging and automated receipt/invoice generation',
      'Created a responsive, modular React UI with an interactive dashboard, sticky-notes widget and project/task breakdown views',
      'Integrated MongoDB with Express.js REST APIs using an MVC architecture, and designed data models for planned integrations',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'JWT', 'REST APIs'],
    image: '',
    github: '',
    live: '',
    accent: 'brown',
  },
  {
    id: 'movies',
    title: 'Movie Search Application',
    category: 'Front-end',
    year: '',
    overview:
      'An interactive web app that searches the OMDb API and displays movie information — from a list of results to a detailed movie profile.',
    problem:
      'Give users a quick, focused way to find a movie and see its details, using live data from a public API.',
    solution:
      'A lightweight JavaScript app that queries the OMDb API asynchronously and renders results and detailed profiles on the client, in a clean interface.',
    role: 'Developer: API integration, rendering logic and interface.',
    contributions: [
      'Implemented search with dynamic client-side rendering for multiple results',
      'Built detailed movie profile views from the API response',
      'Used the Fetch API, asynchronous JavaScript, DOM manipulation and event handling for a smooth experience',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Fetch API', 'OMDb API'],
    image: '',
    github: '',
    live: '',
    accent: 'coffee',
  },
  {
    id: 'weather',
    title: 'Weather Forecast Website',
    category: 'Front-end',
    year: '',
    overview:
      'A location-based weather site that shows live temperature, humidity and wind speed from the OpenWeatherMap REST API.',
    problem:
      'Show current weather for any location quickly — and handle invalid input or failed requests without confusing the user.',
    solution:
      'A location search backed by the OpenWeatherMap API with optimised DOM rendering, delivering real-time forecasts within 2 seconds, plus client-side validation and error handling.',
    role: 'Developer: API integration, search, validation and interface.',
    contributions: [
      'Integrated the OpenWeatherMap REST API to process and display live weather metrics',
      'Added a location-based search with optimised DOM rendering, returning forecasts within 2 seconds',
      'Implemented client-side error handling and input validation, reducing query errors by 40% and improving usability by 30%',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    image: '',
    github: '',
    live: '',
    accent: 'tan',
  },
];
