import { useState } from 'react';
import { ArrowUpRight, Check, AlertCircle, Loader2, Send, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '../data/site.js';
import SectionHeading from '../components/SectionHeading.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import Reveal from '../components/Reveal.jsx';

const EMPTY = { name: '', email: '', subject: '', message: '', company: '' }; // company = honeypot

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please tell me your name.';
  if (!v.email.trim()) e.email = 'An email address is needed so I can reply.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'That email address doesn’t look right.';
  if (!v.subject.trim()) e.subject = 'Add a short subject.';
  if (v.message.trim().length < 10) e.message = 'A sentence or two helps — at least 10 characters.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | mailto
  const hasEndpoint = Boolean(site.formEndpoint);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    if (values.company) return; // bot

    if (!hasEndpoint) {
      // No backend configured: hand off to the visitor's mail client — honestly.
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: values.name, email: values.email, subject: values.subject, message: values.message }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('success');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const field = (name, label, props = {}) => {
    const Tag = props.as === 'textarea' ? 'textarea' : 'input';
    const { as, ...rest } = props;
    return (
      <div className={`field ${errors[name] ? 'field--invalid' : ''} ${as === 'textarea' ? 'field--full' : ''}`}>
        <label htmlFor={`f-${name}`}>{label}</label>
        <Tag
          id={`f-${name}`}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={errors[name] ? 'true' : undefined}
          aria-describedby={errors[name] ? `f-${name}-err` : undefined}
          disabled={status === 'sending'}
          {...rest}
        />
        {errors[name] && (
          <p id={`f-${name}-err`} className="field__error">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="section section--alt contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__intro">
            <SectionHeading
              eyebrow="Contact"
              id="contact-title"
              title={<>Hiring for an entry-level role? <em>Let&rsquo;s talk.</em></>}
              lede="I’m actively looking for entry-level developer roles and internships. Recruiters, hiring managers and fellow developers are all welcome to reach out."
            />
            <Reveal as="ul" role="list" className="contact__cards">
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="contact-card">
                    <span className="contact-card__icon" aria-hidden="true">
                      <Mail size={18} />
                    </span>
                    <span>
                      <span className="contact-card__label">Email</span>
                      <span className="contact-card__value">{site.email}</span>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" className="contact-card__go" />
                  </a>
                </li>
              )}
              {site.phone && (
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="contact-card">
                    <span className="contact-card__icon" aria-hidden="true">
                      <Phone size={18} />
                    </span>
                    <span>
                      <span className="contact-card__label">Phone</span>
                      <span className="contact-card__value">{site.phone}</span>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" className="contact-card__go" />
                  </a>
                </li>
              )}
              {site.location && (
                <li>
                  <div className="contact-card">
                    <span className="contact-card__icon" aria-hidden="true">
                      <MapPin size={18} />
                    </span>
                    <span>
                      <span className="contact-card__label">Location</span>
                      <span className="contact-card__value">{site.location}</span>
                    </span>
                  </div>
                </li>
              )}
            </Reveal>
            <SocialLinks className="contact__social" />
          </div>

          <Reveal className="contact__form-wrap">
            <form className="form" onSubmit={onSubmit} noValidate aria-describedby="form-status">
              <div className="form__grid">
                {field('name', 'Name', { autoComplete: 'name', placeholder: 'Jane Doe' })}
                {field('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'jane@company.com' })}
              </div>
              {field('subject', 'Subject', { placeholder: 'Junior developer role at …' })}
              {field('message', 'Message', { as: 'textarea', rows: 5, placeholder: 'A little about the role or opportunity…' })}

              {/* Honeypot: hidden from people, tempting to bots */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={onChange} />
              </div>

              <div className="form__footer">
                <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="spin btn__icon" aria-hidden="true" /> <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>{hasEndpoint ? 'Send message' : 'Compose email'}</span>
                      <Send size={16} className="btn__icon" aria-hidden="true" />
                    </>
                  )}
                </button>

                <div id="form-status" role="status" aria-live="polite" className="form__status">
                  {status === 'success' && (
                    <p className="notice notice--ok">
                      <Check size={16} aria-hidden="true" /> Message sent — thank you. I&rsquo;ll be in touch soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="notice notice--err">
                      <AlertCircle size={16} aria-hidden="true" /> That didn&rsquo;t go through. Please try again, or email{' '}
                      <a href={`mailto:${site.email}`}>{site.email}</a> directly.
                    </p>
                  )}
                  {status === 'mailto' && (
                    <p className="notice">
                      <Mail size={16} aria-hidden="true" /> Your email app should open with the message filled in. If it
                      didn&rsquo;t, write to <a href={`mailto:${site.email}`}>{site.email}</a>.
                    </p>
                  )}
                  {status === 'idle' && !hasEndpoint && (
                    <p className="form__hint">Opens your email app with this message ready to send.</p>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
