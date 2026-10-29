import { ArrowUp } from 'lucide-react';
import { site } from '../data/site.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="logo" aria-hidden="true">{site.monogram}</span>
          <p>
            &copy; {year} {site.name}. Built with React &amp; Vite.
          </p>
        </div>
        <SocialLinks withEmail />
        <a href="#home" className="footer__top">
          Back to top <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
