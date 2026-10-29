import { motion, useReducedMotion } from 'framer-motion';

/**
 * The single scroll-reveal used site-wide: a short fade + 16px rise, once.
 * Keeping one pattern avoids the "everything animates differently" problem.
 */
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
