import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/**
 * Splits a stat like '4+' into its number and suffix, counts the number up
 * once when it scrolls into view, and styles the suffix as an accent.
 * Non-numeric values, `still` values (e.g. a year) and reduced motion render as-is.
 */
export default function StatValue({ value, still = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const [, num, suffix = ''] = String(value).match(/^(\d+)(.*)$/) ?? [];
  const animated = num !== undefined && !still && !reduce;
  const [shown, setShown] = useState(animated ? 0 : num);

  useEffect(() => {
    if (!animated || !inView) return undefined;
    const controls = animate(0, Number(num), {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [animated, inView, num]);

  if (num === undefined) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {shown}
        {suffix && <span className="stat__suffix">{suffix}</span>}
      </span>
    </span>
  );
}
