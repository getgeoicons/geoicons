// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.633 15.475-.953 3.2a.6.6 0 0 0 .362.732l3.861 1.465a.6.6 0 0 0 .694-.203l.367-.492a1 1 0 0 1 1.24-.302l.77.376a1 1 0 0 0 1.081-.133l.618-.518a1 1 0 0 0 .345-.92l-.247-1.582a1 1 0 0 1 .713-1.115l3.61-1.034a1 1 0 0 1 .531-.006l2.16.573a1 1 0 0 0 .558-.013l1.03-.326a1 1 0 0 0 .545-.421l.663-1.055a1 1 0 0 0 .13-.749l-.051-.23a1 1 0 0 0-1.069-.779l-1.57.145a1 1 0 0 1-.872-.37l-.899-1.124a.6.6 0 0 1 .274-.942l1.318-.451a1 1 0 0 0 .649-1.178l-.847-3.564a1 1 0 0 0-1.348-.696l-1.05.424a1 1 0 0 1-.898-.075l-1.107-.68a.6.6 0 0 0-.906.408l-.13.754a1 1 0 0 1-.7.788l-1.948.578a1 1 0 0 0-.429.258L7.515 9.902a1 1 0 0 1-1.121.213l-.633-.282a.6.6 0 0 0-.842.502l-.016.206a.6.6 0 0 1-.769.53l-.899-.267a1 1 0 0 0-.32-.041l-.643.023a.945.945 0 0 0-.345 1.81l1.507.662a1 1 0 0 1 .443.38l.643 1.016a1 1 0 0 1 .113.82Z\"/>";
const NS = 'http://www.w3.org/2000/svg';
let uid = 0;

/** Options accepted by every icon factory. */
export interface IconOptions {
  /** Convenience — sets both width and height. Default 24. */
  size?: number | string;
  /** Stroke width in SVG units. Default 1. */
  strokeWidth?: number | string;
  /** Any native SVG attribute (class, style, stroke, fill, aria-label, data-*, …). */
  [attr: string]: string | number | undefined;
}

/** Build a <WesternEuropeSimplified/> icon as a live SVGSVGElement (browser only). */
export function WesternEuropeSimplified(options: IconOptions = {}): SVGSVGElement {
  // Compliance nudge: warns once if icons render without initGeoiconsLicense().
  // Client-only + deferred inside noteIconRender.
  noteIconRender();

  const { size = 24, strokeWidth = 1, ...attrs } = options;

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', String(strokeWidth));
  svg.setAttribute('fill', 'none');

  // Forwarded native attrs override the defaults above (spread-equivalent).
  const label = attrs['aria-label'];
  for (const key in attrs) {
    const value = attrs[key];
    if (value != null) svg.setAttribute(key, String(value));
  }

  // Trusted, SVGO-optimized asset body.
  svg.innerHTML = BODY;

  if (label != null) {
    // Decorative by default; aria-label promotes to role="img" + <title>.
    const id = `geo-${uid++}-title`;
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', id);
    const title = document.createElementNS(NS, 'title');
    title.id = id;
    title.textContent = String(label);
    svg.insertBefore(title, svg.firstChild);
  } else {
    svg.setAttribute('aria-hidden', 'true');
  }

  return svg;
}
