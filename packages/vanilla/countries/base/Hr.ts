// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.96 14.49 3.145 3.515a1 1 0 0 0 .786.332l.911-.037a1 1 0 0 1 .648.204l3.367 2.573a.616.616 0 0 0 .837-.894l-6.796-7.78a2 2 0 0 1-.473-1.03l-.157-1.09a.8.8 0 0 1 .421-.822l.066-.035a.8.8 0 0 1 .995.208l.537.669a.6.6 0 0 0 .784.134l1.304-.809a1 1 0 0 1 .673-.14l4.984.735a2 2 0 0 1 .924.39l.672.514a1 1 0 0 0 1.402-.187l.414-.542a1 1 0 0 0 .082-1.09l-1.444-2.625a1 1 0 0 0-1.232-.452l-.653.249a2 2 0 0 1-1.262.054l-1.948-.557a3 3 0 0 1-1.16-.634l-2.53-2.229a1 1 0 0 0-1.187-.1l-1.55.962a1 1 0 0 0-.438 1.11l.12.444a1 1 0 0 1-.115.784l-.886 1.438a1 1 0 0 1-1.276.38L5.362 7.4a1 1 0 0 0-.659-.067l-2.833.682a.6.6 0 0 0-.419.802l.774 1.973a.6.6 0 0 0 1.043.135l.654-.895a.6.6 0 0 1 .836-.132l.908.657a1 1 0 0 1 .388.584l.676 2.91a1 1 0 0 0 .23.44Z\"/>";
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

/** Build a <Hr/> icon as a live SVGSVGElement (browser only). */
export function Hr(options: IconOptions = {}): SVGSVGElement {
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
