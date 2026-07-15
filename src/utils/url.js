// Macht interne Pfade base-aware. Lokal/auf der Domain ist base '/',
// auf GitHub Pages '/dart-lounge-site/'. So funktionieren Links und Bilder überall.
const BASE = import.meta.env.BASE_URL || '/';

export function url(path = '/') {
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = String(path).startsWith('/') ? path : '/' + path;
  return (b + p) || '/';
}
