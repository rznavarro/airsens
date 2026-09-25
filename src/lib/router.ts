import { useEffect, useState } from 'react';

/** Navegación con URLs reales (history API) para que cada página sea indexable. */
export const navigate = (path: string) => {
  if (path !== window.location.pathname) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  window.scrollTo({ top: 0 });
};

/** Va al inicio y hace scroll a una sección (#id) una vez montada la home. */
export const navigateToSection = (sectionId: string) => {
  navigate('/');
  requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  });
};

export const usePathname = () => {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    // Compatibilidad con los enlaces antiguos tipo #/red-de-incendio
    const legacy = window.location.hash.match(/^#\/([\w-]+)/);
    if (legacy) {
      window.history.replaceState({}, '', `/${legacy[1]}`);
      setPathname(`/${legacy[1]}`);
    }

    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return pathname;
};
