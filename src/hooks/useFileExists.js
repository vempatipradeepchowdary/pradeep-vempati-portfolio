import { useEffect, useState } from 'react';

/**
 * HEAD-checks a same-origin file (e.g. /resume.pdf) so we never render a
 * download button that leads to a 404. Returns null while checking.
 */
export function useFileExists(url) {
  const [exists, setExists] = useState(url ? null : false);

  useEffect(() => {
    if (!url) return undefined;
    let cancelled = false;
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || '';
        // Dev servers answer unknown paths with index.html — treat that as missing.
        if (!cancelled) setExists(res.ok && !type.includes('text/html'));
      })
      .catch(() => !cancelled && setExists(false));
    return () => {
      cancelled = true;
    };
  }, [url]);

  return exists;
}
