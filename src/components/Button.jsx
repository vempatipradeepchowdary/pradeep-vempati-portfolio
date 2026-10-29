/**
 * One button component for the whole site.
 * Renders <a> when given href, otherwise <button>.
 * variant: 'primary' | 'ghost' | 'link'
 */
export default function Button({ href, variant = 'primary', size = 'md', icon: Icon, iconAfter = true, children, className = '', external, ...rest }) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      {Icon && !iconAfter && <Icon className="btn__icon" size={16} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconAfter && <Icon className="btn__icon" size={16} aria-hidden="true" />}
    </>
  );

  if (href) {
    const ext = external ?? /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noreferrer noopener' } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
