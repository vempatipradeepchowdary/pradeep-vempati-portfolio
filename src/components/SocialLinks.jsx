import { Mail } from 'lucide-react';
import { site } from '../data/site.js';
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from './BrandIcons.jsx';

/** Renders only the links that are filled in on site.js. */
export default function SocialLinks({ withEmail = false, className = '' }) {
  const links = [
    site.social.github && { href: site.social.github, label: 'GitHub', Icon: GithubIcon },
    site.social.linkedin && { href: site.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
    site.social.instagram && { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
    site.social.twitter &&{ href: site.social.twitter, label: 'X (Twitter)', Icon: XIcon },
    withEmail && site.email && { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
  ].filter(Boolean);

  if (!links.length) return null;

  return (
    <ul className={`social ${className}`} role="list">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            className="social__link"
            aria-label={label}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            <Icon width={18} height={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
