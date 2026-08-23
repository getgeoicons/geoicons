// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.617 14.644a.6.6 0 0 0 .251.892l3.122 1.37c1.153.505 2.365.864 3.608 1.067l1.552.253c.883.144 1.777.209 2.672.194l7.701-.131a.6.6 0 0 0 .586-.67l-.21-1.792a2 2 0 0 1 .144-1.01l1.53-3.627a2 2 0 0 0 .129-1.114l-.516-3.03a1 1 0 0 0-.775-.809l-1.454-.314a1 1 0 0 0-1.123.568l-.534 1.19a.63.63 0 0 1-1.172-.06l-.563-1.687a.55.55 0 0 0-1.008-.084l-1.041 1.964a.69.69 0 0 1-1.283-.175l-.049-.22a.974.974 0 0 0-1.346-.681l-.408.181a1 1 0 0 0-.582.756l-.485 3.039a1 1 0 0 1-.13.357l-.355.593a.6.6 0 0 1-.612.283l-.515-.084a.6.6 0 0 1-.488-.729l.229-.982a1 1 0 0 0-.452-1.08L7.43 8.7a1 1 0 0 0-.7-.132l-2.745.494a1 1 0 0 0-.815 1.105l.187 1.53a1 1 0 0 1-.172.693z\"/>";
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

/** Build a <GtEscuintla/> icon as a live SVGSVGElement (browser only). */
export function GtEscuintla(options: IconOptions = {}): SVGSVGElement {
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
